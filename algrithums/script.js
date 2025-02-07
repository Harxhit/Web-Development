//Sorting Algorithms
/** Bubble Sort**/
let arr = [5, 2, 9, 1, 5, 6];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
// console.log(arr);


/** Selction Sort**/
let arr = [64, 25, 12, 22, 11];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  let temp = arr[minIndex];
  arr[minIndex] = arr[i];
  arr[i] = temp;
}

// console.log(arr);

/** Insertion Sort **/
let arr = [12, 11, 13, 5, 6];
let n = arr.length;

for (let i = 1; i < n; i++) {
  let key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j = j - 1;
  }
  arr[j + 1] = key;
}

// console.log(arr);

/** Merge Sort**/

let merge = (arr, l, m, r) => {
  let left = [],
    right = [];
  for (let i = l; i <= m; i++) left.push(arr[i]);
  for (let i = m + 1; i <= r; i++) right.push(arr[i]);

  let i = 0,
    j = 0,
    k = l;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];
};

let mergeSort = (arr, l, r) => {
  if (l >= r) return;
  let m = Math.floor((l + r) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
};

let arr = [12, 11, 13, 5, 6, 7];
mergeSort(arr, 0, arr.length - 1);
// console.log(arr);

/**Quick Sort **/
let partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
};

let quickSort = (arr, low, high) => {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
};

let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

/** Heap Sort**/
let heapify = (arr, n, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr, n, largest);
  }
};

let heapSort = (arr) => {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
  for (let i = n - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
  }
};

let arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log(arr);

//Graph Algorithum
/** Breadth-First Search (BFS)**/
let graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F", "G"],
  D: ["B"],
  E: ["B", "H"],
  F: ["C"],
  G: ["C"],
  H: ["E"],
};

let bfs = (start) => {
  let queue = [start];
  let visited = new Set();
  visited.add(start);

  while (queue.length) {
    let node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
};

bfs("A");

/** Depth-First Search (DFS)**/
let graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F", "G"],
  D: ["B"],
  E: ["B", "H"],
  F: ["C"],
  G: ["C"],
  H: ["E"],
};

let visited = new Set();

let dfs = (node) => {
  if (visited.has(node)) return;
  console.log(node);
  visited.add(node);

  for (let neighbor of graph[node]) {
    dfs(neighbor);
  }
};

dfs("A");

/**Dijkstra’s Algorithm (Shortest Path in Weighted Graph) **/
let dijkstra = (graph, start) => {
  let distances = {};
  let visited = new Set();
  let priorityQueue = [[start, 0]];

  for (let node in graph) distances[node] = Infinity;
  distances[start] = 0;

  while (priorityQueue.length) {
    priorityQueue.sort((a, b) => a[1] - b[1]);
    let [current, currentDist] = priorityQueue.shift();

    if (visited.has(current)) continue;
    visited.add(current);

    for (let neighbor in graph[current]) {
      let newDist = currentDist + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        priorityQueue.push([neighbor, newDist]);
      }
    }
  }

  return distances;
};

let graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

console.log(dijkstra(graph, "A"));

/** Bellman-Ford Algorithm**/
let bellmanFord = (edges, vertices, start) => {
  let distances = {};
  for (let vertex of vertices) distances[vertex] = Infinity;
  distances[start] = 0;

  for (let i = 0; i < vertices.length - 1; i++) {
    for (let [u, v, weight] of edges) {
      if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
        distances[v] = distances[u] + weight;
      }
    }
  }

  for (let [u, v, weight] of edges) {
    if (distances[u] + weight < distances[v]) {
      console.log("Graph contains a negative weight cycle!");
      return;
    }
  }

  return distances;
};

let edges = [
  ["A", "B", 4],
  ["A", "C", 2],
  ["B", "D", 10],
  ["C", "B", 5],
  ["C", "D", 3],
];

console.log(bellmanFord(edges, ["A", "B", "C", "D"], "A"));

/**Floyd-Warshall Algorithm (All-Pairs Shortest Path) **/
let floydWarshall = (graph) => {
  let dist = JSON.parse(JSON.stringify(graph));
  let nodes = Object.keys(graph);

  for (let k of nodes) {
    for (let i of nodes) {
      for (let j of nodes) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
};

let graph = {
  A: { A: 0, B: 4, C: Infinity, D: Infinity },
  B: { A: Infinity, B: 0, C: 5, D: 10 },
  C: { A: Infinity, B: Infinity, C: 0, D: 3 },
  D: { A: Infinity, B: Infinity, C: Infinity, D: 0 },
};

console.log(floydWarshall(graph));

/** Kruskal’s Algorithm (Minimum Spanning Tree - MST)**/
let kruskal = (edges, vertices) => {
  let parent = {};
  let rank = {};

  let find = (node) => {
    if (parent[node] !== node) parent[node] = find(parent[node]);
    return parent[node];
  };

  let union = (u, v) => {
    let rootU = find(u);
    let rootV = find(v);
    if (rootU !== rootV) {
      if (rank[rootU] > rank[rootV]) parent[rootV] = rootU;
      else if (rank[rootU] < rank[rootV]) parent[rootU] = rootV;
      else {
        parent[rootV] = rootU;
        rank[rootU]++;
      }
    }
  };

  for (let vertex of vertices) {
    parent[vertex] = vertex;
    rank[vertex] = 0;
  }

  edges.sort((a, b) => a[2] - b[2]);

  let mst = [];
  for (let [u, v, weight] of edges) {
    if (find(u) !== find(v)) {
      mst.push([u, v, weight]);
      union(u, v);
    }
  }

  return mst;
};

let edges = [
  ["A", "B", 1],
  ["B", "C", 3],
  ["A", "C", 2],
  ["C", "D", 4],
  ["B", "D", 5],
];
console.log(kruskal(edges, ["A", "B", "C", "D"]));

/** Prim’s Algorithm (Minimum Spanning Tree - MST)**/
let prim = (graph) => {
  let nodes = Object.keys(graph);
  let selected = new Set();
  selected.add(nodes[0]);

  let mst = [];

  while (selected.size < nodes.length) {
    let minEdge = null;
    for (let node of selected) {
      for (let neighbor in graph[node]) {
        if (!selected.has(neighbor)) {
          if (!minEdge || graph[node][neighbor] < minEdge[2]) {
            minEdge = [node, neighbor, graph[node][neighbor]];
          }
        }
      }
    }
    if (minEdge) {
      selected.add(minEdge[1]);
      mst.push(minEdge);
    }
  }

  return mst;
};

let graph = {
  A: { B: 1, C: 2 },
  B: { A: 1, C: 3, D: 5 },
  C: { A: 2, B: 3, D: 4 },
  D: { B: 5, C: 4 },
};

console.log(prim(graph));

// Dynamic Programming (DP) Algorithms

/** Fibonacci (Memoization)**/
let fib = (n, memo = {}) => {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(10));

/**  0/1 Knapsack Problem**/
let knapsack = (weights, values, capacity) => {
  let n = weights.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
};

console.log(knapsack([2, 3, 4, 5], [3, 4, 5, 6], 5));

//Greedy Algorithm

/**Activity Selection Problem **/

let activitySelection = (activities) => {
  activities.sort((a, b) => a[1] - b[1]); // Sort by finishing time
  let selected = [activities[0]];
  let lastEndTime = activities[0][1];

  for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= lastEndTime) {
      selected.push(activities[i]);
      lastEndTime = activities[i][1];
    }
  }

  return selected;
};

let activities = [
  [1, 3],
  [2, 5],
  [3, 9],
  [6, 8],
];
console.log(activitySelection(activities));

/** Fractional Knapsack Problem**/

let fractionalKnapsack = (items, capacity) => {
  items.sort((a, b) => b[1] / b[0] - a[1] / a[0]); // Sort by value/weight ratio
  let totalValue = 0;

  for (let [weight, value] of items) {
    if (capacity >= weight) {
      totalValue += value;
      capacity -= weight;
    } else {
      totalValue += (value / weight) * capacity;
      break;
    }
  }

  return totalValue;
};

let items = [
  [10, 60],
  [20, 100],
  [30, 120],
]; // [weight, value]
console.log(fractionalKnapsack(items, 50));

/**Huffman Coding (Data Compression) **/
class Node {
  constructor(char, freq) {
    this.char = char;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

let huffmanCoding = (freqMap) => {
  let nodes = Object.entries(freqMap).map(
    ([char, freq]) => new Node(char, freq)
  );

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    let left = nodes.shift();
    let right = nodes.shift();
    let newNode = new Node(null, left.freq + right.freq);
    newNode.left = left;
    newNode.right = right;
    nodes.push(newNode);
  }

  return nodes[0]; // Root of Huffman Tree
};

let freqMap = { A: 5, B: 9, C: 12, D: 13, E: 16, F: 45 };
console.log(huffmanCoding(freqMap));

/**Job Scheduling with Deadlines **/
let jobScheduling = (jobs) => {
  jobs.sort((a, b) => b[1] - a[1]); // Sort by profit descending
  let maxDeadline = Math.max(...jobs.map((job) => job[2]));
  let slots = Array(maxDeadline).fill(null);
  let totalProfit = 0;

  for (let [id, profit, deadline] of jobs) {
    for (let j = Math.min(maxDeadline, deadline) - 1; j >= 0; j--) {
      if (!slots[j]) {
        slots[j] = id;
        totalProfit += profit;
        break;
      }
    }
  }

  return { schedule: slots, totalProfit };
};

let jobs = [
  ["J1", 100, 2],
  ["J2", 50, 1],
  ["J3", 200, 2],
  ["J4", 20, 1],
];
console.log(jobScheduling(jobs));

/** Minimum Coins for Change**/
let minCoins = (coins, amount) => {
  coins.sort((a, b) => b - a); // Sort descending
  let count = 0;

  for (let coin of coins) {
    if (amount === 0) break;
    let use = Math.floor(amount / coin);
    count += use;
    amount -= use * coin;
  }

  return amount === 0 ? count : -1; // Return -1 if exact change isn't possible
};

console.log(minCoins([1, 5, 10, 25, 50], 67));

/**Prim’s Algorithm (Minimum Spanning Tree - MST) **/
let prim = (graph) => {
  let nodes = Object.keys(graph);
  let selected = new Set();
  selected.add(nodes[0]);
  let mst = [];

  while (selected.size < nodes.length) {
    let minEdge = null;

    for (let node of selected) {
      for (let neighbor in graph[node]) {
        if (!selected.has(neighbor)) {
          if (!minEdge || graph[node][neighbor] < minEdge[2]) {
            minEdge = [node, neighbor, graph[node][neighbor]];
          }
        }
      }
    }

    if (minEdge) {
      selected.add(minEdge[1]);
      mst.push(minEdge);
    }
  }

  return mst;
};

let graph = {
  A: { B: 1, C: 2 },
  B: { A: 1, C: 3, D: 5 },
  C: { A: 2, B: 3, D: 4 },
  D: { B: 5, C: 4 },
};

console.log(prim(graph));

/** Kruskal’s Algorithm (Minimum Spanning Tree - MST)**/
let kruskal = (edges, vertices) => {
  let parent = {};
  let rank = {};

  let find = (node) => {
    if (parent[node] !== node) parent[node] = find(parent[node]);
    return parent[node];
  };

  let union = (u, v) => {
    let rootU = find(u);
    let rootV = find(v);
    if (rootU !== rootV) {
      if (rank[rootU] > rank[rootV]) parent[rootV] = rootU;
      else if (rank[rootU] < rank[rootV]) parent[rootU] = rootV;
      else {
        parent[rootV] = rootU;
        rank[rootU]++;
      }
    }
  };

  for (let vertex of vertices) {
    parent[vertex] = vertex;
    rank[vertex] = 0;
  }

  edges.sort((a, b) => a[2] - b[2]);

  let mst = [];
  for (let [u, v, weight] of edges) {
    if (find(u) !== find(v)) {
      mst.push([u, v, weight]);
      union(u, v);
    }
  }

  return mst;
};

let edges = [
  ["A", "B", 1],
  ["B", "C", 3],
  ["A", "C", 2],
  ["C", "D", 4],
  ["B", "D", 5],
];
console.log(kruskal(edges, ["A", "B", "C", "D"]));

/** **/


