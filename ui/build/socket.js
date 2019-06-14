"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stub = function () { return void 0; };
/**
 * Lightweight websocket abstraction
 * @param url URL of the terminal handler
 */
function initSocket(url) {
    return new Promise(function (resolve) {
        var eventHandlers = {
            data: stub,
            reconnect: stub,
        };
        var resolved = false;
        console.log('Opening Websocket', url);
        var ws;
        connect();
        function connect() {
            ws = new WebSocket(url);
            ws.onmessage = onMessage;
            ws.onopen = onOpen;
            ws.onclose = onClose;
            ws.onerror = onError;
        }
        function onMessage(evt) {
            if (typeof evt.data === 'string') {
                var packet = JSON.parse(evt.data);
                eventHandlers.data(packet);
            }
            else {
                throw new Error('Unexpected data type');
            }
        }
        function onOpen() {
            if (!resolved) {
                resolve({
                    sendPacket: sendPacket,
                    on: on,
                });
                resolved = true;
            }
            else {
                eventHandlers.reconnect();
            }
        }
        function onClose() {
            ws = null;
            console.info('CLOSED');
            attemptReconnect();
        }
        function onError(evt) {
            console.error('socket', evt);
        }
        function attemptReconnect() {
            setTimeout(function () {
                console.info('RECONNECT');
                connect();
            }, 1000);
        }
        function sendPacket(packet) {
            if (!ws) {
                console.log('sendPacket: Socket not available');
                return;
            }
            ws.send(JSON.stringify(packet));
        }
        function on(eventType, handler) {
            eventHandlers[eventType] = handler;
        }
    });
}
exports.initSocket = initSocket;
