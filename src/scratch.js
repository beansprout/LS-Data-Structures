// Linked List Cleanup

//* Should have the methods: `addToTail`, `removeHead`, and `contains`.
//  * `addToTail` replaces the tail with a new valueue that is passed in.
//  * `removeHead` removes and returns the head node.
//  * `contains` should searth through the linked list and return true if a matching valueue is found.
//  * The `head` property is a reference to the first node and the `tail` property is a reference to the last node.  These are the only two properties that you need to keep track of an infinite number of nodes.  Build your nodes with objects.

class LinkedList {
  constructor() {
    this.head = null; // start
    this.tail = null; // end
    // Do not modify anything inside of the constructor
  }
/*
//addToTail(val) {
  const newNode = {
    next: null,
    value: val,
  };

  }
}
*/
  makeNode(val) {
    const node = { value: val, next: null };
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

// DELETE
  // addToHead(d) {
  //   if (this.head === null) {
  //     this.head = this.makeNode(d);
  //     this.head = this.tail;
  //   } else {
  //     const temp = this.makeNode(d);
  //     temp.next = this.head;
  //     this.head = temp;
  //     this.tail.next = this.tail;
  //   }
  // }
// DEL TO HERE

  addToTail(d) {
  // BENS
  // const newNode = {
  //   next: null,
  //   value: val,
  // };
  // if (this.tail === null) {
  //     this.head = newNode;
  //     this.tail = newNode;
  //   }
  // if this.head.next === null
    // this.head.next = newNode;
    // this.tail = newNode;
    // return;
    // }
    // this.tail.next = newNode;
    // return;
  //   }
  // }

// mine starts here
    if (this.tail === null) {
      this.tail = this.makeNode(d);
      this.tail = this.head;
    } else {
      let current = this.head;
      while (this.current !== null) {
        current = current.next;
      }
    }
    this.tail = this.makeNode(d);
  }

  removeHead() {
    const x = this.head;
    let current = this.head;
    let previous = this.head;
    while (current !== null) {
      if (current === this.head) {
        this.head = current.next;
        return;
      }
      if (this.current === this.tail) {
        this.tail = previous;
        previous.next = current.next;
        return;
      }
      previous = current;
      current = current.next;
    }
    return x;
  }

  contains(d) {
    let current = this.head;
    while (current.next) {
      if (d === current.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = LinkedList;


//Hashtable
//method insert
//  * `insert` should take a key value pair and add the value to the hash table.
//  * `retrieve` should return the value associated with a key.
//  * `remove` should removed the given key's value from the hash table.
//  * Should properly handle collisions.  If two keys map to the same index in the storage table then you should store a 2d array as the value.  Make each key/value pair its own array that is nested inside of the array stored at that index on the table.