class Stack {
  #items;
  constructor() {
    this.#items = [];
  }

  // Add element to the stack
  push(element) {
    this.#items.push(element);
  }

  // Get last element from the stack
  pop() {
    if (this.#items.length == 0) return null;
    return this.#items.pop();
  }

  // Check for the last element in the stack
  peek() {
    if (this.#items.length == 0) return null;
    return this.#items[this.#items.length - 1];
  }

  // Get stack size
  size() {
    return this.#items.length;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.#items.length == 0 ? true : false;
  }

  // Prints the stack content
  print() {
    if (this.#items.length == 0) return null;
    let bucket = [];
    for (let item of this.#items) {
      bucket.push(item);
    }
    console.table(bucket);
  }

  // Clean up stack
  purge() {
    this.#items = [];
  }
}

module.exports = { Stack };
