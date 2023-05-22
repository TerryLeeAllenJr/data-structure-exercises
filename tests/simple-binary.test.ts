import SimpleBinaryTree from '../src/binary-trees/SimpleBinaryTree';
import { DataNode } from '../src/binary-trees/Node';

describe('Simple Binary Tree test', () => {
  test('Initializating class results in a null (empty) tree.', () => {
    const tree = new SimpleBinaryTree();
    expect(tree.rootNode).toBeNull();
  });
  test('Adding a single node to an empty tree results in a correct tree.rootNode value', () => {
    const tree = new SimpleBinaryTree();
    tree.add('A');
    expect(tree.rootNode?.id).toEqual('A');
  });
  test('Adding multiple nodes results in a valid binary tree.', () => {
    const tree = new SimpleBinaryTree();
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    while (arr.length) {
      const val = arr.shift();
      if (typeof val === 'string') {
        tree.add(val);
      }
    }
    const root = tree.rootNode;
    expect(root?.id).toBe('A');
    expect(root?.left?.id).toBe('B');
    expect(root?.right?.id).toBe('C');
    expect(root?.left?.left?.id).toBe('D');
    expect(root?.left?.right?.id).toBe('E');
    expect(root?.right?.left?.id).toBe('F');
    expect(root?.right?.right?.id).toBe('G');
  });
  test('A node should be able to be found using tree.find()', () => {
    const tree = new SimpleBinaryTree();
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    while (arr.length) {
      const val = arr.shift();
      if (typeof val === 'string') {
        tree.add(val);
      }
    }
    const node: DataNode | boolean = tree.find('C');
    expect(node).toHaveProperty('id');
    if (typeof node !== 'boolean') {
      expect(node.id).toBe('C');
    }
  });
});
