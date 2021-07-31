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

  hasPathDfs(node1, node2) {
    const visitedNodes = new Set();
    return this.hasPathDfsExecute(node1, node2, visitedNodes);
  };

  hasPathDfsExecute(node1, node2, visitedNodes) {
    if (visitedNodes.has(node1)) return false;
    visitedNodes.add(node1);

    if (node1 === node2) {
      return true;
    }

    const adjacencies = this.adjacencyList[node1];
    for (let i = 0; i <= adjacencies.length - 1; i++) {
      const adjacency = adjacencies[i];
      if (this.hasPathDfsExecute(adjacency, node2, visitedNodes)) return true;
    };

    return false;
  };

  hasPathBfs(node1, node2) {
    let visitedNodes = new Set();
    let queue = [node1];

    while (queue.length > 0) {
      const node = queue.shift();
      if (node === node2) return true;

      if (visitedNodes.has(node)) continue;
      visitedNodes.add(node);

      const adjacencies = this.adjacencyList[node];
      adjacencies.forEach(node => queue.push(node));
    };

    return false;
  };
}

const graph = new Graph();

graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');
graph.addNode('e');
graph.addNode('f');

graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');
graph.addEdge('b', 'd');
graph.addEdge('d', 'e');

graph.print();

console.log(graph.hasPathDfs('c', 'f')); // false
console.log(graph.hasPathDfs('c', 'f')); // false
console.log(graph.hasPathDfs('c', 'e')); // true

console.log(graph.hasPathBfs('c', 'f')); // false
console.log(graph.hasPathBfs('c', 'f')); // false
console.log(graph.hasPathBfs('c', 'e')); // true
