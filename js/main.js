"use strict";

let mercury = require("./mercury.js");
let venus = require("./venus.js");
let earth = require("./earth.js");
let mars = require("./mars.js");
let jupiter = require("./jupiter.js");
let saturn = require("./saturn.js");
let uranus = require("./uranus.js");
let neptune = require("./neptune.js");
let write = $("#stickItHere");

console.log("mercury", mercury);
console.log("write", write);
mercury.outputTo(write);
venus.outputTo(write);
earth.outputTo(write);
mars.outputTo(write);
jupiter.outputTo(write);
saturn.outputTo(write);
uranus.outputTo(write);
neptune.outputTo(write);