"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function define(Python) {
    Python['enable'] = function (block) {
        // TODO: Assemble Python into code variable.
        var mpath = 'import sys\n' + 'sys.path.append("/home/pi/MotorShield")\n';
        var aimport = 'from PiMotor import Arrow\n';
        var simport = 'from PiMotor import Sensor\n';
        var mimport = 'from PiMotor import Motor\n';
        var m1obj = 'm1 = Motor("MOTOR1",1)\n';
        var m2obj = 'm2 = Motor("MOTOR2",1)\n';
        var m3obj = 'm3 = Motor("MOTOR3",1)\n';
        var m4obj = 'm4 = Motor("MOTOR4",1)\n';
        var usobj = 'us = Sensor("ULTRASONIC", 10)\n';
        var ir1obj = 'ls1 = Sensor("IR1", 0)\n';
        var ir2obj = 'ls2 = Sensor("IR2", 0)\n';
        var code = mpath + aimport + simport + mimport + m1obj + m2obj + m3obj + m4obj + usobj + ir1obj + ir2obj;
        return code;
    };
    Python['arrow1_on'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'Arrow(1).on()\n';
        return code;
    };
    Python['arrow1_off'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'Arrow(1).off()\n';
        return code;
    };
    Python['arrow2_on'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'Arrow(2).on()\n';
        return code;
    };
    Python['arrow2_off'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'Arrow(2).off()\n';
        return code;
    };
    Python['arrow3_on'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'Arrow(3).on()\n';
        return code;
    };
    Python['arrow3_off'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'Arrow(3).off()\n';
        return code;
    };
    Python['arrow4_on'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'Arrow(4).on()\n';
        return code;
    };
    Python['arrow4_off'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'Arrow(4).off()\n';
        return code;
    };
    Python['sonicCheck'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'us.sonicCheck()\n';
        return code;
    };
    Python['ls1Check'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'ls1.iRCheck()\n';
        return code;
    };
    Python['ls2Check'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'ls2.iRCheck()\n';
        return code;
    };
    Python['m1Forwardx'] = function (block) {
        var text_m1ForwardSpeed = block.getFieldValue('m1ForwardSpeed');
        var code = 'm1.forward(' + text_m1ForwardSpeed + ')\n';
        return code;
    };
    Python['m1Reversex'] = function (block) {
        var text_m1ReverseSpeed = block.getFieldValue('m1ReverseSpeed');
        var code = 'm1.reverse(' + text_m1ReverseSpeed + ')\n';
        return code;
    };
    Python['m1Stop'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'm1.stop()\n';
        return code;
    };
    Python['m2Forwardx'] = function (block) {
        var text_m2ForwardSpeed = block.getFieldValue('m2ForwardSpeed');
        var code = 'm2.forward(' + text_m2ForwardSpeed + ')\n';
        return code;
    };
    Python['m2Reversex'] = function (block) {
        var text_m2ReverseSpeed = block.getFieldValue('m2ReverseSpeed');
        var code = 'm2.reverse(' + text_m2ReverseSpeed + ')\n';
        return code;
    };
    Python['m2Stop'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'm2.stop()\n';
        return code;
    };
    Python['both_onWhiteLine'] = function (block) {
        var text_const = block.getFieldValue('var');
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        return 'if ' + text_const + ':\n' + branch;
    };
    Python['ls1_onBlackLine'] = function (block) {
        var text_const = block.getFieldValue('var');
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        return 'elif ' + text_const + ':\n' + branch;
    };
    Python['ls2_onBlackLine'] = function (block) {
        var text_const = block.getFieldValue('var');
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        return 'elif ' + text_const + ':\n' + branch;
    };
    Python['try'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        return 'try:\n' + branch;
    };
    Python['except'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        return 'except KeyboardInterrupt:\n' + branch;
    };
    Python['GPIO cleanup'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'GPIO.cleanup()\n';
        return code;
    };
}
exports.default = define;
