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

//console.log(minTime(n, relations, time));

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

const topologicalOrder = (n, edges) => {
  const graph = buildGraph(n, edges);
  const visited = new Set();
  const inDegree = new Array(n).fill(0);

  for (let [u, v] of edges) {
    inDegree[v]++;
  }

  const result = [];

  const dfs = (path) => {
    let flag = false;

    for (let i = 0; i < n; i++) {
      if (!visited.has(i) && inDegree[i] === 0) {
        visited.add(i);
        path.push(i);

        for (let neighbour of graph[i]) {
          inDegree[neighbour]--;
        }

        dfs(path);

        visited.delete(i);
        path.pop();

        for (let neighbour of graph[i]) {
          inDegree[neighbour]++;
        }

        flag = true;
      }
    }
    if (!false && path.length === n) {
      result.push([...path]);
    }
  };

  dfs([]);

  function buildGraph(n, edges) {
    const graph = {};
    for (let i = 0; i < n; i++) {
      graph[i] = [];
    }

    edges.forEach(([u, v]) => graph[u].push(v));
    return graph;
  }

  return result;
};

// console.log(
//   topologicalOrder(4, [
//     [0, 1],
//     [0, 2],
//     [1, 3],
//     [2, 3],
//   ])
// );

/** 
1. Disjoint Sets
Two sets are disjoint if they have no elements in common.
In graphs, this means the nodes are in different connected components (no path between them).

✅ Example:
{0,1} and {2,3} → Disjoint sets in the graph if there's no edge connecting them. 

2. Joint Sets
Two sets are joint if they share at least one node or there is a path between the nodes in both sets.
In graphs, it means they are in the same connected component.

✅ Example:
If 0 is connected to 1, and 1 is connected to 2, then {0,1,2} is a joint set.

 3. Union Operation
The union operation is used to merge two disjoint sets into one.
In graphs, it means connecting two nodes with an edge.

✅ Example:
union(2, 3) → Connects nodes 2 and 3, merging their sets.
he find operation tells us which set a node belongs to.
It returns the representative (root) of the set.

4. Find Operation
The find operation tells us which set a node belongs to.
It returns the representative (root) of the set.

✅ Example:
find(4) might return 1, meaning node 4 belongs to the component rooted at 1.

 5. Cycle Detection
When performing union(x, y), if x and y already belong to the same set (i.e., find(x) === find(y)),
then connecting them again would create a cycle.

6. Union by Rank
To keep the tree balanced, always attach the smaller ranked tree to the bigger one.

7. Path Compression
During find(), update the parent of every node in the path to directly point to the root.
This makes future queries faster.
**/

/**
 * PROBLEM 1: Check if Two Nodes are Connected (Joint)
 *
 * Given an undirected graph with n nodes and edges,
 * and a query (u, v), determine whether u and v are in the same connected component.
 *
 * Input:
 * n = 5
 * edges = [[0, 1], [1, 2], [3, 4]]
 * query = [0, 2]
 *
 * Output:
 * true
 */

const checkConnectedNode = (n, edges, query) => {
  const parent = [];

  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  const union = (u, v) => {
    const rootX = find(u);
    const rootY = find(v);

    if (rootX === rootY) return false; //Cycle detected;

    parent[rootX] = rootY;
    return true;
  };

  for (let [u, v] of edges) {
    union(u, v);
  }

  return find(query[0]) === find(query[1]);
};
// console.log(
//   checkConnectedNode(
//     5,
//     [
//       [0, 1],
//       [1, 2],
//       [3, 4],
//     ],
//     [0, 2]
//   )
// );

/**
 * PROBLEM 2: Count Number of Disjoint Sets
 *
 * Given a graph with n nodes and a list of edges,
 * count how many disconnected components (disjoint sets) the graph has.
 *
 * Input:
 * n = 6
 * edges = [[0, 1], [2, 3], [4, 5]]
 *
 * Output:
 * 3
 */

const disconnectedComponents = (n, edges) => {
  const parent = [];

  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }
  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  const union = (u, v) => {
    const rootX = find(u);
    const rootY = find(v);

    if (rootX === rootY) return false;

    parent[rootY] === rootX;
    return true;
  };

  let count = n;
  for (let [u, v] of edges) {
    union(u, v);
    count--;
  }

  return count;
};

// console.log(
//   disconnectedComponents(6, [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ])
// );

/**
 * PROBLEM 3: Detect Cycle in Undirected Graph
 *
 * Given n nodes and a list of edges in an undirected graph,
 * determine whether the graph contains a cycle using union-find.
 *
 * Input:
 * n = 4
 * edges = [[0, 1], [1, 2], [2, 3], [1, 3]]
 *
 * Output:
 * true
 */

const findCycleUnDirectedGraph = (n, edges) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  const dfs = (node, parent) => {
    visited.add(node);
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        if (dfs(neighbour, node)) return true;
      } else if (neighbour !== parent) return true;
    }
    return false;
  };

  function buildGraph(edges) {
    const graph = {};

    edges.forEach(([u, v]) => {
      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];

      graph[u].push(v);
      graph[v].push(u);
    });
    return graph;
  }
  for (let i = 0; i < n; i++) {
    if (!visited.has()) {
      if (dfs(i, -1)) return true;
    }
  }
  return false;
};

// console.log(
//   findCycleUnDirectedGraph(4, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [1, 3],
//   ])
// );

/**
 * PROBLEM 4: Dynamic Connectivity Queries
 *
 * You are given a sequence of union operations and connectivity queries.
 * After performing each union, answer whether two nodes are connected.
 *
 * Input:
 * n = 5
 * operations = [
 *   ["union", 0, 1],
 *   ["union", 1, 2],
 *   ["connected", 0, 2],
 *   ["connected", 3, 4]
 * ]
 *
 * Output:
 * [true, false]
 */

function dynamicConnectivity(n, operations) {
  const parent = [];
  const result = [];
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(u, v) {
    const rootX = find(u);
    const rootY = find(v);

    if (rootX === rootY) return false;

    parent[rootX] = rootY;
    return true;
  }
  for (let [type, u, v] of operations) {
    if (type === "connected") {
      result.push(find(u) === find(v));
    }
    if (type === "union") {
      union(u, v);
    }
  }
  return result;
}
const num = 5;
const operations = [
  ["union", 0, 1],
  ["union", 1, 2],
  ["connected", 0, 2],
  ["connected", 3, 4],
];
//console.log(dynamicConnectivity(num, operations));
/**
 * PROBLEM 5: Find Number of Provinces
 *
 * Given an adjacency matrix where matrix[i][j] = 1 means cities i and j are directly connected,
 * return the number of provinces (disconnected groups of cities).
 *
 * Input:
 * isConnected = [
 *   [1, 1, 0],
 *   [1, 1, 0],
 *   [0, 0, 1]
 * ]
 *
 * Output:
 * 2
 */

function numberOfProviences(operation) {
  const parent = [];
  const uniqueParents = new Set();

  for (let i = 0; i < operation.length; i++) {
    parent[i] = i;
  }

  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(u, v) {
    const rootX = find(u);
    const rootY = find(v);

    if (rootX === rootY) return false;

    parent[rootX] = rootY;
    return true;
  }

  for (let i = 0; i < operation.length; i++) {
    for (let j = i + 1; j < operation.length; j++) {
      if (operation[i][j] === 1) {
        union(i, j);
      }
    }
  }

  for (let i = 0; i < operation.length; i++) {
    uniqueParents.add(find(i));
  }

  return uniqueParents.size;
}

const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

//console.log(numberOfProviences(isConnected));

//------------------------------------Kruskal’s Algorithm----------------------------------------------

function kruskal(n, edges) {
  edges.sort((a, b) => a[2] - b[2]);

  const parent = [];
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(u, v) {
    const rootU = find(u);
    const rootV = find(v);
    if (rootU === rootV) return false;
    parent[rootU] = rootV;
    return true;
  }

  const mst = [];
  let totalWeight = 0;

  for (let [u, v, w] of edges) {
    if (union(u, v)) {
      mst.push([u, v, w]);
      totalWeight += w;
    }
  }

  return { mst, totalWeight };
}

// Example
const operation = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4],
];

//console.log(kruskal(4, operation));

//----------------------------------------Dijkstra's Algorithum-------------------------------------

function dijkstra(graph, start) {
  const n = graph.length;
  const distance = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);

  distance[start] = 0;

  for (let i = 0; i < n - 1; i++) {
    // Find the unvisited node with smallest distance
    let u = -1;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && (u === -1 || distance[j] < distance[u])) {
        u = j;
      }
    }

    // If no nodes left to process
    if (u === -1) break;

    visited[u] = true;

    // Update distances for adjacent nodes
    for (let v = 0; v < n; v++) {
      if (!visited[v] && graph[u][v] !== Infinity) {
        const newDistance = distance[u] + graph[u][v];
        if (newDistance < distance[v]) {
          distance[v] = newDistance;
        }
      }
    }
  }

  return distance;
}

// const graph = [
//   [0, 4, 2, Infinity, Infinity],
//   [Infinity, 0, 3, 2, 3],
//   [Infinity, 1, 0, 4, 5],
//   [Infinity, Infinity, Infinity, 0, Infinity],
//   [Infinity, Infinity, Infinity, 1, 0],
// ];

// console.log(dijkstra(graph, 0));

// Output: [0, 3, 2, 5, 6] (correct shortest distances from node 0)
/**Basic Dijkstra's Shortest Path
 * Problem: Find the shortest path from source to all nodes in a weighted graph
 *
 * Input:
 * @param {number} n - Number of nodes (0 to n-1)
 * @param {number[][]} edges - Array of [u, v, weight] representing directed edges
 * @param {number} src - Source node
 *
 * Output:
 * @return {number[]} - Array where dist[i] = shortest distance from src to node i
 *                     Return -1 if node is unreachable
 *
 * Example:
 * Input: n = 3, edges = [[0,1,2],[1,2,1],[0,2,4]], src = 0
 * Output: [0, 2, 3]
 */
function shortestPathPr(n, edges, src) {
  function makingGraph(edges) {
    const adjList = {};

    edges.forEach(([u, v, weight]) => {
      if (!adjList[u]) {
        adjList[u] = [];
      }
      adjList[u].push([v, weight]);

      if (!adjList[v]) {
        adjList[v] = [];
      }
      adjList[v].push([u, weight]);
    });

    return adjList;
  }

  let graph = makingGraph(edges);
  let distances = new Array(n).fill(Infinity);
  let visited = new Array(n).fill(false);

  distances[src] = 0;

  for (let i = 0; i < n - 1; i++) {
    // Find the unvisited node with the smallest distance
    let u = -1;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && (u === -1 || distances[j] < distances[u])) {
        u = j;
      }
    }

    if (u === -1) break; // No node to visit, all nodes are visited or unreachable
    visited[u] = true;

    // Update distances for all neighbors of u
    for (let [v, weight] of graph[u]) {
      if (!visited[v]) {
        const newDist = distances[u] + weight;
        if (newDist < distances[v]) {
          distances[v] = newDist;
        }
      }
    }
  }

  return distances;
}

// console.log(
//   shortestPathPr(
//     3,
//     [
//       [0, 1, 2],
//       [1, 2, 1],
//       [0, 2, 4],
//     ],
//     0
//   )
// );

/**Network delay time
 * Problem: Find how long it takes for all nodes to receive a signal from source
 *
 * Input:
 * @param {number[][]} times - [u, v, w] where w is transmission time
 * @param {number} n - Number of nodes (1 to n)
 * @param {number} k - Source node
 *
 * Output:
 * @return {number} - Maximum time for signal to reach all nodes, -1 if impossible
 *
 * Example:
 * Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
 * Output: 2
 */
var networkDelayTime = function (times, n, k) {
  function adjacencyList(edges) {
    let graph = {};
    for (let i = 1; i <= n; i++) {
      graph[i] = [];
    }
    edges.forEach(([u, v, weight]) => {
      graph[u].push([v, weight]);
    });
    return graph;
  }

  let graph = adjacencyList(times);
  let visited = new Array(n + 1).fill(false);
  let distances = new Array(n + 1).fill(Infinity);

  distances[k] = 0;

  for (let i = 0; i < n; i++) {
    let u = -1;
    for (let j = 1; j <= n; j++) {
      if (!visited[j] && (u === -1 || distances[j] < distances[u])) {
        u = j;
      }
    }

    if (u === -1) break;
    visited[u] = true;

    for (let [v, weight] of graph[u]) {
      const newDistance = distances[u] + weight;
      if (newDistance < distances[v]) {
        distances[v] = newDistance;
      }
    }
  }

  let answer = -Infinity;
  for (let i = 1; i <= n; i++) {
    if (answer < distances[i]) {
      answer = distances[i];
    }
  }
  return answer === Infinity ? -1 : answer;
};

let times = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
];
let k = 2;
let length = 4;

// console.log(networkDelayTime(times, length, k));

/** Cheapest flights with k stops
 * Problem: Find cheapest price from src to dst with at most k stops
 *
 * Input:
 * @param {number} n - Number of cities
 * @param {number[][]} flights - [from, to, price]
 * @param {number} src - Source city
 * @param {number} dst - Destination city
 * @param {number} k - Maximum allowed stops
 *
 * Output:
 * @return {number} - Cheapest price, -1 if no route exists
 *
 * Example:
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
 * Output: 200
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = buildAdjanceyList(flights);
  const queue = [[0, src, 0]];
  let visited = Array.from({ length: n }, () =>
    new Array(k + 2).fill(Infinity)
  );
  visited[src][0] = 0;

  while (queue.length > 0) {
    // Sort the queue to simulate a min-heap (priority queue)
    queue.sort((a, b) => a[0] - b[0]);
    const [cost, city, stops] = queue.shift();

    if (city === dst) return cost;
    if (stops > k) continue;

    for (const [neighbor, price] of graph[city]) {
      const newCost = cost + price;
      const newStops = stops + 1;
      if (newStops <= k + 1 && newCost < visited[neighbor][newStops]) {
        visited[neighbor][newStops] = newCost;
        queue.push([newCost, neighbor, newStops]);
      }
    }
  }
  return -1;

  function buildAdjanceyList(edges) {
    let graph = {};
    for (let i = 0; i < n; i++) graph[i] = [];
    edges.forEach(([u, v, price]) => graph[u].push([v, price]));
    return graph;
  }
};
let flights = [
  [0, 1, 100],
  [1, 2, 100],
  [0, 2, 500],
];
let number = 3;
let kk = 1;
let src = 0;
let dst = 2;
//console.log(findCheapestPrice(number, flights, src, dst, kk));

/** Path with minimum effort
 * Problem: Find path from top-left to bottom-right with minimum effort
 * (Effort = maximum absolute difference in heights along path)
 *
 * Input:
 * @param {number[][]} heights - 2D grid of heights
 *
 * Output:
 * @return {number} - Minimum effort required
 *
 * Example:
 * Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
 * Output: 2 (Path 1→3→5→3→5)
 */
var minimumEffortPath = function (heights) {
  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const m = heights.length;
  const n = heights[0].length;
  let visited = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  visited[0][0] = 0;
  const heap = [[0, 0, 0]];

  while (heap.length > 0) {
    heap.sort((a, b) => a[0] - b[0]);

    let [currentEffort, x, y] = heap.shift();

    if (x === m - 1 && y === n - 1) return currentEffort;

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
        let newEffort = Math.max(
          currentEffort,
          Math.abs(heights[nx][ny] - heights[x][y])
        );
        if (visited[nx][ny] > newEffort) {
          visited[nx][ny] = newEffort;
          heap.push([newEffort, nx, ny]);
        }
      }
    }
  }
  return -1;
};
// console.log(
//   minimumEffortPath([
//     [1, 2, 2],
//     [3, 8, 2],
//     [5, 3, 5],
//   ])
// );
/** Number of restricted paths
 * Problem: Count number of restricted paths from node 1 to n
 * (Restricted path = path where distance to n decreases at each step)
 *
 * Input:
 * @param {number} n - Number of nodes
 * @param {number[][]} edges - [u, v, weight]
 *
 * Output:
 * @return {number} - Number of restricted paths modulo 10^9+7
 *
 * Example:
 * Input: n = 5, edges = [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[3,5,1],[4,5,1]]
 * Output: 3
 */
var countRestrictedPaths = function (n, edges) {
  const MOD = 1e9 + 7;

  const graph = buildAdjanceyList(edges);
  const distances = new Array(n + 1).fill(Infinity);
  distances[n] = 0;
  const heap = [[0, n]];
  while (heap.length > 0) {
    heap.sort((a, b) => a[0] - b[0]);
    const [temp, u] = heap.shift();

    if (temp > distances[u]) continue;

    for (let [v, w] of graph[u]) {
      let newDistance = distances[u] + w;
      if (distances[v] > newDistance) {
        distances[v] = newDistance;
        heap.push([distances[v], v]);
      }
    }
  }
  const memo = new Array(n + 1).fill(-1);

  function dfs(u) {
    if (u === n) return 1;
    if (memo[u] !== -1) return memo[u];

    let total = 0;
    for (let [v] of graph[u]) {
      if (distances[v] < distances[u]) {
        total = (total + dfs(v)) % MOD;
      }
    }
    memo[u] = total;
    return total;
  }

  function buildAdjanceyList(edges) {
    let graph = {};
    for (let i = 1; i <= n; i++) {
      graph[i] = [];
    }
    edges.forEach(([u, v, w]) => {
      graph[u].push([v, w]);
      graph[v].push([u, w]);
    });
    return graph;
  }

  return dfs(1);
};
// console.log(
//   countRestrictedPaths(5, [
//     [1, 2, 3],
//     [1, 3, 3],
//     [2, 3, 1],
//     [1, 4, 2],
//     [3, 5, 1],
//     [4, 5, 1],
//   ])
// );

// -----------------------------Bellmans Ford Algorithum ---------------------------------------------
function bellmanFord(edges, V, src) {
  const dist = new Array(V).fill(Infinity);
  dist[src] = 0;

  // this part of code is change
  for (let i = 0; i < V - 1; i++) {
    for (const [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  // this part of code is change
  for (const [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      console.log("Graph contains negative weight cycle");
      return;
    }
  }

  return dist;
}
/**
 * Problem 1: Single Source Shortest Path
 *
 * Given a directed graph with V vertices and E edges, find the shortest path from a source node to all other nodes.
 * The graph contains edges with positive and negative weights. No negative weight cycles exist.
 *
 * Input:
 *   - An integer V (1 <= V <= 100) representing the number of vertices.
 *   - An integer E (1 <= E <= 1000) representing the number of edges.
 *   - An array of E triplets [u, v, w], where u is the source node, v is the destination node, and w is the edge weight.
 *   - An integer src representing the source node (0 <= src < V).
 *
 * Output:
 *   - An array of shortest distances from the source node to every other node. If a node is not reachable, return Infinity.
 *
 * Example:
 * Input:
 *   V = 4, E = 5
 *   edges = [[0, 1, 4], [0, 2, 5], [1, 2, -3], [2, 3, 4], [3, 1, -10]]
 *   src = 0
 *
 * Output:
 *   [0, 4, 2, 6]
 */

function singleSourceShortestPath(v, e, edges, src) {
  let distances = new Array(v).fill(Infinity);
  distances[src] = 0;

  // Relax all edges (v - 1) times
  for (let i = 0; i < v - 1; i++) {
    for (let [u, v, weight] of edges) {
      if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
        distances[v] = distances[u] + weight;
      }
    }
  }

  // Check for negative weight cycles
  for (let [u, v, weight] of edges) {
    if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
      return "Graph contains a negative weight cycle";
    }

    return distances;
  }
}
// console.log(
//   singleSourceShortestPath(
//     4,
//     5,
//     [
//       [0, 1, 4],
//       [0, 2, 5],
//       [1, 2, -3],
//       [2, 3, 4],
//       [3, 1, -10],
//     ],
//     0
//   )
// );

/**
 * Problem 2: Detect Negative Weight Cycle
 *
 * Given a directed graph with V vertices and E edges, find if there is a negative weight cycle in the graph.
 * A negative weight cycle is a cycle whose total sum of weights is negative.
 *
 * Input:
 *   - An integer V (1 <= V <= 100) representing the number of vertices.
 *   - An integer E (1 <= E <= 1000) representing the number of edges.
 *   - An array of E triplets [u, v, w], where u is the source node, v is the destination node, and w is the edge weight.
 *
 * Output:
 *   - Return "Yes" if there is a negative weight cycle, otherwise return "No".
 *
 * Example:
 * Input:
 *   V = 4, E = 5
 *   edges = [[0, 1, 4], [0, 2, 5], [1, 2, -3], [2, 3, 4], [3, 1, -10]]
 *
 * Output:
 *   Yes
 */

function detectNegativeCycle(V, E, edges) {
  let distances = new Array(V).fill(0);
  for (let i = 0; i < V - 1; i++) {
    for (let [u, v, w] of edges) {
      let newDistance = distances[u] + w;
      if (newDistance < distances[v]) {
        distances[v] = distances[u] + w;
      }
    }

    for (let [u, v, w] of edges) {
      if (distances[v] + w < distances[v]) {
        return "Yes";
      }
    }
  }
  return "No";
}
// console.log(
//   detectNegativeCycle(4, 5, [
//     [0, 1, 4],
//     [0, 2, 5],
//     [1, 2, -3],
//     [2, 3, 4],
//     [3, 1, -10],
//   ])
// );
/**
 * Problem 3: Longest Path in a Graph with Negative Weights
 *
 * Given a directed graph with V vertices and E edges, find the longest path from a source node to all other nodes.
 * The graph may contain negative weights but no negative weight cycles.
 *
 * Input:
 *   - An integer V (1 <= V <= 100) representing the number of vertices.
 *   - An integer E (1 <= E <= 1000) representing the number of edges.
 *   - An array of E triplets [u, v, w], where u is the source node, v is the destination node, and w is the edge weight.
 *   - An integer src representing the source node (0 <= src < V).
 *
 * Output:
 *   - An array of longest distances from the source node to every other node. If a node is not reachable, return -Infinity.
 *
 * Example:
 * Input:
 *   V = 4, E = 4
 *   edges = [[0, 1, -1], [0, 2, 3], [1, 2, 1], [2, 3, 2]]
 *   src = 0
 *
 * Output:
 *   [-Infinity, -1, 3, 5]
 */

function longestPathInNegativeGraph(V, E, edges, src) {
  let distances = new Array(V).fill(Infinity);
  distances[src] = 0;

  let invertedEdges = edges.map(([u, v, w]) => [u, v, -w]);

  for (let i = 0; i < V - 1; i++) {
    let updated = false;
    for (let [u, v, w] of invertedEdges) {
      if (distances[u] !== Infinity && distances[v] > distances[u] + w) {
        distances[v] = distances[u] + w;
        updated = true;
      }
    }
    if (!updated) break;
  }

  for (let i = 0; i < V; i++) {
    if (distances[i] === -Infinity) {
      distances[i] = -Infinity;
    } else {
      distances[i] = -distances[i];
    }
  }

  return distances;
}

// console.log(
//   longestPathInNegativeGraph(
//     4,
//     4,
//     [
//       [0, 1, -1],
//       [0, 2, 3],
//       [1, 2, 1],
//       [2, 3, 2],
//     ],
//     0
//   )
// );

/**
 * Problem 4: Shortest Path with Negative Weights and Multiple Edges
 *
 * Given a graph with V vertices and E edges, find the shortest path from a source node to all other nodes.
 * The graph may have multiple edges between two nodes, including negative weights. The graph may contain negative weight edges, but there are no negative weight cycles.
 *
 * Input:
 *   - An integer V (1 <= V <= 100) representing the number of vertices.
 *   - An integer E (1 <= E <= 1000) representing the number of edges.
 *   - An array of E triplets [u, v, w], where u is the source node, v is the destination node, and w is the edge weight.
 *   - An integer src representing the source node (0 <= src < V).
 *
 * Output:
 *   - An array of shortest distances from the source node to all other nodes.
 *
 * Example:
 * Input:
 *   V = 5, E = 6
 *   edges = [[0, 1, 4], [0, 2, 5], [1, 2, -3], [2, 3, 4], [3, 1, -10], [1, 3, 6]]
 *   src = 0
 *
 * Output:
 *   [0, 4, 2, 6, Infinity]
 */

/**
 * Problem 5: Find Shortest Path to a Specific Node
 *
 * Given a directed graph with V vertices and E edges, find the shortest path from a source node to a target node.
 * The graph may contain negative edge weights, but there are no negative weight cycles.
 *
 * Input:
 *   - An integer V (1 <= V <= 100) representing the number of vertices.
 *   - An integer E (1 <= E <= 1000) representing the number of edges.
 *   - An array of E triplets [u, v, w], where u is the source node, v is the destination node, and w is the edge weight.
 *   - An integer src representing the source node (0 <= src < V).
 *   - An integer target representing the target node (0 <= target < V).
 *
 * Output:
 *   - The shortest distance from the source node to the target node. If the target is unreachable, return -1.
 *
 * Example:
 * Input:
 *   V = 4, E = 5
 *   edges = [[0, 1, 4], [0, 2, 5], [1, 2, -3], [2, 3, 4], [3, 1, -10]]
 *   src = 0, target = 3
 *
 * Output:
 *   -13
 */

function shortestPathToSpecificNode(V, E, edges, src, target) {
  let distances = new Array(V).fill(Infinity);
  distances[src] = 0;

  for (let i = 0; i < V - 1; i++) {
    for (let [u, v, w] of edges) {
      let newDistance = distances[u] + w;
      if (distances[u] !== Infinity && distances[v] > newDistance) {
        distances[v] = newDistance;
      }
    }
  }

  console.log("Distances:", distances);
  return distances[target];
}
// console.log(
//   shortestPathToSpecificNode(
//     4,
//     5,
//     [
//       [0, 1, 4],
//       [0, 2, 5],
//       [1, 2, -3],
//       [2, 3, 4],
//       [3, 1, -10],
//     ],
//     0,
//     3
//   )
// );
