////   Singly Linked Lists////////////////////////////////////////////
// piece of data
// reference to the next node -next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Popping function - To remove node from the end, we must assign a new tail
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Shifting pseudocode
  // If there are no nodes, return undefined
  // Store the current head property in a variables

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  // Unshifting pseudocode
  // This function should accept a value
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be /// the newly created node.
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Get Pseudocode
  // This function should accept an index
  // If the index is less than zero or greater than or equal to the length of the list, return null
  // Loop through the list until you reach the index and return the node at that specific index
  get(index) {
    let current = this.head;
    let counter = 0;
    if (index < 0 || index >= this.length) return null;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Set pseudocode
  // This function should accept a value and an index
  // Use your get function to find the specific node
  // If the node is not found, return false
  // If the  node is found, set the value of that node to be the value passed to the function // and return true;
  set(val, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Insert Pseudocode
  // If the index is less than zero or greater than the length, return false
  // If index is same length, push a new node to the end of the list
  // If the index is 0, unshift a new node to the start of the list
  // Create new node
  // Find the item at the index-1 via get method, pass in the index minus 1
  //
  // Set the next property on current node to be the new node, and set next property of new node to be the old next node.

  // increment length and return true
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // Remove Pseudocode
  // If the index is less than zero or greater than the length, return undefined
  // If the index is the same as the length-1,pop
  // If the index is 0, shift
  // Otherwise, using the get method, access the node at the index-1
  // Set the property on that node to be the next of the next node
  // decrement length
  // return the value of the node removed
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  // Reverse Pseudocode
  // Swap the head and tail
  // Create a variable called next
  // Create a variable called prev
  // Create a variable called node and initialize it to the head property
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      console.log(this);
      prev = node;
      node = next;
    }
    return this;
  }
}