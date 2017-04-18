class Stack {
  constructor() {
    this.storage = [];
  }

  add(val) {
    return this.storage.push(val);
  }
  remove() {
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}

/*
LIFO last in first out - that's a stack'
*/
module.exports = Stack;
