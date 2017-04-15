/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // getIndexBelowMax(str, this.limit) -> index
    // Do not modify anything inside of the constructor
  }
}

module.exports = HashTable;
