"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileSaver = require("file-saver");
function getIo() {
    return getWebIo();
}
exports.getIo = getIo;
function getWebIo() {
    function openFile() {
        return new Promise(function (resolve, reject) {
            var fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.accept = ".xml";
            fileInput.addEventListener("change", readSingleFile, false);
            fileInput.click();
            function readSingleFile(e) {
                var file = e.target.files[0];
                if (!file)
                    return;
                var reader = new FileReader();
                reader.onload = function (e) {
                    var contents = e.target.result;
                    resolve(contents);
                };
                reader.onerror = function (err) {
                    reject(new Error(err.message));
                };
                reader.readAsText(file);
            }
        });
    }
    /**
     * Save a file to the user's computer
     * @param text Data to save
     * @param ext Suggested file name extension, i.e. 'xml'
     */
    function saveFile(text, ext) {
        if (ext === void 0) { ext = null; }
        var fileName = prompt('Enter filename...');
        if (!fileName)
            return Promise.resolve(void 0);
        if (ext && fileName.slice(-4) !== "." + ext)
            fileName = fileName + "." + ext;
        var blob = new Blob([text], { type: 'text/xml;charset=utf-8' });
        fileSaver.saveAs(blob, fileName);
        return Promise.resolve(void 0);
    }
    return {
        openFile: openFile,
        saveFile: saveFile,
    };
}
