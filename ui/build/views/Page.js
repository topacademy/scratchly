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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("preact");
var preact_1 = require("preact");
var Nav_1 = require("./Nav");
var BlocklyView_1 = require("./BlocklyView");
var PythonView_1 = require("./PythonView");
var TerminalView_1 = require("./TerminalView");
var SelectModal_1 = require("./SelectModal");
var ViewModeBlockly = 'blockly';
var ViewModePython = 'python';
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        var _this = _super.call(this) || this;
        _this.state = {
            viewMode: ViewModeBlockly,
            terminalOpen: false,
            samplesOpen: false,
            themesOpen: false,
            doc: {
                xml: null,
                python: null,
                pythonClean: true,
            },
        };
        return _this;
    }
    Page.prototype.readBlocklyContents = function (xml) {
        if (this.state.doc.xml === xml) {
            return;
        }
        var doc = {
            xml: xml,
            python: null,
            pythonClean: true,
        };
        this.setState({ doc: doc });
        this.switchView(ViewModeBlockly);
    };
    Page.prototype.updateFromBlockly = function (xml, python) {
        if (this.state.doc.xml === xml &&
            this.state.doc.python === python) {
            return;
        }
        if (this.state.doc.python !== python && !this.state.doc.pythonClean) {
            alert('Python changes have been overwritten!');
        }
        var doc = {
            xml: xml,
            python: python,
            pythonClean: true,
        };
        this.setState({ doc: doc });
    };
    Page.prototype.updateFromPython = function (python) {
        if (this.state.doc.python === python) {
            return;
        }
        var doc = {
            xml: this.state.doc.xml,
            python: python,
            pythonClean: false,
        };
        this.setState({ doc: doc });
    };
    Page.prototype.new = function () {
        var doc = {
            xml: null,
            python: null,
            pythonClean: true,
        };
        this.setState({ doc: doc });
        this.switchView('blockly');
    };
    Page.prototype.componentDidMount = function () {
    };
    Page.prototype.toggleView = function () {
        switch (this.state.viewMode) {
            case ViewModeBlockly:
                return this.switchView(ViewModePython);
            case ViewModePython:
                return this.switchView(ViewModeBlockly);
        }
    };
    Page.prototype.switchView = function (viewMode) {
        switch (viewMode) {
            case ViewModeBlockly:
                this.setState({ viewMode: 'blockly' });
                return 0;
            case ViewModePython:
                this.setState({ viewMode: 'python' });
                return 0;
        }
    };
    Page.prototype.sendCode = function () {
        var _this = this;
        if (!this.terminalView) {
            throw new Error('No terminal');
        }
        if (!this.state.doc.python) {
            alert('There is no code to run');
            return;
        }
        this.setState({ terminalOpen: true });
        this.terminalView.focus();
        this.terminalView.reset();
        this.props.app.runCode(this.state.doc.python);
        setTimeout(function () { return _this.terminalView.focus(); }, 250);
    };
    Page.prototype.onBlocklyChange = function (xml, python) {
        this.updateFromBlockly(xml, python);
    };
    Page.prototype.onPythonChange = function (python) {
        this.updateFromPython(python);
    };
    Page.prototype.openFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var xml;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.app.openFile()];
                    case 1:
                        xml = _a.sent();
                        this.readBlocklyContents(xml);
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.saveFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var xml;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xml = this.state.doc.xml;
                        if (!xml) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.props.app.saveFile(xml, 'xml')];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.downloadPython = function () {
        return __awaiter(this, void 0, void 0, function () {
            var python;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        python = this.state.doc.python;
                        if (!python) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.props.app.saveFile(python, 'py')];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.openSamples = function () {
        this.setState({ samplesOpen: true });
    };
    Page.prototype.closeSamples = function () {
        this.setState({ samplesOpen: false });
    };
    Page.prototype.selectSample = function (file) {
        this.closeSamples();
        var xml = this.props.app.getSample(file);
        this.readBlocklyContents(xml);
    };
    Page.prototype.openThemes = function () {
        this.setState({ themesOpen: true });
    };
    Page.prototype.closeThemes = function () {
        this.setState({ themesOpen: false });
    };
    Page.prototype.selectTheme = function (theme) {
        this.closeThemes();
        document.body.className = "theme-" + theme;
    };
    Page.prototype.onTerminalClose = function () {
        this.setState({ terminalOpen: false });
    };
    Page.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: 'page' },
            React.createElement(Nav_1.default, { sync: this.state.doc.pythonClean, sendCode: function () { return _this.sendCode(); }, downloadPython: function () { return _this.downloadPython(); }, openCode: function () { return _this.openFile(); }, saveCode: function () { return _this.saveFile(); }, newCode: function () { return _this.new(); }, openSamples: function () { return _this.openSamples(); }, openThemes: function () { return _this.openThemes(); } }),
            React.createElement("section", { id: 'workspace' },
                React.createElement("button", { id: 'toggleViewButton', onClick: function () { return _this.toggleView(); } }, this.state.viewMode),
                React.createElement(BlocklyView_1.default, { ref: function (c) { return _this.blocklyView = c; }, visible: this.state.viewMode === 'blockly', xml: this.state.doc.xml, onChange: function (xml, python) { return _this.onBlocklyChange(xml, python); } }),
                React.createElement(PythonView_1.default, { ref: function (c) { return _this.pythonView = c; }, visible: this.state.viewMode === 'python', python: this.state.doc.python, onChange: function (python) { return _this.onPythonChange(python); } })),
            React.createElement(TerminalView_1.default, { ref: function (c) { return _this.terminalView = c; }, visible: this.state.terminalOpen, onClose: function () { return _this.onTerminalClose(); } }),
            React.createElement(SelectModal_1.default, { title: 'Samples', options: this.props.app.getSamples(), visible: this.state.samplesOpen, onSelect: function (file) { return _this.selectSample(file); }, onCancel: function () { return _this.closeSamples(); } }),
            React.createElement(SelectModal_1.default, { title: 'Themes', options: this.props.app.getThemes(), visible: this.state.themesOpen, onSelect: function (theme) { return _this.selectTheme(theme); }, onCancel: function () { return _this.closeThemes(); } })));
    };
    return Page;
}(preact_1.Component));
exports.default = Page;
