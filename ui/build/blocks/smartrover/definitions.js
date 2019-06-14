"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function define(Blocks) {
    Blockly.Blocks['enable'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Enable MotorShield Objects\n');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Enable MotorShield with this block at the start');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['arrow1_on'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Arrow(1).on()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Sets Arrow 1 on');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['arrow1_off'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Arrow(1).off()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Sets Arrow 1 off');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['arrow2_on'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Arrow(2).on()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Sets Arrow 2 on');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['arrow2_off'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Arrow(2).off()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Sets Arrow 2 off');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['arrow3_on'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Arrow(3).on()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Sets Arrow 3 on');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['arrow3_off'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Arrow(3).off()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Sets Arrow 3 off');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['arrow4_on'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Arrow(4).on()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Sets Arrow 4 on');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['arrow4_off'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Arrow(4).off()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Sets Arrow 4 off');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['sonicCheck'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Check Ultrasonic Sensor');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Check Ultrasonic Sensor');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['ls1Check'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Check Line Sensor 1');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Check IR1 Line Sensor');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['ls2Check'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Check Line Sensor 2');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Check IR2 Line Sensor');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['m1Forwardx'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('m1.forward(')
                .appendField(new Blockly.FieldTextInput('60'), 'm1ForwardSpeed')
                .appendField(')');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Set forward speed for motor 1');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['m1Reversex'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('m1.reverse(')
                .appendField(new Blockly.FieldTextInput('50'), 'm1ReverseSpeed')
                .appendField(')');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Set reverse speed for motor 1');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['m1Stop'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Motor1 Stop');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Motor1 Stop');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['m2Forwardx'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('m2.forward(')
                .appendField(new Blockly.FieldTextInput('60'), 'm2ForwardSpeed')
                .appendField(')');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Set forward speed for motor 2');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['m2Reversex'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('m2.reverse(')
                .appendField(new Blockly.FieldTextInput('50'), 'm2ReverseSpeed')
                .appendField(')');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Set reverse speed for motor 2');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['m2Stop'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Motor2 Stop');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Motor2 Stop');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['both_onWhiteLine'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('if')
                .appendField(new Blockly.FieldTextInput('ls1.Triggered == False and ls2.Triggered == False'), 'var')
                .appendField(':');
            this.appendStatementInput('DO')
                .appendField('');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('If Statement.');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['ls1_onBlackLine'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('elif')
                .appendField(new Blockly.FieldTextInput('ls1.Triggered == True and ls2.Triggered == False'), 'var')
                .appendField(':');
            this.appendStatementInput('DO')
                .appendField('');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Elif Statement.');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['ls2_onBlackLine'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('elif')
                .appendField(new Blockly.FieldTextInput('ls1.Triggered == False and ls2.Triggered == True'), 'var')
                .appendField(':');
            this.appendStatementInput('DO')
                .appendField('');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Elif Statement.');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['try'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('try:');
            this.appendStatementInput('DO')
                .appendField('');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(336);
            this.setTooltip('try loop.');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['except'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('except KeyboardInterrupt:');
            this.appendStatementInput('DO')
                .appendField('');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(336);
            this.setTooltip('except Keyboard interrupt');
            this.setHelpUrl('');
        },
    };
    Blockly.Blocks['GPIO cleanup'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('GPIO.cleanup()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(336);
            this.setTooltip('GPIO Cleanup');
            this.setHelpUrl('');
        },
    };
}
exports.default = define;
