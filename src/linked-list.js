class LinkedList {
  constructor() {
    this.head = null; // start
    this.tail = null; // end
    // Do not modify anything inside of the constructor
  }

  addToTail(val) {
  // make a new node that will become the template node
    const node = {
      value: val,
      next: null,
    };
  // CASE 1: EMPTY LIST
  // if list has no tail (i.e. empty)...
    if (this.tail === null) {
  // then make a node with one kv pair in it using the node
  // variable you just made available above
  // that one pair is both head and tail
  // list = 1 item object {value}, item = {hd}, item = {tl}
      this.head = node;
      this.tail = this.head;
  // then stop
      return;
    }
  // CASE 2: ONE ITEM LIST
  // if the list has one item in it
  // i.e. hd.next doesn't exist because only have one kv pr
  // in a one kv pair list the one object has a next of null
    if (this.head.next === null) {
  // then make a new node where the next of node1 = a new node
  // i.e. list = {val:val, next: {val:val, next: null}}
      this.head.next = node;
    // and that new node is also the tail
      this.tail = this.head.next;
      return;
    }
  // CASE 3: MORE THAN 2 ITEMS IN LIST IS THE LAST POSSIBILITY
    // make a new node at tail.next (where formerly was null)
    // tail = {val:val, next: null}
    // traverse the linked list from the head...
    let current = this.head;
    // ex. {val:1, next: {val:2, next: {val:3, next: }}}
    // 1. current=  {val:val, next:}}
    // 2. current.next =  {val:1, next: =>>{val:val, next:{}}
    // 3. current.next.next = null so stop there and add a node at tail.next
    while (current.next) {
      current = current.next;
    }
    this.tail = current;
    current.next = node;
    this.tail = current.next;
    return;
  }

  removeHead() {
    const result = this.head.value;
    if (this.head.next) {
      this.head = this.head.next;
      // let current = this.head.next; // current = 2
       // hd removed
      // this.current = this.head; // 2 = new head
      // while (current.next) { // while there is a next
      //   current = current.next; // current is now hd.next
      //   // stops when at tail where next is null
    //   }
    // }
    // // then returns the value of the removed item
    } else {
      this.LinkedList = null;
    }
    return result;
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
