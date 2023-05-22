"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleBinaryTree_1 = __importDefault(require("../src/binary-trees/SimpleBinaryTree"));
describe('Simple Binary Tree test', function () {
    test('Initializating class results in a null (empty) tree.', function () {
        var tree = new SimpleBinaryTree_1.default();
        expect(tree.rootNode).toBeNull();
    });
    test('Adding a single node to an empty tree results in a correct tree.rootNode value', function () {
        var _a;
        var tree = new SimpleBinaryTree_1.default();
        tree.add('A');
        expect((_a = tree.rootNode) === null || _a === void 0 ? void 0 : _a.id).toEqual('A');
    });
    test('Adding multiple nodes results in a valid binary tree.', function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var tree = new SimpleBinaryTree_1.default();
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        while (arr.length) {
            var val = arr.shift();
            if (typeof val === 'string') {
                tree.add(val);
            }
        }
        var root = tree.rootNode;
        expect(root === null || root === void 0 ? void 0 : root.id).toBe('A');
        expect((_a = root === null || root === void 0 ? void 0 : root.left) === null || _a === void 0 ? void 0 : _a.id).toBe('B');
        expect((_b = root === null || root === void 0 ? void 0 : root.right) === null || _b === void 0 ? void 0 : _b.id).toBe('C');
        expect((_d = (_c = root === null || root === void 0 ? void 0 : root.left) === null || _c === void 0 ? void 0 : _c.left) === null || _d === void 0 ? void 0 : _d.id).toBe('D');
        expect((_f = (_e = root === null || root === void 0 ? void 0 : root.left) === null || _e === void 0 ? void 0 : _e.right) === null || _f === void 0 ? void 0 : _f.id).toBe('E');
        expect((_j = (_h = (_g = root === null || root === void 0 ? void 0 : root.left) === null || _g === void 0 ? void 0 : _g.left) === null || _h === void 0 ? void 0 : _h.left) === null || _j === void 0 ? void 0 : _j.id).toBe('F');
        expect((_m = (_l = (_k = root === null || root === void 0 ? void 0 : root.left) === null || _k === void 0 ? void 0 : _k.left) === null || _l === void 0 ? void 0 : _l.right) === null || _m === void 0 ? void 0 : _m.id).toBe('G');
    });
    test('Adding multiple nodes results in a valid binary tree.', function () {
        var tree = new SimpleBinaryTree_1.default();
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        while (arr.length) {
            var val = arr.shift();
            if (typeof val === 'string') {
                tree.add(val);
            }
        }
        tree.generate();
    });
});
//# sourceMappingURL=simple-binary.test.js.map