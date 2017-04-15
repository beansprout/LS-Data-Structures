class Stack {
  constructor() {
    this.pile = [];
  }

  add(val) {
    return this.pile.push(val);
  }
  remove() {
    return this.pile.pop();
  }
  get size() {
    return this.pile.length;
  }
}

/*
LIFO last in first out - that's a stack'
*/
module.exports = Stack;
