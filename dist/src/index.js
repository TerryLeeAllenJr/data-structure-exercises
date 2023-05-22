"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleBinaryTree_1 = __importDefault(require("./binary-trees/SimpleBinaryTree"));
var tree = new SimpleBinaryTree_1.default();
tree.add('A');
tree.add('B');
tree.add('C');
tree.add('D');
tree.add('E');
tree.add('F');
tree.add('G');
tree.add('H');
tree.add('I');
tree.add('J');
tree.add('K');
tree.add('L');
tree.add('M');
tree.add('N');
tree.add('O');
tree.add('P');
tree.add('Q');
tree.add('R');
tree.generate();
var root = tree.rootNode;
if (root !== null) {
    console.info(root);
    console.info(root.left);
    console.info(root.right);
}
//# sourceMappingURL=index.js.map