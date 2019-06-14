"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function define(Python) {
    Python['import_sonic'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'from psonic import *\n';
        return code;
    };
    Python['sampleson'] = function (block) {
        var text_name = block.getFieldValue('name');
        // TODO: Assemble Python into code variable.
        var code = 'sample(' + text_name + ')\n';
        return code;
    };
    Python['play'] = function (block) {
        var text_value = block.getFieldValue('value');
        // TODO: Assemble Python into code variable.
        var code = 'play(' + text_value + ')\n';
        return code;
    };
    Python['sleep1'] = function (block) {
        var text_value = block.getFieldValue('value');
        // TODO: Assemble Python into code variable.
        var code = 'sleep(' + text_value + ')\n';
        return code;
    };
    Python['liveloop'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) ||
            Blockly.Python.PASS;
        var dropdown_num = block.getFieldValue('num');
        // TODO: Assemble Python into code variable.
        var code = '\ndef live_loop_' + dropdown_num + '():\n' + branch;
        code = code + '\nlive_thread_' + dropdown_num + '.start()\n';
        return code;
    };
}
exports.default = define;
