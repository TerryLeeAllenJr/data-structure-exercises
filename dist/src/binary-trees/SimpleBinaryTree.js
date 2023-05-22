"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __importDefault(require("./Node"));
var GenerateDiagram_1 = __importDefault(require("../generate-diagram/GenerateDiagram"));
var SimpleBinaryTree = /** @class */ (function () {
    function SimpleBinaryTree() {
        this.root = null;
    }
    Object.defineProperty(SimpleBinaryTree.prototype, "rootNode", {
        get: function () {
            return this.root;
        },
        enumerable: false,
        configurable: true
    });
    SimpleBinaryTree.prototype.add = function (value) {
        var node = new Node_1.default(value);
        if (this.root === null) {
            this.root = node;
            return;
        }
        // Perform a breadth first traversal for adding new nodes in an unordered fashion.
        var queue = [this.root];
        while (queue.length) {
            var current = queue.shift();
            if (typeof current === 'undefined') {
                throw new Error('The queue was extinguished without fining a suitable child branch.');
            }
            if (current.left === null) {
                current.left = new Node_1.default(value);
                return;
            }
            if (current.right === null) {
                current.right = new Node_1.default(value);
                return;
            }
            queue.push(current.left);
            queue.push(current.right);
        }
    };
    SimpleBinaryTree.prototype.generate = function () {
        if (this.root === null) {
            throw new Error('Can not generate graph on empty tree.');
        }
        var diagram = new GenerateDiagram_1.default();
        var queue = [this.root];
        while (queue.length) {
            var current = queue.shift();
            if (typeof current !== 'undefined' && (current === null || current === void 0 ? void 0 : current.left) !== null) {
                queue.push(current.left);
                diagram.createConnection({ start: current.id, end: current.left.id || 'Empty' });
            }
            if (typeof current !== 'undefined' && (current === null || current === void 0 ? void 0 : current.right) !== null) {
                queue.push(current.right);
                diagram.createConnection({ start: current.id, end: current.right.id || 'Empty' });
            }
        }
        diagram.build();
    };
    return SimpleBinaryTree;
}());
exports.default = SimpleBinaryTree;
//# sourceMappingURL=SimpleBinaryTree.js.map