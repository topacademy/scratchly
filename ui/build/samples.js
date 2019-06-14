"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var changeCase = require("change-case");
var includeFolder = require('include-folder');
var samples = includeFolder(path.join(__dirname, '..', 'samples'));
var Samples = {};
Object.keys(samples).forEach(function (file) {
    Samples[changeCase.titleCase(file)] = samples[file];
});
function newSamples() {
    function getSamples() {
        return Object.keys(Samples);
    }
    function getSample(file) {
        return Samples[file];
    }
    return {
        getSamples: getSamples,
        getSample: getSample,
    };
}
exports.newSamples = newSamples;
