export default function define(Python: Blockly.BlockGenerators) {
  Python['enable'] = function (block) {
    // TODO: Assemble Python into code variable.
    const mpath = 'import sys\n' + 'sys.path.append("/home/pi/MotorShield")\n';
    const aimport = 'from PiMotor import Arrow\n';
    const simport = 'from PiMotor import Sensor\n';
    const mimport = 'from PiMotor import Motor\n';
    const m1obj = 'm1 = Motor("MOTOR1",1)\n';
    const m2obj = 'm2 = Motor("MOTOR2",1)\n';
    const m3obj = 'm3 = Motor("MOTOR3",1)\n';
    const m4obj = 'm4 = Motor("MOTOR4",1)\n';
    const usobj = 'us = Sensor("ULTRASONIC", 10)\n';
    const ir1obj = 'ls1 = Sensor("IR1", 0)\n';
    const ir2obj = 'ls2 = Sensor("IR2", 0)\n'; 
    const code = mpath + aimport + simport + mimport + m1obj + m2obj + m3obj + m4obj + usobj + ir1obj + ir2obj;
    return code;
  };
  
  Python['arrow1_on'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'Arrow(1).on()\n';
    return code;
  };
  
  Python['arrow1_off'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'Arrow(1).off()\n';
    return code;
  };
  
  Python['arrow2_on'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'Arrow(2).on()\n';
    return code;
  };
  
  Python['arrow2_off'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'Arrow(2).off()\n';
    return code;
  };
  
  Python['arrow3_on'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'Arrow(3).on()\n';
    return code;
  };
  
  Python['arrow3_off'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'Arrow(3).off()\n';
    return code;
  };
  
  Python['arrow4_on'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'Arrow(4).on()\n';
    return code;
  };
  
  Python['arrow4_off'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'Arrow(4).off()\n';
    return code;
  };
  
  Python['sonicCheck'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'us.sonicCheck()\n';
    return code;
  };
  
  Python['ls1Check'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'ls1.iRCheck()\n';
    return code;
  };
  
  Python['ls2Check'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'ls2.iRCheck()\n';
    return code;
  };
  
  Python['m1Forward'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'm1.forward(60)\n';
    return code;
  };
  
  Python['m1Reverse'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'm1.reverse(50)\n';
    return code;
  };
  
  Python['m1Stop'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'm1.stop()\n';
    return code;
  };
  
  Python['m2Forward'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'm2.forward(60)\n';
    return code;
  };
  
  Python['m2Reverse'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'm2.reverse(50)\n';
    return code;
  };
  
  Python['m2Stop'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'm2.stop()\n';
    return code;
  };
  
  Python['both_onWhiteLine'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'if ' + text_const + ':\n' + branch;
  };
  
  Python['ls1_onBlackLine'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'elif ' + text_const + ':\n' + branch;
  };
  
  Python['ls2_onBlackLine'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'elif ' + text_const + ':\n' + branch;
  };
  
  Python['try'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'try:\n' + branch;
  };
  
  Python['except'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'except KeyboardInterrupt:\n' + branch;
  };
  
  Python['GPIO cleanup'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'GPIO.cleanup()\n';
    return code;
  };
  
}

