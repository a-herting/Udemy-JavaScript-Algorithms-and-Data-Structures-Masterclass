# JavaScript-Algorithms-and-Data-Structures-Masterclass

[Udemy: JavaScript Algorithms and Data Structures Masterclass] (https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

Contains the work I did while taking the JavaScript Algorithms and Data Structures Masterclass. The course went over the following topics: 

**Beginner Sorting Algorithms:**
 - **Bubble Sort**: 
	 - Start looping with a variable called i set to arr.length and loop from end of the array towards the beginning.
	 - Start an inner loop with a variable called j from the beginning until i-1
		 - If arr[j] is greater than arr[j+1], swap those two values!
	 - Return the sorted array
 - **Insertion Sort**:
	 - Our sorted portion will be the first element.
	 - Start by picking the second element in the array
	 - Now compare the second element with the one before it and swap if necessary.
	 - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion ( the left side) to place the element in the correct place.
 - **Selection Sort**:
	 - Initially, store the first element as the smallest value you've seen so far.
	 - Compare this item to the next item in the array until you find a smaller number.
	 - If a smaller number is found, designate that smaller number to be the new smallest number and continue until the end of the array.
	 - If the smallest number is not the value you initially began with, swap the 2 values.
	 -  Repeat this with the next element until the array is sorted. 

 
**Data Structures:**

 - **Binary Heap**:
	 - **Min Binary Heap:** Uses bubble up function to cause values with a smaller value to be towards the top of the structure, while the sink down function moves larger values away from the root. 
	 
 - **Singly Linked List**:
	 - Linked list that is unidirectional. Contains a head and a tail.
		 - **push**( ): If no head exists, then set new node to be the head else set the tail.next to equal the new node.
		 
		 - **pop**( ): Removes node from the end, by assigning a new tail.
		 
		 - **shift**( ): If there are no nodes, return undefined. Store the current head property in a variable, and set this.head to equal the node after the current head. 
		 
		 - **unshift**( ): This function should accept a value. Create a new node using the value passed to the function.  If there is no head property on the list, set the head and tail to be the newly created node, else set the new node.next to be equal to current head in order to add the new node to the beginning of the list.
		 - **get**( ): This function should accept an index. If the index is less than zero or greater than or equal to the length of the list, return null. Loop through the list until you reach the index and return the node at that specific index. 
		 - **set**( ): This function should accept a value and an index. Use your get function to find the specific node. If the node is not found, return false. If the node is found, set the value of that node to be the value passed to the function and return true;
		 - **insert**( ): This function should accept an index. If the index is less than zero or greater than the length, return false. If index is the same as list length, push a new node to the end of the list. If the index is 0, unshift a new node to the start of the list.  Create new node. Find the item at the index-1 via get method, pass in the index minus 1. Set the next property on current node to be the new node, and set next property of new node to be the old next node. Increment length and return true
		 - **remove**( ): This function should accept an index. If the index is less than zero or greater than the list length, return undefined. If the index is the same as the length-1, then use pop method to remove node.  If the index is 0, use the shift method to remove from the beginning of the list, otherwise, using the get method, access the node at the index-1. Set the property on that node to be the next of the  node requested to be removed. Decrement  list length. Return the value of the node removed
		 - **print**( ): Prints all nodes. 
		 - **reverse**( ): Create a variable called node and initialize it to the head property. Swap the head and tail by setting this.head to equal this.tail and set this.tail to equal node. Create a prev variable and set it to null. Create a next variable. Using a for loop, set i=0, and run the following loop as long as i is less than structure length. Inside this for loop, set next variable to be node.next, node.next to be prev, prev to node, and node to next. Return the this (list). 

 - **Doubly Linked List**:
	 - Linked list that is bidirectional. Contains a head, tail, and previous nodes.
		 - **push**( ): Function accepts a value and creates a new node. If no head exists, then set new node to be the head else set the tail.next to equal the new node. Set the previous property on the new node to be the tail. Update the tail property to be the new node. Increment length and return entire list.
		 - **pop**( ): If there is no head, return undefined. Store the current tail in a variable called poppedNode to return later. If the length is 1, set the head and tail to be null, else update the tail to equal poppedNode.prev. Then set the next property on the tail to be null and set the poppedNode.prev property to null. 
		 - **shift**( ): If there are no nodes, return undefined. Store the current head in a variable to return later. If the list length is 1, set the head and tail to be null, else update the head to be equal to the next of the old head. Set the head's previous to null. Set old head's next property to null. Decrement length and return the removed node.
		 - **unshift**( ): If there is no head, set new node to be head and tail, else this.head.prev to be the new node. Then set new node.next to current head and set this.head to new node. Increment list length and return list.
		 - **get**( ): This function should accept an index. If the index is less than zero or greater than or equal to the length of the list, return null. Loop through the list until you reach the index and return the node at that specific index. 
		 - **set**( ): This function should accept a value and an index. Use your get function to find the specific node. If the node is not found, return false. If the node is found, set the value of that node to be the value passed to the function and return true;
		 - **insert**( ): This function should accept an index. If the index is less than zero or greater than the length, return false. If index is the same as list length, push a new node to the end of the list. If the index is 0, unshift a new node to the start of the list.  Create new node. Find the item at the index-1 via get method, pass in the index minus 1. Set the next property on current node to be the new node, and set next property of new node to be the old next node. Increment length and return true
		 - **remove**( ): This function should accept an index. If the index is less than zero or greater than the list length, return undefined. If the index is the same as the length-1, then use pop method to remove node.  If the index is 0, use the shift method to remove from the beginning of the list, otherwise, using the get method, access the node at the index-1. Set the property on that node to be the next of the  node requested to be removed. Decrement  list length. Return the value of the node removed
