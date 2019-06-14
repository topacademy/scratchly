export default function define(Python: Blockly.BlockGenerators) {
  Python['crickitinit'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'crickit = crickitHat()\n';
    return code;
  };

  Python['crickitshow'] = function (block) {
    const text_text = block.getFieldValue('text');
    // TODO: Assemble Python into code variable.
    const code = 'crickit.show_message("' + text_text + '")\n';
    return code;
  };

  Python['crickitshowvar'] = function (block) {
    const text_varname = block.getFieldValue('varname');
    // TODO: Assemble Python into code variable.
    const code = 'crickit.show_message(' + text_varname + ')\n\n';
    return code;
  };

  Python['crickitimport'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'from adafruit_crickit import crickit\n';
    return code;
  };
  
  Python['crickit_d1'] = function(block) {
    var text_input = block.getFieldValue('input');
    var text_value = block.getFieldValue('value');
    // TODO: Assemble Python into code variable.
    var code = 'crickit.drive_1.' + text_input + ' = ' + text_value + '\n';
    return code;
  };
  
  Python['crickit_s1'] = function(block) {
    var text_input = block.getFieldValue('input');
    var text_value = block.getFieldValue('value');
    // TODO: Assemble Python into code variable.
    var code = 'crickit.servo_1.' + text_input + ' = ' + text_value + '\n';
    return code;
  };
  
  Python['crickit_m1'] = function(block) {
    var text_input = block.getFieldValue('input');
    var text_value = block.getFieldValue('value');
    // TODO: Assemble Python into code variable.
    var code = 'crickit.dc_motor_1.' + text_input + ' = ' + text_value + '\n';
    return code;
  };
  
  Python['crickit_m2'] = function(block) {
    var text_input = block.getFieldValue('input');
    var text_value = block.getFieldValue('value');
    // TODO: Assemble Python into code variable.
    var code = 'crickit.dc_motor_2.' + text_input + ' = ' + text_value + '\n';
    return code;
  };
  
}
