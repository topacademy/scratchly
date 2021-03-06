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
var SelectModal = (function (_super) {
    __extends(SelectModal, _super);
    function SelectModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectModal.prototype.render = function () {
        var _this = this;
        var getOptions = function () { return _this.props.options.map(function (option) { return (React.createElement("tr", null,
            React.createElement("td", null, option),
            React.createElement("td", null,
                React.createElement("button", { onClick: function () { return _this.props.onSelect(option); } }, "Select")))); }); };
        return (React.createElement("div", { class: 'modal' },
            React.createElement("input", { id: 'modal_1', type: 'checkbox', disabled: true, checked: this.props.visible }),
            React.createElement("label", { for: 'modal_1', class: 'overlay' }),
            React.createElement("article", null,
                React.createElement("header", null,
                    React.createElement("h3", null, this.props.title),
                    React.createElement("a", { class: 'close', onClick: this.props.onCancel }, "\u00D7")),
                React.createElement("section", { class: 'content' },
                    React.createElement("table", { class: 'primary' },
                        React.createElement("tbody", null, getOptions()))),
                React.createElement("footer", null,
                    React.createElement("button", { onClick: this.props.onCancel }, "Close")))));
    };
    return SelectModal;
}(preact_1.Component));
exports.default = SelectModal;
