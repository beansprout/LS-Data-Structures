class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(val) {
    return this.storage.shift(val);
  }

  dequeue() {

    this.storage.unshift();
  }

  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;
