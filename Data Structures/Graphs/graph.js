// // Data Structures -- Graphs

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
//Accepts a vertex. If vertex's location in list doesn't exists, 
//then it adds an empty array to that location.
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  //Accepts a v1 and v2. If v1 location in list exists, then 
  //push v2 into v1. If v2 location in list exists, then push v1 into v2.
  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1].push(v2);
    }

    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2].push(v1);
    }
  }
//Accepts vertex 1 and 2. The edge is removed by setting the 
//adjacency list of vertex1 equal to the filtered result of 
//the list without vertex2. The same is done for vertex 2. 
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
//Accepts vertex. A while loop loops as long as there is anything in the 
//vertex array ad uses the pop method to remove the vertex from the array 
//and calls the removeEdge method to remove the presence of this vertex in other arrays.
  removeVertex(vertex) {
    let i = 0;

    while (this.adjacencyList[vertex].length) {
      console.log(this.adjacencyList[vertex].length);
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // DFS Pseudocode Recursive
  // if vertex is empty
  //      return (this is base case)
  // add vertex to results list
  // mark vertex as visited
  // for each neighbor in vertex's neighbors:
  //  if neighbor is not visited:
  // recursively call DFS on neighbor.

  depthFirstRecursive(start) {
    let results = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    dfs(start);
    return results;
  }

  // DFS Pseudocode Iterative
  // Let S be a stack
  // S.push(start)
  // while S is not empty
  // vertex = S.pop()
  // if vertex is not labeled as discovered:
  // visit vertex(add to result list)
  // label vertex as discovered
  // for each of vertex's neighbors, N do S.push(N)
  depthFirstIterative(start) {
    let S = [start];
    let results = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    let currentVertex;

    visited[start] = true;
    while (S.length) {
      currentVertex = S.pop();
      results.push(currentVertex);

      adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          S.push(neighbor);
        }
      });
    }
    return results;
  }

  // Breadth First Pseudocode
  // Function should accept a starting vertex
  // Create a queue (you can use an array) and place the starting vertex in it
  // Create an results array to store the nodes visited
  // Create an object to store visited nodes
  // Mark the starting vertex as visited
  // Loop as long as there is anything in the queue
  breadthFirst(start) {
    let queue = [start];
    let visited = {};
    let results = [];
    let currentVertex;
    let adjacencyList = this.adjacencyList;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      results.push(currentVertex);

      adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return results;
  }
}
