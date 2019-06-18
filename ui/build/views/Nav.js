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
var Nav = (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nav.prototype.render = function () {
        var _this = this;
        return (React.createElement("nav", null,
            React.createElement("a", { class: 'brand' },
                React.createElement("img", { class: 'logo', src: '/images/logo.png' }),
                React.createElement("span", null, "Scratchly")),
            React.createElement("input", { id: 'bmenub', type: 'checkbox', class: 'show' }),
            React.createElement("label", { for: 'bmenub', class: 'burger pseudo button' }, "menu"),
            React.createElement("div", { class: 'menu' },
                React.createElement("a", { class: 'button', title: 'Themes', href: 'javascript:void(0)', onClick: function () { return _this.props.openThemes(); } }, "Themes"),
                React.createElement("a", { class: 'button', title: 'Samples', href: 'javascript:void(0)', onClick: function () { return _this.props.openSamples(); } }, "Samples"),
                React.createElement("a", { class: 'button icon-download', title: 'Download Python Source Code', href: 'javascript:void(0)', onClick: function () { return _this.props.downloadPython(); } }, "Download"),
                React.createElement("a", { class: 'button icon-plus', title: 'New', href: 'javascript:void(0)', onClick: function () { return _this.props.newCode(); } }, "New"),
                React.createElement("a", { class: 'button icon-folder-open', title: 'Open a file', href: 'javascript:void(0)', onClick: function () { return _this.props.openCode(); } }, "Open"),
                React.createElement("a", { class: 'button icon-floppy', title: 'Save a file', href: 'javascript:void(0)', onClick: function () { return _this.props.saveCode(); } }, "Save"),
                React.createElement("a", { class: 'button icon-play', title: 'Run your code', href: 'javascript:void(0)', onClick: function () { return _this.props.sendCode(); } }, "Run"))));
    };
    return Nav;
}(preact_1.Component));
exports.default = Nav;
