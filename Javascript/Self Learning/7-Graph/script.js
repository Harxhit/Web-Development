/** Graph Traversal 
1. Depth First => 
Traverse a far down a branch as possible before tracking. 
We are exploring one direction as far as possible.  
It uses a stack.  
**/

//Implementation using traversal
const depthFirst = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
};

//Implementation using recursion

const depthFirstPrint = (graph, source) => {
  console.log(source);
  for (let neighbour of graph[source]) {
    depthFirstPrint(graph, neighbour);
  }
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

//depthFirst(graph, "a"); //acebdf
//depthFirstPrint(graph, "a"); //acebdf

/** 
2.Breadth First 
Traverse level by levle visiting all neighbours of a vertex before moving to thee next level.(It will explore all directions rather than choosing one). 
It uses a queue. 
**/

const breadthFirst = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
};

//breadthFirst(graph, "a"); //acbdef

/** 
Problem 1 : Given a graph, a source node(f), and a destination node(k), we need to check if there is a path from the source to the destination, and return true if a path exists, otherwise return false
**/

//Using breadth first
const hasPath = (trace, sourceNode, destinantionNode) => {
  const queue = [];
  while (queue.length > 0) {
    let current = queue.shift();
    if (sourceNode === destinantionNode) return true;

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }

  return true;
};

const trace = {
  f: ["g", "h"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["j"],
  k: [],
};

//console.log(hasPath(trace, "f", "k"));

//Using depth first

const hasPathDepth = (trace, source, destinantion) => {
  if (source === destinantion) return true;

  for (let neighbour of trace[source]) {
    if (hasPathDepth(trace, neighbour, destinantion)) return true;
  }
  return false;
};

//console.log(hasPathDepth(trace, "h", "k"));

/** 
Problem 2 : You are given an undirected graph represented by a list of edges. Each edge connects two nodes (strings). Your task is to:

1. Convert the edge list into an adjacency list.
2. Write a function that determines whether a path exists between a given source node and a destination node.
3. Return true if a path exists, otherwise return false.
**/

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

function undirectedPath(edges, nodeA, nodeB) {
  const buildGraph = (edges) => {
    const graph = {};

    edges.forEach(([u, v]) => {
      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];

      graph[u].push(v);
      graph[v].push(u);
    });

    return graph;
  };

  const graph = buildGraph(edges);
  const visited = new Set();
  const hasPath = (graph, src, dest, visited) => {
    if (src === dest) return true;
    if (visited.has(src)) return false;
    visited.add(src);

    for (let neighbour of graph[src]) {
      if (hasPath(graph, neighbour, dest, visited)) return true;
    }
    return false;
  };

  return hasPath(graph, nodeA, nodeB, visited);
}

//console.log(undirectedPath(edges, "i", "k"));

/** 
Problem 3  : Write a function , connectedComponentsCount , that takes in the adjaceny list of an undirected graph . the function should return the number of connected components within the graph. 
**/

const graph1 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const connectedComponentsCount = (graph1) => {
  let visited = new Set();
  let count = 0;

  for (let node in graph1) {
    if (explore(graph1, node, visited)) {
      count++;
    }
  }
  return count;
};

const explore = (graph1, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  for (let neighbour of graph1[current]) {
    explore(graph1, neighbour, visited);
  }
  return true;
};
//console.log(connectedComponentsCount(graph1));

/** 
Problem 4 : Write a function largestComponent hat takes in the adjaency list of an undirected graph . The function should return the size of the largest component in the graph.  
**/

const largestComponent = (graph1) => {
  let largest = 0;
  let visited = new Set();

  for (let node in graph1) {
    const size = exploreSize(graph1, node, visited);
    if (size > largest) largest = size;
  }

  return largest;
};

const exploreSize = (graph1, current, visited) => {
  if (visited.has(String(current))) return 0;
  visited.add(String(current));

  let size = 1;
  for (let neighbour of graph1[current]) {
    size += exploreSize(graph1, neighbour, visited);
  }
  return size;
};

//console.log(largestComponent(graph1));

/** 
Problem 4 : Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1. You can assume that A and B exist as nodes in the graph.
**/

const edge = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const shortestPath = (edge, nodeA, nodeB) => {
  const graph = convertEdge(edge);
  let queue = [[nodeA, 0]];
  let visited = new Set([nodeA]);

  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;

    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
  return -1;
};

const convertEdge = (edge) => {
  let graph = {};

  edge.forEach(([u, v]) => {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];

    graph[u].push(v);
    graph[v].push(u);
  });
  return graph;
};

//console.log(shortestPath(edge, "w", "z"));

/** 
Problem 5 : Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
**/

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const islandCount = (grid) => {};

islandCount(grid); // 3
