"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pty = require('node-pty');
function initProcess(cmd, args) {
    let onData = (data) => { };
    let cols = 80, rows = 30;
    const opts = {
        name: 'xterm-color',
        cols,
        rows,
        cwd: process.env.HOME,
        env: process.env,
    };
    const proc = pty.spawn(cmd, args, opts);
    proc.on('data', (data) => {
        // process.stdout.write(data);
        onData(data);
    });
    return {
        write(data) {
            proc.write(data);
        },
        resize(c, r) {
            cols = c;
            rows = r;
            try {
                proc.resize(cols, rows);
            }
            catch (e) {
                console.error('Error resizing terminal', e);
            }
        },
        terminate() {
            proc.kill('SIGTERM');
        },
        setOnData(handler) {
            onData = handler;
        },
        getSize() {
            return { cols, rows };
        }
    };
}
exports.initProcess = initProcess;
