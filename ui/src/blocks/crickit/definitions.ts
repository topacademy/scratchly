export default function define(Blocks: Blockly.BlockDefinitions) {
  Blockly.Blocks['crickitshow'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('crickit.show_message("')
        .appendField(new Blockly.FieldTextInput('Text Here'), 'text')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
      this.setTooltip('Shows a message on the Crickit Hat');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['crickitshowvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('crickit.show_message(')
        .appendField(new Blockly.FieldTextInput(''), 'varname')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
      this.setTooltip('Show a variable on the display');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['crickitinit'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('crickit = crickitHat()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
      this.setTooltip('Detects the Crickit hat');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['crickitimport'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from adafruit_crickit import crickit');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
      this.setTooltip('Imports the Crickit Hat library');
      this.setHelpUrl('');
    },
  };
  
  Blockly.Blocks['crickit_d1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("crickit.drive_1.")
          .appendField(new Blockly.FieldTextInput("frequency"), "input")
          .appendField("=")
          .appendField(new Blockly.FieldTextInput("val"), "value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("drive 1");
   this.setHelpUrl("");
    },
  };
  
  Blockly.Blocks['crickit_s1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("crickit.servo_1.")
          .appendField(new Blockly.FieldTextInput("angle"), "input")
          .appendField("=")
          .appendField(new Blockly.FieldTextInput("val"), "value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("servo 1");
   this.setHelpUrl("");
    },
  };
 
  Blockly.Blocks['crickit_m1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("crickit.dc_motor_1.")
          .appendField(new Blockly.FieldTextInput("throttle"), "input")
          .appendField("=")
          .appendField(new Blockly.FieldTextInput("val"), "value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("motor 1");
   this.setHelpUrl("");
    },
  };
  
  Blockly.Blocks['crickit_m2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("crickit.dc_motor_2.")
          .appendField(new Blockly.FieldTextInput("throttle"), "input")
          .appendField("=")
          .appendField(new Blockly.FieldTextInput("val"), "value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("motor 2");
   this.setHelpUrl("");
    },
  };
  
}
