var buster = require("buster");
var myLib = require("../src/index.js");

buster.testCase("A test case", {
    "test it": function () {
        assert(true);
    }
})