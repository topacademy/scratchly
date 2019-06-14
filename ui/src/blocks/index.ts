import fs = require('fs');
import path = require('path');

let toolBoxXml = '';

toolBoxXml += '<xml>';

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

import minecraftDefs from './minecraft/definitions';
import minecraftGens from './minecraft/generators';
minecraftDefs(Blockly.Blocks);
minecraftGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'minecraft', 'toolbox.xml'));

import gpiozeroDefs from './gpiozero/definitions';
import gpiozeroGens from './gpiozero/generators';
gpiozeroDefs(Blockly.Blocks);
gpiozeroGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'gpiozero', 'toolbox.xml'));

import sonicpiDefs from './sonicpi/definitions';
import sonicpiGens from './sonicpi/generators';
sonicpiDefs(Blockly.Blocks);
sonicpiGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'sonicpi', 'toolbox.xml'));

import pimoroniDefs from './pimoroni/definitions';
import pimoroniGens from './pimoroni/generators';
pimoroniDefs(Blockly.Blocks);
pimoroniGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pimoroni', 'toolbox.xml'));

import advancedDefs from './advanced/definitions';
import advancedGens from './advanced/generators';
advancedDefs(Blockly.Blocks);
advancedGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'advanced', 'toolbox.xml'));

import bitioDefs from './bitio/definitions';
import bitioGens from './bitio/generators';
bitioDefs(Blockly.Blocks);
bitioGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'bitio', 'toolbox.xml'));

import turtleDefs from './turtle/definitions';
import turtleGens from './turtle/generators';
turtleDefs(Blockly.Blocks);
turtleGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'turtle', 'toolbox.xml'));

import sensehatDefs from './sensehat/definitions';
import sensehatGens from './sensehat/generators';
sensehatDefs(Blockly.Blocks);
sensehatGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'sensehat', 'toolbox.xml'));

import crickitDefs from './crickit/definitions';
import crickitGens from './crickit/generators';
crickitDefs(Blockly.Blocks);
crickitGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'crickit', 'toolbox.xml'));

import smartroverDefs from './smartrover/definitions';
import smartroverGens from './smartrover/generators';
smartroverDefs(Blockly.Blocks);
smartroverGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'smartrover', 'toolbox.xml'));

toolBoxXml += '</xml>';

function getToolBoxXml() {
  return toolBoxXml;
}

export {
  getToolBoxXml,
};
