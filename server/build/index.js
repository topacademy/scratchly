"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const express = require("express");
const expressWs = require('express-ws');
const bodyParser = require('body-parser');
const process_1 = require("./process");
const homeDirPath = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
const eduBlocksWorkingPath = path.join(homeDirPath, '.edublocks');
if (!fs.existsSync(eduBlocksWorkingPath)) {
    fs.mkdirSync(eduBlocksWorkingPath);
}
const ui = path.join(__dirname, '..', '..', 'ui');
const scriptPath = path.join(eduBlocksWorkingPath, 'output.py');
const packagePath = path.join(__dirname, '..', 'package.json');
const beforeScriptPath = path.join(__dirname, '..', '..', 'script-includes', 'before.py');
const afterScriptPath = path.join(__dirname, '..', '..', 'script-includes', 'after.py');
const version = JSON.parse(fs.readFileSync(packagePath, 'utf8')).version;
console.log(`Version: ${version}`);
console.log(`Scripts will be written to: ${scriptPath}`);
const app = express();
// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
expressWs(app);
let proc = process_1.initProcess('ipython3', []);
proc.setOnData(writeToAllClients);
const clients = [];
let log = '';
function clearLog() {
    log = '';
}
function writeToAllClients(data) {
    log += data;
    clients.forEach(client => {
        client.sendPacket({
            packetType: 'data',
            payload: log.substring(client.pos),
        });
        client.pos = log.length;
    });
}
app.post('/runcode', (req, res) => {
    clearLog();
    const { code } = req.body;
    const beforeScript = fs.readFileSync(beforeScriptPath);
    const afterScript = fs.readFileSync(afterScriptPath);
    const exec = [beforeScript, code, afterScript].join('\r\n');
    fs.writeFileSync(scriptPath, exec);
    // Used to store the previous size
    let cols = null, rows = null;
    // Kill the last process if it is still running...
    if (proc) {
        const size = proc.getSize();
        cols = size.cols;
        rows = size.rows;
        proc.terminate();
    }
    proc = process_1.initProcess('python3', ['-u', scriptPath]);
    if (cols && rows) {
        proc.resize(cols, rows);
    }
    proc.setOnData(writeToAllClients);
    res.send('Started');
});
app.ws('/terminal', (ws, req) => {
    const client = {
        pos: 0,
        sendPacket(packet) {
            try {
                ws.send(JSON.stringify(packet));
            }
            catch (e) { }
        },
    };
    const index = clients.push(client) - 1;
    console.log(`Client ${index} connected`);
    ws.on('message', (json) => {
        const packet = JSON.parse(json);
        switch (packet.packetType) {
            case 'data':
                proc.write(packet.payload);
                break;
            case 'resize':
                const { cols, rows } = packet.payload;
                console.log(`X: ${cols} Y:${rows}`);
                if (proc)
                    proc.resize(cols, rows);
                break;
        }
    });
    ws.on('close', () => {
        const index = clients.indexOf(client);
        console.log(`Client ${index} disconnected`);
        clients.splice(index, 1);
    });
});
app.use(express.static(ui));
app.listen(8081, () => {
    console.log('Scratchly server now listening on port 8081!');
});
