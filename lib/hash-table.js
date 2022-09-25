class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  static hash(key, scope) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % scope;
  }

  set(key, value) {
    const hash = HashTable.hash(key, this.table.length);
    if (this.table[hash]) {
      for (let i = 0; i < this.table[hash].length; i++) {
        // Check if key exists if yes update the value
        if (this.table[hash][i][0] === key) {
          this.table[hash][i][1] = value;
          return;
        }
      }
      // Not found, create a new key / value pair
      this.table[hash].push([key, value]);
    } else {
      this.table[hash] = [];
      this.table[hash].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const hash = HashTable.hash(key, this.table.length);
    if (this.table[hash]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[hash][i][0] === key) {
          return this.table[hash][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const hash = HashTable.hash(key, this.table.length);
    if (this.table[hash] && this.table[hash].length) {
      for (let i = 0; i < this.table[hash].length; i++) {
        if (this.table[hash][i][0] === key) {
          this.table[hash].splice(i, 1);
          this.size--;
        }
      }
      // check if the hash has not entry
      if (this.table[hash].length == 0) {
        delete this.table[hash];
      }
      return true;
    } else {
      return false;
    }
  }

  print() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(([key, value]) => `[${key}: ${value}]`);
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

module.exports = HashTable;
