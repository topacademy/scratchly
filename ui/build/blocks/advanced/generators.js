"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function define(Python) {
    Python['http_client_import_rest'] = function (block) {
        var code = 'import http.client \n';
        return code;
    };
    Python['https_client_create_connection'] = function (block) {
        var text_url = block.getFieldValue('URL');
        var code = 'conn = http.client.HTTPSConnection("' + text_url + '") \n';
        return code;
    };
    Python['http_client_create_connection'] = function (block) {
        var text_url = block.getFieldValue('URL');
        var text_port = block.getFieldValue('PORT');
        var code = 'conn = http.client.HTTPConnection("' + text_url + '",' + text_port + ') \n';
        return code;
    };
    Python['http_client_request'] = function (block) {
        var text_method = block.getFieldValue('method');
        var text_request = block.getFieldValue('request');
        var text_headers = block.getFieldValue('headers');
        var text_body = block.getFieldValue('body');
        var code = '';
        code = 'conn.request("' + text_method + '", "' + text_request + '", body="' + text_body + '", headers={' + text_headers + '}) \n';
        return code;
    };
    Python['http_client_responce'] = function (block) {
        var code = 'r1 = conn.getresponse() \n';
        return code;
    };
    Python['inline_print'] = function (block) {
        var text_print2 = Blockly.Python.statementToCode(block, 'VALUE');
        // TODO: Assemble Python into code variable.
        var code = 'print(' + text_print2 + ')\n';
        return code;
    };
    Python['http_client_status'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'r1.status';
        return code;
    };
    Python['http_client_reason'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'r1.reason';
        return code;
    };
    Python['http_client_read'] = function (block) {
        // TODO: Assemble Python into code variable.
        var code = 'r1.read().decode()';
        return code;
    };
}
exports.default = define;
