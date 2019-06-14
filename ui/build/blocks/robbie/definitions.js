"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function define(Blocks) {
    Blockly.Blocks['motorshield'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('from PiMotor import Sensor');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(165);
            this.setTooltip('Imports the PiMotor library');
            this.setHelpUrl('');
        },
    };
}
exports.default = define;
