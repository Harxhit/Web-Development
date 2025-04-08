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

const islandCount = (grid) => {
  let visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (calculation(grid, r, c, visited)) {
        count++;
      }
    }
  }
  return count;
};

const calculation = (grid, r, c, visited) => {
  const validRow = r >= 0 && r < grid.length;
  const validCol = c >= 0 && c < grid[0].length;

  if (!validRow || !validCol) return false;

  if (grid[r][c] === "W") return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  calculation(grid, r + 1, c, visited); //Goes down
  calculation(grid, r - 1, c, visited); //Goes up
  calculation(grid, r, c + 1, visited); //Goes right
  calculation(grid, r, c - 1, visited); // Goes left

  return true;
};

//console.log(islandCount(grid)); // 3

/** 
Problem 6 : Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
**/

const minGrid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreMinIsland(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }
  return minSize;
};

const exploreMinIsland = (grid, r, c, visited) => {
  const validRow = r >= 0 && r < grid.length;
  const validCol = c >= 0 && c < grid[0].length;

  if (!validCol || !validRow) return 0;

  if (grid[r][c] === "W") return 0;

  const pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;

  size += exploreMinIsland(grid, r + 1, c, visited);
  size += exploreMinIsland(grid, r - 1, c, visited);
  size += exploreMinIsland(grid, r, c + 1, visited);
  size += exploreMinIsland(grid, r, c - 1, visited);

  return size;
};
//console.log(minimumIsland(minGrid)); // -> 1

/**Cycle detection =>
Cycle detection means checking if there's a loop in a graph — a path that starts and ends at the same node
Example - 
A → B → C
     ↑   ↓
     E ← D

**/

/**
 * 🔁 Problem 1: Detect Cycle in an Undirected Graph
 *
 * Problem:
 * Given an undirected graph with V vertices and E edges,
 * determine if the graph contains a cycle.
 *
 * Input:
 * V = 5
 * edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]]
 *
 * Output:
 * true
 *
 * Explanation:
 * There is a cycle: 1 → 2 → 3 → 4 → 1
 */

const detectCycle = (vertices, edges) => {
  const graph = adjacencyList(edges);
  const queue = [];
  const visited = new Array(vertices).fill(false);

  const bfs = (start) => {
    queue.push([start, -1]);
    while (queue.length > 0) {
      const [node, parent] = queue.shift();
      visited[node] = true;
      for (let neighbour of graph[node] || []) {
        if (!visited[neighbour]) {
          queue.push([neighbour, node]);
        } else if (neighbour !== parent) return true;
      }
    }
    return false;
  };

  for (let i = 0; i < vertices; i++) {
    if (!visited[i]) {
      if (bfs(i)) return true;
    }
  }
  return false;
};

const adjacencyList = (edges) => {
  const graph = {};
  edges.forEach(([u, v]) => {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];

    graph[u].push(v);
    graph[v].push(u);
  });
  return graph;
};

// console.log(
//   detectCycle(5, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 1],
//   ])
// );

/**
 * 🔁 Problem 2: Detect Cycle in Each Connected Component
 *
 * Problem:
 * Given a disconnected undirected graph with multiple components,
 * determine if any of the components contain a cycle.
 *
 * Input:
 * V = 6
 * edges = [[0, 1], [1, 2], [3, 4]]
 *
 * Output:
 * false
 *
 * Explanation:
 * No component contains a cycle.
 */

const detectCycleComponent = (vertices, edges) => {
  const graph = adjacencyList(edges);
  const queue = [];
  const visited = new Array(vertices).fill(false);

  const bfs = (start) => {
    queue.push([start, -1]);
    while (queue.length > 0) {
      const [node, parent] = queue.shift();
      visited[node] = true;
      for (let neighbour of graph[node] || []) {
        if (!visited[neighbour]) {
          queue.push([neighbour, node]);
        } else if (parent !== neighbour) return true;
      }
    }
    return false;
  };

  for (let i = 0; i < vertices; i++) {
    if (!visited[i]) {
      if (bfs(i)) return true;
    }
  }
  return false;
};

// console.log(
//   detectCycleComponent(6, [
//     [0, 1],
//     [1, 2],
//     [3, 4],
//   ])
// );

/**
 * 🔁 Problem 3: Is Graph a Tree?
 *
 * Problem:
 * Given `n` nodes labeled from 0 to n - 1 and a list of edges,
 * determine if the graph is a valid tree (connected and acyclic).
 *
 * Input:
 * n = 5
 * edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
 *
 * Output:
 * true
 *
 * Explanation:
 * Graph is connected and has no cycles.
 */

// console.log(
//   detectCycle(5, [
//     [0, 1],
//     [0, 2],
//     [0, 3],
//     [1, 4],
//   ])
// );

/**
 * 🔁 Problem 4: Find Redundant Connection
 *
 * Problem:
 * You are given a list of edges representing an undirected graph.
 * The graph started as a tree but one extra edge was added.
 * Find the edge that creates a cycle.
 *
 * Input:
 * edges = [[1, 2], [1, 3], [2, 3]]
 *
 * Output:
 * [2, 3]
 *
 * Explanation:
 * Removing edge [2, 3] breaks the cycle and leaves a tree.
 */

const unionStep = (edges) => {
  const parent = [];

  for (let i = 0; i <= edges.length; i++) {
    parent[i] = i;
  }

  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) return false;

    parent[rootY] = rootX;
    return true;
  };

  for (const [u, v] of edges) {
    if (!union(u, v)) {
      return [u, v];
    }
  }
  return [];
};

// console.log(
//   unionStep([
//     [1, 2],
//     [1, 3],
//     [2, 3],
//   ])
// );

/**
 * 🔁 Problem 5: BFS-Based Cycle Detection with Adjacency List
 *
 * Problem:
 * Write a function that takes a graph in the form of an adjacency list
 * and returns true if the graph contains any cycle using BFS.
 *
 * Input:
 * graph = {
 *   0: [1],
 *   1: [0, 2],
 *   2: [1, 3],
 *   3: [2, 4],
 *   4: [3, 1]
 * }
 *
 * Output:
 * true
 *
 * Explanation:
 * There is a cycle: 1 → 2 → 3 → 4 → 1
 */

const detect = (grp) => {
  const queue = [];
  const length = Object.keys(grp).length;
  const visited = new Array(length).fill(false);

  const bfs = (start) => {
    queue.push([start, -1]);
    while (queue.length > 0) {
      const [node, parent] = queue.shift();
      visited[node] = true;
      for (let neighbour of grp[node] || []) {
        if (!visited[neighbour]) {
          queue.push([neighbour, node]);
        } else if (parent !== neighbour) return true;
      }
    }
    return false;
  };

  for (let node in grp) {
    const num = Number(node);
    if (!visited[num]) {
      if (bfs(num)) return true;
    }
  }
  return false;
};

const grp = {
  0: [1],
  1: [0, 2],
  2: [1, 3],
  3: [2, 4],
  4: [3, 1],
};

//console.log(detect(grp));

/**
 * 🔁 Problem 1: Detect Cycle in an Undirected Graph (DFS)
 *
 * Problem:
 * Given an undirected graph with V vertices and E edges,
 * determine if the graph contains a cycle using DFS.
 *
 * Input:
 * V = 5
 * edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]]
 *
 * Output:
 * true
 *
 * Explanation:
 * There is a cycle: 1 → 2 → 3 → 4 → 1
 */

const detectCycleDFS = (edges) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  const dfs = (node, parent) => {
    visited.add(node);
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        if (dfs(neighbour, node)) return true;
        else if (neighbour !== parent) return true;
      }
    }
    return false;
  };

  const length = Object.keys(graph).length;
  for (let node = 0; node < length; node++) {
    if (!visited.has(node)) {
      if (dfs(node, -1)) return true;
    }
  }
  return false;
};

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

// console.log(
//   detectCycleDFS([
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 1],
//   ])
// );

/**
 * 🔁 Problem 2: Detect Cycle in Disconnected Graph (DFS)
 *
 * Problem:
 * Given an undirected graph that may be disconnected,
 * detect if any of its components contain a cycle using DFS.
 *
 * Input:
 * V = 6
 * edges = [[0, 1], [1, 2], [3, 4]]
 *
 * Output:
 * false
 *
 * Explanation:
 * No component contains a cycle.
 */

const detectCycleComponentDFS = (edges) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  const dfs = (node, parent) => {
    if (!visited.has(node)) return false;
    visited.add(node);

    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        if (dfs(neighbour, node)) return true;
        else if (parent !== neighbour) return true;
      }
    }
    return false;
  };
  const length = Object.keys(graph).length;
  for (let node = 0; node < length; node++) {
    if (!visited.has(node)) {
      if (dfs(node, -1)) return true;
    }
  }
  return false;
};
// console.log(
//   detectCycleComponentDFS([
//     [0, 1],
//     [1, 2],
//     [3, 4],
//   ])
// );

/**
 * 🔁 Problem 3: Detect Cycle in Tree Structure
 *
 * Problem:
 * Given an undirected graph with n nodes and n-1 edges,
 * check if it contains a cycle (i.e., check if it is not a tree).
 *
 * Input:
 * n = 5
 * edges = [[0, 1], [0, 2], [1, 3], [1, 4]]
 *
 * Output:
 * false
 *
 * Explanation:
 * Tree structure has no cycles.
 */

const detectCycleTreeDFS = (edges) => {
  const visited = new Set();
  const graph = buildGraph(edges);

  const dfs = (node, parent) => {
    if (!visited.has(node)) return false;
    visited.add(node);
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        if (dfs(neighbour, node)) return true;
        else if (parent !== neighbour) return true;
      }
    }
    return false;
  };

  const length = Object.keys(graph).length;
  for (let i = 0; i < length; i++) {
    if (!visited.has(i)) {
      if (dfs(i, -1)) return true;
    }
  }
  return false;
};
// console.log(
//   detectCycleTreeDFS([
//     [0, 1],
//     [0, 2],
//     [1, 3],
//     [1, 4],
//   ])
// );

/**
 * 🔁 Problem 4: Find All Nodes Part of a Cycle
 *
 * Problem:
 * Return all nodes that are part of any cycle in an undirected graph.
 *
 * Input:
 * V = 6
 * edges = [[0, 1], [1, 2], [2, 0], [3, 4]]
 *
 * Output:
 * [0, 1, 2]
 *
 * Explanation:
 * Nodes 0, 1, and 2 form a cycle.
 */

const findCycleNodes = (vertices, edges) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const hasCycle = new Set();

  const dfs = (node, parent, path) => {
    visited.add(node);
    path.push(node);
    if (!graph[node]) return;

    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        dfs(neighbour, node, path);
      } else if (neighbour !== parent && path.includes(neighbour)) {
        const index = path.indexOf(neighbour);
        for (let i = index; i < path.length; i++) {
          hasCycle.add(path[i]);
        }
      }
    }

    path.pop();
  };

  for (let i = 0; i < vertices; i++) {
    if (!visited.has(i)) {
      dfs(i, -1, []);
    }
  }

  return Array.from(hasCycle);
};

// console.log(
//   findCycleNodes(6, [
//     [0, 1],
//     [1, 2],
//     [2, 0],
//     [3, 4],
//   ])
// );

/**
 * 🔁 Problem 5: Detect Self-Loop and Multi-Edges as Cycles
 *
 * Problem:
 * Given an undirected graph, detect if there’s a self-loop (edge from a node to itself)
 * or multiple edges between the same two nodes which form a cycle.
 *
 * Input:
 * V = 4
 * edges = [[0, 1], [1, 2], [2, 0], [0, 0]]
 *
 * Output:
 * true
 *
 * Explanation:
 * Self-loop on node 0 is a cycle.
 */

// console.log(
//   detectCycleDFS([
//     [0, 1],
//     [1, 2],
//     [2, 0],
//     [0, 0],
//   ])
// );

/** Topological sort => Topological Sort is a linear ordering of the vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u → v, u comes before v in the ordering.
When to Use It?
You use topological sort when:
You want to schedule tasks that depend on each other.
You're trying to resolve dependencies (like package managers, build systems).
You're figuring out an order of courses, projects, or processes where some things must happen before others.
 **/

/**
 * Problem 1: Course Schedule
 * ---------------------------------
 * Description:
 * Given numCourses and prerequisites list, check if you can finish all courses.
 * This is equivalent to detecting a cycle in a directed graph.
 *
 * Input:
 * numCourses = 4
 * prerequisites = [[1,0],[2,1],[3,2]]
 *
 * Output:
 * true
 *
 * Explanation:
 * One possible order is [0,1,2,3], so it’s possible to finish all courses.
 */

const topo = (numCourses, edges) => {
  let topoArray = [];
  const graph = buildAdjanceyList(numCourses, edges);
  const visited = new Set();
  const recursion = new Set();

  const detectCycleTopo = (node) => {
    visited.add(node);
    recursion.add(node);
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        if (detectCycleTopo(neighbour)) {
          return true;
        } else if (recursion.has(neighbour)) {
          return true;
        }
      }
    }
    recursion.delete(node);
    topoArray.push(node);
    return false;
  };

  for (let node = 0; node < numCourses; node++) {
    if (!visited.has(node)) {
      if (detectCycleTopo(node)) return false;
    }
  }
  return topoArray.length === numCourses;
};

const buildAdjanceyList = (numCourses, edges) => {
  let graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  edges.forEach(([u, v]) => {
    graph[u].push(v);
  });

  return graph;
};

// console.log(
//   topo(4, [
//     [1, 0],
//     [2, 1],
//     [3, 2],
//   ])
// );

/**
 * Problem 2: Course Schedule II
 * ---------------------------------
 * Description:
 * Similar to Problem 1, but now return the actual order of course completion.
 * If multiple valid orders exist, return any.
 *
 * Input:
 * numCourses = 4
 * prerequisites = [[1,0],[2,1],[3,2]]
 *
 * Output:
 * [0,1,2,3]
 *
 * Explanation:
 * Topological sort of the course dependency graph.
 */

const findOrder = (numCourses, edges) => {
  const topoArray = [];
  const graph = buildGraph(numCourses, edges);
  const visited = new Set();
  const recursion = new Set();

  const dfs = (node) => {
    visited.add(node);
    recursion.add(node);
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        if (dfs(neighbour)) return true;
      } else if (recursion.has(neighbour)) return true;
    }
    recursion.delete(node);
    topoArray.push(node);
    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!visited.has(i)) {
      if (dfs(i)) return false;
    }
  }

  function buildGraph(numCourses, edges) {
    const graph = {};
    for (let i = 0; i < numCourses; i++) {
      graph[i] = [];
    }
    edges.forEach(([u, v]) => {
      graph[v].push(u);
    });
    return graph;
  }

  return topoArray.reverse();
};

// console.log(
//   findOrder(4, [
//     [1, 0],
//     [2, 1],
//     [3, 2],
//   ])
// );

/**
 * Problem 3: Alien Dictionary
 * ---------------------------------
 * Description:
 * Given a sorted list of words from an alien dictionary, return a string representing
 * the order of characters in the alien language. Return "" if ordering is not possible.
 *
 * Input:
 * words = ["wrt", "wrf", "er", "ett", "rftt"]
 *
 * Output:
 * "wertf"
 *
 * Explanation:
 * Order of letters: w -> e -> r -> t -> f
 */

/**
 * Problem 4: Minimum Time to Complete All Tasks
 * ---------------------------------
 * Description:
 * Given a list of tasks and their dependencies, each task takes unit time. Return the
 * minimum time required to finish all tasks with parallel execution allowed.
 *
 * Input:
 * n = 3
 * relations = [[1,3],[2,3]]
 * time = [3,2,5]
 *
 * Output:
 * 8
 *
 * Explanation:
 * Task 3 depends on 1 and 2. So, max(time[1], time[2]) + time[3] = max(3,2) + 5 = 8
 */

function minTime(n, relations, time) {
  const graph = buildGraph(n, relations);
  const visited = new Set();
  const finshTime = new Array(n).fill(0);

  const dfs = (node) => {
    if (visited.has(node)) return -1;
    visited.add(node);

    let maxTime = 0;
    for (let neighbour of graph[node]) {
      const sum = dfs(neighbour);
      if (sum === -1) return -1;
      maxTime = Math.max(maxTime, sum);
    }
    visited.delete(node);
    finshTime[node] = time[node] + maxTime;
    return finshTime[node];
  };

  function buildGraph(vertices, edges) {
    const graph = {};
    for (let i = 0; i < vertices; i++) {
      graph[i] = [];
    }
    edges.forEach(([u, v]) => graph[v - 1].push(u - 1));
    return graph;
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    let temp = dfs(i);
    if (temp === -1) return -1;
    result = Math.max(result, temp);
  }
  return result;
}
const time = [3, 2, 5];
const n = 3;
const relations = [
  [1, 3],
  [2, 3],
];

console.log(minTime(n, relations, time));
/**
 * Problem 5: All Topological Sorts of a DAG
 * ---------------------------------
 * Description:
 * Given a DAG with N nodes and edges, print all possible topological orderings.
 *
 * Input:
 * N = 4
 * edges = [[0,1],[0,2],[1,3],[2,3]]
 *
 * Output:
 * [0,1,2,3]
 * [0,2,1,3]
 *
 * Explanation:
 * Both orders are valid topological sorts of the graph.
 */
