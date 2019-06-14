"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function define(Python) {
    Python['import_edupy'] = function (block) {
        var code = 'from edupy import *\n';
        return code;
    };
    Python['import_signal'] = function (block) {
        var code = 'from signal import pause\n';
        return code;
    };
    Python['import_colorsys'] = function (block) {
        var code = 'import colorsys\n';
        return code;
    };
    Python['pause_s'] = function (block) {
        var code = 'pause()\n';
        return code;
    };
    Python['random'] = function (block) {
        var code = 'import random\n';
        return code;
    };
    Python['while_true'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        return 'while True:\n' + branch;
    };
    Python['pass'] = function (block) {
        var code = 'pass \n';
        return code;
    };
    Python['if'] = function (block) {
        var text_const = block.getFieldValue('var');
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        return 'if ' + text_const + ':\n' + branch;
    };
    Python['varprint'] = function (block) {
        var text_const = block.getFieldValue('var');
        // TODO: Assemble Python into code variable.
        var code = 'print(' + text_const + ')\n';
        return code;
    };
    Python['ifcroc'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        var text_this = block.getFieldValue('this');
        var dropdown_crocsigns = block.getFieldValue('crocsigns');
        var text_that = block.getFieldValue('that');
        // const statements_name = Blockly.Python.statementToCode(block, 'DO');
        // TODO: Assemble Python into code variable.
        var code = 'if ' + text_this + ' ' + dropdown_crocsigns + ' ' + text_that + ':\n' + branch;
        return code;
    };
    Python['varminus'] = function (block) {
        var text_1 = block.getFieldValue('1');
        var text_2 = block.getFieldValue('2');
        // TODO: Assemble Python into code variable.
        var code = text_1 + ' -= ' + text_2 + '\n';
        return code;
    };
    Python['varplus'] = function (block) {
        var text_1 = block.getFieldValue('1');
        var text_2 = block.getFieldValue('2');
        // TODO: Assemble Python into code variable.
        var code = text_1 + ' += ' + text_2 + '\n';
        return code;
    };
    Python['for'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        var text_letter = block.getFieldValue('letter');
        var text_no = block.getFieldValue('no');
        // const statements_name = Blockly.Python.statementToCode(block, 'DO');
        // TODO: Assemble Python into code variable.
        var code = 'for ' + text_letter + ' in range(' + text_no + '):\n' + branch;
        return code;
    };
    Python['advancedforloops'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        var text_x = block.getFieldValue('x');
        var text_y = block.getFieldValue('y');
        // const statements_do = Blockly.Python.statementToCode(block, 'DO');
        // TODO: Assemble Python into code variable.
        var code = 'for ' + text_x + ' in ' + text_y + ':\n' + branch;
        return code;
    };
    Python['ifequals'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        var text_this = block.getFieldValue('this');
        var text_that = block.getFieldValue('that');
        // const statements_do = Blockly.Python.statementToCode(block, 'DO');
        // TODO: Assemble Python into code variable.
        var code = 'if ' + text_this + ' == ' + text_that + ':\n' + branch;
        return code;
    };
    Python['importinputs'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'import inputs\n';
        return code;
    };
    Python['return2'] = function (block) {
        var text_return = block.getFieldValue('return');
        // TODO: Assemble Python into code variable.
        var code = 'return ' + text_return + '\n';
        return code;
    };
    Python['elif'] = function (block) {
        var text_const = block.getFieldValue('var');
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        return 'elif ' + text_const + ':\n' + branch;
    };
    Python['else'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        return 'else:\n' + branch;
    };
    Python['df'] = function (block) {
        var text_def = block.getFieldValue('def');
        // TODO: Assemble Python into code variable.
        var code = text_def + '()\n';
        return code;
    };
    Python['whileout'] = function (block) {
        var text_1 = block.getFieldValue('1');
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        // TODO: Assemble Python into code variable.
        var code = 'while ' + text_1 + ':\n' + branch;
        return code;
    };
    Python['time'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'import time\n';
        return code;
    };
    Python['import_math'] = function (block) {
        var code = 'import math\n';
        return code;
    };
    Python['sleep'] = function (block) {
        var text_sleeptime = block.getFieldValue('sleepTime');
        var code = 'time.sleep(' + text_sleeptime + ')\n';
        return code;
    };
    Python['print'] = function (block) {
        var text_print = block.getFieldValue('print');
        // TODO: Assemble Python into code variable.
        var code = 'print("' + text_print + '")\n';
        return code;
    };
    Python['equalsblock'] = function (block) {
        var text_1 = block.getFieldValue('1');
        var text_2 = block.getFieldValue('2');
        // TODO: Assemble Python into code variable.
        var code = text_1 + '=' + text_2 + '\n';
        return code;
    };
    Python['define'] = function (block) {
        var text_1 = block.getFieldValue('1');
        var text_2 = block.getFieldValue('2');
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        // const statements_name = Blockly.Python.statementToCode(block, 'NAME');
        // TODO: Assemble Python into code variable.
        var code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
        return code;
    };
    Python['greater'] = function (block) {
        var text_1 = block.getFieldValue('1');
        var text_v = block.getFieldValue('v');
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        // TODO: Assemble Python into code variable.
        var code = 'while ' + text_1 + ' > ' + text_v + ':\n' + branch;
        return code;
    };
}
exports.default = define;
