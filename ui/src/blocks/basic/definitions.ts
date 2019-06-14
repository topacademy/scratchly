export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_edupy'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from edupy import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the edupy library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_signal'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from signal import pause');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the signal library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_colorsys'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import colorsys');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the colorsys library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pause_s'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pause()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Pause');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['random'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import random');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the random library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['while_true'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while True:');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Forever loop.');
      this.setHelpUrl('https://t.co/PCZC5EFe4D');
    },
  };

  Blocks['pass'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pass');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Pass to the next command');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['if'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if')
        .appendField(new Blockly.FieldTextInput('0'), 'var')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('If Statement.');
      this.setHelpUrl('');
    },
  };

  Blocks['varprint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print(')
        .appendField(new Blockly.FieldTextInput(''), 'var')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Use this to print a variable.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['ifcroc'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if')
        .appendField(new Blockly.FieldTextInput('this'), 'this')
        .appendField(new Blockly.FieldDropdown([['>', '>'], ['<', '<']]), 'crocsigns')
        .appendField(new Blockly.FieldTextInput('that'), 'that')
        .appendField(':');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('If statement with greater and less than');
      this.setHelpUrl('');
    },
  };

  Blocks['varminus'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), '1')
        .appendField('-=')
        .appendField(new Blockly.FieldTextInput('0'), '2');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Variable with - and =');
      this.setHelpUrl('');
    },
  };

  Blocks['varplus'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), '1')
        .appendField('+=')
        .appendField(new Blockly.FieldTextInput('0'), '2');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Variable with + and =');
      this.setHelpUrl('');
    },
  };

  Blocks['for'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for')
        .appendField(new Blockly.FieldTextInput('i'), 'letter')
        .appendField('in range(')
        .appendField(new Blockly.FieldTextInput('number'), 'no')
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('Create a for loop');
    },
  };

  Blocks['advancedforloops'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for')
        .appendField(new Blockly.FieldTextInput('x'), 'x')
        .appendField('in')
        .appendField(new Blockly.FieldTextInput('y'), 'y');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['ifequals'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if')
        .appendField(new Blockly.FieldTextInput('this'), 'this')
        .appendField('==')
        .appendField(new Blockly.FieldTextInput('that'), 'that');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['importinputs'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import inputs');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['return2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('return')
        .appendField(new Blockly.FieldTextInput(''), 'return');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['elif'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('elif')
        .appendField(new Blockly.FieldTextInput('0'), 'var')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Elif Statement.');
      this.setHelpUrl('');
    },
  };

  Blocks['else'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('else:');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Else statement');
      this.setHelpUrl('https://t.co/PCZC5EFe4D');
    },
  };

  Blocks['df'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('def'), 'def')
        .appendField('()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Trigger a define function');
      this.setHelpUrl('');
    },
  };

  Blocks['whileout'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while')
        .appendField(new Blockly.FieldTextInput(''), '1')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['time'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import time');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the time library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_math'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import math');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the math library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['sleep'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('time.sleep(')
        .appendField(new Blockly.FieldTextInput('1'), 'sleepTime')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Wait for a given amount of seconds.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['print'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print(\'')
        .appendField(new Blockly.FieldTextInput(''), 'print')
        .appendField('\')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Use this to print to the output box.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['equalsblock'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), '1')
        .appendField('=')
        .appendField(new Blockly.FieldTextInput('0'), '2');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['define'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('def ')
        .appendField(new Blockly.FieldTextInput(''), '1')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), '2')
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['greater'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while')
        .appendField(new Blockly.FieldTextInput(''), '1')
        .appendField('>')
        .appendField(new Blockly.FieldTextInput(''), 'v')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };
}
