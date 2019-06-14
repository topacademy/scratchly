"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function define(Python) {
    Python['senseinit'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'sense = SenseHat()\n';
        return code;
    };
    Python['senseshow'] = function (block) {
        var text_text = block.getFieldValue('text');
        // TODO: Assemble Python into code variable.
        var code = 'sense.show_message("' + text_text + '")\n';
        return code;
    };
    Python['senseshowvar'] = function (block) {
        var text_varname = block.getFieldValue('varname');
        // TODO: Assemble Python into code variable.
        var code = 'sense.show_message(' + text_varname + ')\n\n';
        return code;
    };
    Python['senseimport'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'from sense_hat import SenseHat\n';
        return code;
    };
    Python['senseimportemu'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'from sense_emu import SenseHat\n';
        return code;
    };
}
exports.default = define;
