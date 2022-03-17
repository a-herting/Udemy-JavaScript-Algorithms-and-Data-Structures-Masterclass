// // Data Structures -- Stacks
// linked list implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //Push pseudocode
  // create a new node
  // If there is no node in the stack, set the first and last to the newNode
  // else create a temp variable and set it equal to this.first then set
  // this.first to newNode, then set newNode.next to be the temp variable
  // then return size of stack
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    return ++this.size;
  }

  // Pop pseudocode
  // If there are no nodes in the stack, return null
  // Else create a temp variable to store the 1st property on stack
  // If there is only 1 node, set the first and last property to be null
  // If there is more than one node, set the first property to be the next property on the current first

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = this.first;
    }
    this.first = temp.next;
    this.size--;
    return temp.value;
  }
}
