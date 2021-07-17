class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(node) {
    this.adjacencyList[node] = [];
  };

  addEdge(node1, node2) { // undirected graph
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  };

  print() {
    Object.keys(this.adjacencyList).forEach(node => {
      const adjacencies = this.adjacencyList[node];
      console.log(`${node} => ${adjacencies.join(', ')}`);
    });
  };
}

const graph = new Graph();

graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');
graph.addNode('e');

graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');
graph.addEdge('b', 'd');
graph.addEdge('d', 'e');

graph.print();