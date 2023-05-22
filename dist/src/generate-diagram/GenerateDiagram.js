"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* GenerateDiagram.ts */
var fs = __importStar(require("fs"));
var GenerateDiagram = /** @class */ (function () {
    function GenerateDiagram(fileName) {
        if (fileName === void 0) { fileName = null; }
        this.fileName = fileName !== null && fileName !== void 0 ? fileName : "generated/generated_diagram_".concat(Date.now(), ".md");
        this.diagram = {
            header: '```mermaid\nflowchart',
            footer: '\n```',
            connections: null,
        };
    }
    GenerateDiagram.prototype.createConnection = function (node) {
        var connection = "\n".concat(node.start, " ---> ").concat(node.end);
        if (this.diagram.connections === null) {
            this.diagram.connections = [connection];
        }
        else {
            this.diagram.connections.push(connection);
        }
        return this;
    };
    GenerateDiagram.prototype.build = function () {
        var _this = this;
        try {
            if (this.diagram.connections === null) {
                throw new Error('At least one connection must be made before a chart can be generated.');
            }
            var stream = fs.createWriteStream(this.fileName, 'utf-8');
            stream.on('error', function (err) {
                fs.rm(_this.fileName, function () { console.info('File removed.'); });
                throw err;
            });
            stream.write(this.diagram.header);
            for (var i = 0; i < this.diagram.connections.length; i += 1) {
                stream.write("\n".concat(this.diagram.connections[i]));
            }
            stream.write(this.diagram.footer);
            stream.end();
            stream.on('finish', function () {
                console.info("".concat(_this.fileName, " generated successfully."));
            });
            return this.fileName;
        }
        catch (err) {
            console.error(err);
            return err;
        }
    };
    return GenerateDiagram;
}());
exports.default = GenerateDiagram;
//# sourceMappingURL=GenerateDiagram.js.map