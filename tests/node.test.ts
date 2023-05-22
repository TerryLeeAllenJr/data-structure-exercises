import Node from '../src/binary-trees/Node';

describe('Testing Node class', () => {
  test('Initializing Node with null value should have an error.', () => {
    const n = () => new Node(null);
    expect(n).toThrow(TypeError);
  });
});
