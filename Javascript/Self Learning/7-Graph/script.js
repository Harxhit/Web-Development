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
