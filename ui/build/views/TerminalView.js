"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("preact");
var preact_1 = require("preact");
var stub = function () { return void 0; };
var TerminalView = (function (_super) {
    __extends(TerminalView, _super);
    function TerminalView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eventHandlers = {
            data: stub,
            resize: stub,
        };
        return _this;
    }
    TerminalView.prototype.fit = function () {
        this.term.fit();
        if (this.cols !== this.term.cols || this.rows !== this.term.rows) {
            this.cols = this.term.cols;
            this.rows = this.term.rows;
            this.eventHandlers.resize(this.cols, this.rows);
        }
    };
    TerminalView.prototype.componentDidMount = function () {
        var _this = this;
        if (!this.termDiv)
            throw new Error('No term');
        this.term = new Terminal();
        this.term.open(this.termDiv, true);
        this.term.on('data', function (data) {
            _this.eventHandlers.data(data);
            if (data.length === 1 && data.charCodeAt(0) === 27) {
                _this.props.onClose();
            }
        });
        this.term.write('\x1b[31mWelcome to Scratchly!\x1b[m\r\n');
        this.term.write('Press [ESC] to exit the terminal\r\n');
        this.fit();
        window.addEventListener('resize', function () { return _this.fit(); });
    };
    TerminalView.prototype.componentDidUpdate = function () {
        this.fit();
    };
    TerminalView.prototype.focus = function () {
        if (!this.term)
            return;
        this.term.focus();
    };
    TerminalView.prototype.reset = function () {
        console.info('RESET TERM');
        this.term.reset();
    };
    TerminalView.prototype.write = function (s) {
        this.term.write(s);
    };
    TerminalView.prototype.on = function (eventType, handler) {
        this.eventHandlers[eventType] = handler;
    };
    TerminalView.prototype.onCloseClick = function () {
        this.props.onClose();
    };
    TerminalView.prototype.onStopClick = function () {
        // Send Ctrl+C
        this.eventHandlers.data('\x03');
    };
    TerminalView.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: { display: this.props.visible ? 'block' : 'none' }, id: "terminal-dialog" },
            React.createElement("div", { class: "terminal-help" },
                React.createElement("span", { class: "help-item", onClick: function () { return _this.onCloseClick(); } },
                    React.createElement("span", { class: "key" }, "ESC"),
                    " = Close terminal"),
                React.createElement("span", { class: "help-item", onClick: function () { return _this.onStopClick(); } },
                    React.createElement("span", { class: "key" }, "Ctrl"),
                    " + ",
                    React.createElement("span", { class: "key" }, "C"),
                    " = Stop program")),
            React.createElement("div", { id: "term", ref: function (div) { return _this.termDiv = div; } })));
    };
    return TerminalView;
}(preact_1.Component));
exports.default = TerminalView;
