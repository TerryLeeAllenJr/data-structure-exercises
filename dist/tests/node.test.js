"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __importDefault(require("../src/binary-trees/Node"));
describe('Testing Node class', function () {
    test('Initializing Node with null value should have an error.', function () {
        var n = function () { return new Node_1.default(null); };
        expect(n).toThrow(TypeError);
    });
});
//# sourceMappingURL=node.test.js.map