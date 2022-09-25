# Data-structures

Datastructures demo plus mocha / chai tests

1. Stack
2. Queue
3. Linked List
4. Hash Table

## Stack

Last in last out

---

## Queue

### Usage

```js
const { Queue } = require('./lib/queue.js');
const q = new Queue();
```

### #Properties

#### > first

Default: null</br>
Info: Stores the first node in queue

#### > last

Default: null</br>
Info: Stores the first node in queue

#### > size

Type: number</br>
Default: 0</br>
Visibility: Private</br>

### #Methods

#### > size()

Type: Getter</br>
Info: Returns the length of a queue

#### > toArray(param)

@param type: Any

Type: Static</br>
Info: Converts Queue structure to an array

#### > enqueue(param)

@param type: Any

Info: Creates new node and add it to a queue

#### > dequeue()

Info: Removes first node from queue and returns its value

#### > print()

Info: Prints Queue as a table to console

#### > purge()

Info: Purge all nodes and reset queue to default settings

---

## Linked List

## Hash Table
