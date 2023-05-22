"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class Node
 *
 * @param id: string - Primary id for the node.
 *
 */
var Node = /** @class */ (function () {
    function Node(id) {
        if (id === null) {
            throw new TypeError('Param id must not be NULL');
        }
        this.id = id;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
exports.default = Node;
//# sourceMappingURL=Node.js.map