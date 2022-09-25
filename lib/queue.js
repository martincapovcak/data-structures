class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  #size = 0;
  constructor() {
    this.first = null;
    this.last = null;
  }

  get size() {
    return this.#size;
  }

  static toArray(head) {
    let bucket = [];
    let current = head;
    while (current != null) {
      bucket.push(current);
      current = current.next;
    }

    return bucket;
  }

  // Enqueue
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.#size++;
    return true;
  }

  // Dequeue
  dequeue() {
    if (!this.first) return null;
    const element = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.#size--;
    return element;
  }

  // Print
  print() {
    if (!this.first) {
      console.table('Queue is empty');
      return;
    }
    console.table(Queue.toArray(this.first));
  }

  // Purge
  purge() {
    if (!this.first) return null;
    this.first = null;
    this.last = null;
    return true;
  }
}

module.exports = Queue;
