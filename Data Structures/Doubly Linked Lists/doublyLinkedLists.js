// Doubly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push: adding a node to the end of the DL list
  // If the head is null, set the head and tail to be the new node
  // If not, set next property on the tail to the new node
  // Set the previous property on the new node to be the tail.
  // Update the tail property to be the new node
  // Increment length and return entire list.
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Popping pseudocode
  // If there is no head, return undefined
  // Store the current tail in a variable to return later
  // If the length is 1, set the head and tail to be null
  // Update the tail to be the previous nodes
  // Set the newTail's next to null

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // Shift Pseudocode
  // If there is no head, return undefined
  // Store the current head in a variable to return later
  // If the length is 1, set the head and tail to be null
  // Update the head to be the next of the old head
  // Set the head's previous to null
  // Set old head's next property to null
  shift() {
    if (!this.head) return undefined;
    let shiftededNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftededNode.next;
      this.head.prev = null;
      shiftededNode.next = null;
    }
    this.length--;
    return shiftededNode;
  }
  //Unshifting pseudocode
  //if there is no head, set new node to be head and tail
  // else point new node next to current head
  // and set current head prev to new node
  // and set head to new nodes
  unshift(val) {
    let newNode = new Node(val);
    if (val === 0) return undefined;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Get Pseudocode
  // function that receives the index
  // If index is less than 0 or greater than length, return null
  // If the index is less than or equal to half the length of list
  // loop through the list starting from the head and loop towards the middle
  // return the node once it is found

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let distance = Math.floor(this.length / 2);
    let count = 0;
    let current = this.head;

    if (index <= distance) {
      while (index !== count) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (index !== count) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // Set Pseudocode
  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // Insert Pseudocode
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  // Remove Pseudocode
  // If the index is less than zero or greater than or equal to length return undefined
  // if index === 0 use shift function
  //
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let removeNode = this.get(index);
    let nodeBefore = removeNode.prev;
    let nodeAfter = removeNode.next;

    nodeBefore.next = nodeAfter;
    nodeAfter.prev = nodeBefore;
    removeNode.prev = null;
    removeNode.next = null;

    this.length--;
    return removeNode;
  }
}