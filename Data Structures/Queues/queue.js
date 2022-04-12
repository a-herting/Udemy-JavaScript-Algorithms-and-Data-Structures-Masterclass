// // Data Structures -- Queues
// linked list implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
//Function accepts a value and creates a new node. 
//If there is no node in the queue, set the first 
//and last to the newNode, set this.last to new node. 
//Increment queue size and return size.
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
//If there are no nodes in the queue, return null, 
//else create a temp variable to store the 1st property
//on queue. If there is only 1 node, set the last property 
//to be null. If there is more than one node, set the first
//property to be the next property on the current first. 
//Decrement size of stack, and return the removed node. 
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = temp.next;
    this.size--;
    return temp.value;
  }
}
