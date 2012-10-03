//var buster = require("buster");
/*
var myLib = require("../src/index.js");

buster.testCase("A test case", {
    "test it": function () {
        assert(true);
    }
})
*/

//if (typeof module == "object" && typeof require == "function") {
    var buster = require("buster");
//}

buster.testCase("Multi-environment", {
    "runs in all environments": function () {
        assert(true);
    },
/*
    "sub context": {
        requiresSupportFor: { "DOM": typeof document != "undefined" },

        "only runs in browser-like environments": function () {
            // ...
        }
    }
*/
});
