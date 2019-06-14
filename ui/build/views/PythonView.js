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
var _ = require("lodash");
var ace = self.ace;
var PythonView = (function (_super) {
    __extends(PythonView, _super);
    function PythonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PythonView.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.visible) {
            // Need to check visible change as well to force refresh
            if (this.getCode() !== nextProps.python || this.props.visible !== nextProps.visible) {
                this.setCode(nextProps.python);
            }
        }
    };
    PythonView.prototype.componentDidMount = function () {
        var _this = this;
        if (!this.editorDiv) {
            throw new Error('No editor div');
        }
        this.editor = ace.edit(this.editorDiv);
        this.editor.setTheme('ace/theme/monokai');
        this.editor.getSession().setMode('ace/mode/python');
        this.editor.on('change', _.debounce(function () {
            var code = _this.getCode();
            _this.props.onChange(code);
        }, 100));
    };
    PythonView.prototype.getCode = function () {
        return this.editor.getValue();
    };
    PythonView.prototype.setCode = function (code) {
        this.editor.setValue(code || '');
    };
    PythonView.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: { display: this.props.visible ? 'block' : 'none' }, id: "python" },
            React.createElement("div", { id: "editor", ref: function (div) { return _this.editorDiv = div; } })));
    };
    return PythonView;
}(preact_1.Component));
exports.default = PythonView;
