/* GenerateDiagram.ts */
import * as fs from 'fs';

type Connection = {
  start: string
  end: string
};
type MermaidChart = {
  header: string,
  footer: string,
  connections: [string] | null
};

export default class GenerateDiagram {
  private diagram : MermaidChart;

  private readonly fileName: string;

  constructor(fileName = null) {
    this.fileName = fileName ?? `generated/generated_diagram_${Date.now()}.md`;
    this.diagram = {
      header: '```mermaid\nflowchart',
      footer: '\n```',
      connections: null,
    };
  }

  createConnection(node:Connection) {
    const connection = `\n${node.start} ---> ${node.end}`;
    if (this.diagram.connections === null) {
      this.diagram.connections = [connection];
    } else {
      this.diagram.connections.push(connection);
    }
    return this;
  }

  build() {
    try {
      if (this.diagram.connections === null) {
        throw new Error(
          'At least one connection must be made before a chart can be generated.',
        );
      }

      const stream = fs.createWriteStream(this.fileName, 'utf-8');

      stream.on('error', (err) => {
        fs.rm(this.fileName, () => { console.info('File removed.'); });
        throw err;
      });

      stream.write(this.diagram.header);

      for (let i = 0; i < this.diagram.connections.length; i += 1) {
        stream.write(`\n${this.diagram.connections[i]}`);
      }

      stream.write(this.diagram.footer);
      stream.end();

      stream.on('finish', () => {
        console.info(`${this.fileName} generated successfully.`);
      });

      return this.fileName;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
