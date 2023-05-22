/* binary-trees/Node.ts */
export type DataNode = {
  id: string;
  left: DataNode | null;
  right: DataNode | null;
};

/**
 * Class Node
 *
 * @param id: string - Primary id for the node.
 *
 */
export default class Node {
  id: string;

  left: DataNode | null;

  right: DataNode | null;

  constructor(id) {
    if (id === null) {
      throw new TypeError('Param id must not be NULL');
    }
    this.id = id;
    this.left = null;
    this.right = null;
  }
}
