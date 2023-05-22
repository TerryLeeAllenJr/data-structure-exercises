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
exports.Diagram = void 0;
/* GenerateDiagram.ts */
var fs = __importStar(require("fs"));
var Diagram = /** @class */ (function () {
    function Diagram(fileName) {
        if (fileName === void 0) { fileName = null; }
        this.fileName = fileName !== null && fileName !== void 0 ? fileName : 'generated/generated_diagram_' + Date.now() + '.md';
        this.diagram = {
            header: '```mermaid\nflowchart',
            footer: "\n```",
            connections: null
        };
    }
    ;
    Diagram.prototype.createConnection = function (node) {
        var connection = '\n' + node.start + ' ---> ' + node.end;
        if (this.diagram.connections === null) {
            this.diagram.connections = [connection];
        }
        else {
            this.diagram.connections.push(connection);
        }
        return this;
    };
    Diagram.prototype.build = function () {
        var _this = this;
        try {
            console.info(this.diagram);
            if (this.diagram.connections === null)
                throw new Error('At least one connection must be made before a chart can be generated.');
            var stream = fs.createWriteStream(this.fileName, 'utf-8');
            stream.on('error', function (err) {
                fs.rm(_this.fileName, function () { console.info('File removed.'); });
                throw err;
            });
            stream.write(this.diagram.header);
            for (var i = 0; i < this.diagram.connections.length; i++) {
                console.info(this.diagram.connections[i]);
                stream.write('\n' + this.diagram.connections[i]);
            }
            stream.write(this.diagram.footer);
            stream.end();
            stream.on('finish', function () {
                console.info(_this.fileName + ' generated successfully.');
            });
            return this.fileName;
        }
        catch (err) {
            console.error(err);
            return err;
        }
    };
    return Diagram;
}());
exports.Diagram = Diagram;
var diagram = new Diagram();
diagram.createConnection({ start: 'A', end: 'B' });
diagram.createConnection({ start: 'A', end: 'C' });
diagram.createConnection({ start: 'B', end: 'D' });
diagram.createConnection({ start: 'B', end: 'E' });
var fileName = diagram.build();
//# sourceMappingURL=GenerateDiagram.js.map