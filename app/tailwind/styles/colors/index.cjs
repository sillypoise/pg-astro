const light = require("./light.cjs");
const dark = require("./dark.cjs");
const overlay = require("./overlay.cjs");

module.exports = {
    ...light,
    ...dark,
    ...overlay,
};
