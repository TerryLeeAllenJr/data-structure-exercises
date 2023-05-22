import SimpleBinaryTree from './binary-trees/SimpleBinaryTree';

const tree = new SimpleBinaryTree();
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

const root = tree.rootNode;
if (root !== null) {
  console.info(root);
  console.info(root.left);
  console.info(root.right);
}
