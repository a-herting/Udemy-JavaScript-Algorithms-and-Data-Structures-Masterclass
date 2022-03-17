// // Data Structures -- Binary Search Trees

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  // Breadth First Search Pseudocode
  // Create a queue and an array(data)  to store the values of nodes visited
  // Place the root node in the queue
  // Loop while there is anything in the queue
  // Dequeue a node from the queue and push the value of the node into   /// the variable that stores the node
  // If there is a left property on node recently pushed, add it to queued
  // If there is a right property on node recently pushed, add it to queued
  // Return the variable that stores the values
  bfs() {
    let queue = [];
    let data = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // DFS - Preorder Pseudocode - Steps Recursively
  // Create a variable to store the values of nodes visited
  // Store the root of the BST in a variable called current
  // Write a helper function which accepts a node
  // Push the value of the node to the variable that stores the values
  // If the node has a left property, call the helper function with the //// left property on the node
  // If the node has a right property, call the helper function with the //// right property on the node

  dfsPreOrder() {
    let current = this.root;
    let data = [];
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  // DFS -PostOrder Pseudocode - Steps Recursively
  // Create a variable to store the values of nodes visited
  // Store the root of the BST in a variable called current
  // Write a helper function which accepts a node

  // If the node has a left property, call the helper function with the //// left property on the node
  // If the node has a right property, call the helper function with the //// right property on the node

  // Push the value of the node to the variable that stores the values

  // DFS Post Order
  dfsPostOrder() {
    let current = this.root;
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }
    traverse(current);
    return data;
  }

  // DFS In Order
  dfsInOrder() {
    let current = this.root;
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}
