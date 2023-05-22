import Node, { DataNode } from './Node';
import GenerateDiagram from '../generate-diagram/GenerateDiagram';

export default class SimpleBinaryTree {
  private root: Node | null;

  constructor() {
    this.root = null;
  }

  public get rootNode() {
    return this.root;
  }

  add(value: string) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }

    // Perform a breadth first traversal for adding new nodes in an unordered fashion.
    const queue: Node[] = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (typeof current === 'undefined') {
        throw new Error('The queue was extinguished without fining a suitable child branch.');
      }
      if (current.left === null) {
        current.left = new Node(value);
        return;
      }
      if (current.right === null) {
        current.right = new Node(value);
        return;
      }
      queue.push(current.left);
      queue.push(current.right);
    }
  }

  find(value:string, node: Node | null = null) : DataNode | boolean {
    if (this.root === null) { return false; }
    const current = node || this.root;

    if (current.id === value) { return current; }

    const left: DataNode | boolean = current.left ? this.find(value, current.left) : false;
    const right: DataNode | boolean = current.right ? this.find(value, current.right) : false;

    if (left) { return left; }
    if (right) { return right; }
    return false;
  }

  generate() {
    if (this.root === null) {
      throw new Error('Can not generate graph on empty tree.');
    }
    const diagram = new GenerateDiagram();
    const queue: Node[] = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (typeof current !== 'undefined' && current?.left !== null) {
        queue.push(current.left);
        diagram.createConnection({ start: current.id, end: current.left.id || 'Empty' });
      }
      if (typeof current !== 'undefined' && current?.right !== null) {
        queue.push(current.right);
        diagram.createConnection({ start: current.id, end: current.right.id || 'Empty' });
      }
    }
    diagram.build();
  }
}
