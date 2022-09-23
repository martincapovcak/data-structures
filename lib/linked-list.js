class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // Append Node
  append(value) {
    const newNode = new Node(value);
    // Checking tail
    if (this.tail) {
      // Tail exists
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // Tail desnt exists yet
      this.tail = newNode;
    }

    // Checking head
    if (!this.head) {
      // Head doesnt exists yet
      this.head = newNode;
    }
  }

  // Prepend Node
  prepend(value) {
    const newNode = new Node(value);
    // Check for the head
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    // Check for a tail
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  // Size
  size() {
    let current = this.head;
    let count = 0;
    while (current != null) {
      current = current.next;
      count++;
    }
    return count;
  }

  // Return Linkded list Array
  toArray() {
    let bucket = [];
    let current = this.head;
    while (current != null) {
      bucket.push(current);
      current = current.next;
    }

    return bucket;
  }

  print() {
    console.table(this.toArray());
  }

  // Get index of Node value
  indexOf(value) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.val == value) return index;
      current = current.next;
      index++;
    }
    return null;
  }

  // Get value from Node index
  elementAt(index) {
    let current = this.head;
    let count = 0;
    while (current != null) {
      if (count == index) return current.val;
      current = current.next;
      count++;
    }
    return null;
  }

  // Insert
  addAt(index, value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let count = 0;
    let current = this.head;
    let previousNode;
    while (current != null) {
      if (count == index) {
        previousNode.next = newNode;
        newNode.next = current;
        return;
      }
      if (current.next == null && count + 1 == index) {
        current.next = newNode;
        this.tail = newNode;
        return;
      }
      previousNode = current;
      current = current.next;
      count++;
    }
    return null;
  }

  // Delete Node
  removeAt(index) {
    if (!this.head) return null;
    let current = this.head;
    let previousNode;
    let count = 0;
    while (current != null) {
      if (index == 0) {
        // Delete the first node
        this.head = current.next;
        return;
      }
      if (count == index) {
        // Delete node on matched index
        previousNode.next = current.next;
        if (current.next == null) {
          // Re-aarange the tail if deleted node has the last index
          this.tail = previousNode;
        }
        return;
      }
      previousNode = current;
      current = current.next;
      count++;
    }
    return null;
  }

  // Pop
  pop() {
    if (this.head == null) return null;
    let current = this.head;
    let previousNode;
    while (current != null) {
      if (current.next == null) {
        previousNode.next = null;
        this.tail = previousNode;
        break;
      }
      previousNode = current;
      current = current.next;
    }
    return current;
  }

  // Delete all matched values
  delete(value) {
    if (!this.head) return null;
    let current = this.head;
    let previousNode;
    while (current != null) {
      // Delete node on matched value
      if (current.val == value) {
        // check for duplication sequence here
        if (current.next != null && current.next.val == value) {
          let count = 0;
          let nextNode = current.next;
          let afterMatchNode;
          let match = true;

          // Sequence matching
          while (match) {
            if (!nextNode) {
              match = false;
              continue;
            }
            if (nextNode.val != value) {
              match = false;
              continue;
            }
            afterMatchNode = nextNode;
            nextNode = nextNode.next;
            count++;
          }
          //console.log('--> GOT SEQUENCE MATCH ', count);

          // delete sequence match
          if (previousNode) {
            previousNode.next = nextNode;
          }
          // update current node after matching sequence loop
          current = afterMatchNode;
        }
        //console.log('--> GOT MATCH');

        // Check for a head node
        if (!previousNode) {
          //console.log('--> GOT HEAD');
          this.head = current.next;
        } else {
          previousNode.next = current.next;
        }
        // Re-aarange the tail if deleted node has the last value
        if (current.next == null) {
          //console.log('--> GOT TAIL');
          this.tail = previousNode;
        }

        if (!previousNode && current.next == null) {
          this.tail = current.next;
        }
      }
      previousNode = current;
      current = current.next;
    }
    return null;
  }

  // Reverse Linked list
  reverse() {
    if (!this.head) return null;

    let current = this.head;
    let previousNode = null;
    while (current != null) {
      const nextNode = current.next;
      current.next = previousNode;
      previousNode = current;
      current = nextNode;
    }
    this.head = previousNode;

    current = this.head;
    while (current != null) {
      if (current.next == null) {
        this.tail = current;
        break;
      }
      current = current.next;
    }
  }
}

module.exports = { LinkedList, Node };
