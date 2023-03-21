"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dl_test_array_map_1 = require("../dist/dl-test-array-map");
var res = (0, dl_test_array_map_1.default)([1, 2], function (item) { return item + 2; });
console.log(res);
