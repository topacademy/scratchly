"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function define(Python) {
    Python['ehimport'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'import explorerhat\n';
        return code;
    };
    Python['ehtouch'] = function (block) {
        var dropdown_padnumber = block.getFieldValue('padnumber');
        var dropdown_event = block.getFieldValue('event');
        var text_bracket = block.getFieldValue('bracket');
        // TODO: Assemble Python into code variable.
        var code = 'explorerhat.touch.' + dropdown_padnumber + '.' + dropdown_event + '(' + text_bracket + ')\n';
        return code;
    };
    Python['ehinput'] = function (block) {
        var dropdown_inputnumber = block.getFieldValue('inputnumber');
        var dropdown_inputevent = block.getFieldValue('inputevent');
        var text_bracketin = block.getFieldValue('bracketin');
        // TODO: Assemble Python into code variable.
        var code = 'explorerhat.input.' + dropdown_inputnumber + '.' + dropdown_inputevent + '(' + text_bracketin + ')\n';
        return code;
    };
    Python['ehoutput'] = function (block) {
        var dropdown_outputnumber = block.getFieldValue('outputnumber');
        var dropdown_outputevent = block.getFieldValue('outputevent');
        var text_bracketout = block.getFieldValue('bracketout');
        // TODO: Assemble Python into code variable.
        var code = 'explorerhat.output.' + dropdown_outputnumber + '.' + dropdown_outputevent + '(' + text_bracketout + ')\n';
        return code;
    };
    Python['ehlights'] = function (block) {
        var dropdown_lightnumber = block.getFieldValue('lightnumber');
        var dropdown_lightevent = block.getFieldValue('lightevent');
        var text_bracketlight = block.getFieldValue('bracketlight');
        // TODO: Assemble Python into code variable.
        var code = 'explorerhat.light.' + dropdown_lightnumber + '.' + dropdown_lightevent + '(' + text_bracketlight + ')\n';
        return code;
    };
    Python['ehanalog'] = function (block) {
        var dropdown_analognumber = block.getFieldValue('analognumber');
        var dropdown_analogevent = block.getFieldValue('analogevent');
        var text_bracketanalog = block.getFieldValue('bracketanalog');
        // TODO: Assemble Python into code variable.
        var code = 'explorerhat.analog.' + dropdown_analognumber + '.' + dropdown_analogevent + '(' + text_bracketanalog + ')\n';
        return code;
    };
    Python['ehmotor'] = function (block) {
        var dropdown_motornumber = block.getFieldValue('motornumber');
        var dropdown_motorevent = block.getFieldValue('motorevent');
        var text_bracketmotor = block.getFieldValue('bracketmotor');
        // TODO: Assemble Python into code variable.
        var code = 'explorerhat.motor.' + dropdown_motornumber + '.' + dropdown_motorevent + '(' + text_bracketmotor + ')\n';
        return code;
    };
    Python['blinktimport'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'from blinkt import *\n';
        return code;
    };
    Python['blinktsetpixel'] = function (block) {
        var text_pixelno = block.getFieldValue('pixelno');
        var text_r = block.getFieldValue('r');
        var text_g = block.getFieldValue('g');
        var text_b = block.getFieldValue('b');
        // TODO: Assemble Python into code variable.
        var code = 'set_pixel(' + text_pixelno + ', ' + text_r + ', ' + text_g + ', ' + text_b + ')\n';
        return code;
    };
    Python['blinktshow'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'show()\n';
        return code;
    };
    Python['blinktsetbrightness'] = function (block) {
        var text_number = block.getFieldValue('number');
        // TODO: Assemble Python into code variable.
        var code = 'set_brightness(' + text_number + ')\n';
        return code;
    };
    Python['blinktsetall'] = function (block) {
        var text_r = block.getFieldValue('r');
        var text_g = block.getFieldValue('g');
        var text_b = block.getFieldValue('b');
        // TODO: Assemble Python into code variable.
        var code = 'set_all(' + text_r + ', ' + text_g + ', ' + text_b + ')\n';
        return code;
    };
    Python['blinktsetallbright'] = function (block) {
        // let text_pixelno = block.getFieldValue('pixelno');
        var text_r = block.getFieldValue('r');
        var text_g = block.getFieldValue('g');
        var text_b = block.getFieldValue('b');
        var text_bright = block.getFieldValue('bright');
        // TODO: Assemble Python into code variable.
        var code = 'set_all(' + text_r + ', ' + text_g + ', ' + text_b + ',' + text_bright + ')\n';
        return code;
    };
    Python['blinktclear'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'clear()\n';
        return code;
    };
}
exports.default = define;
