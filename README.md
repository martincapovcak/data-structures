# Data-structures

Datastructures demo plus mocha / chai tests

1. Stack
2. Queue
3. Linked List
4. Hash Table

---

## Stack

_Last in first out_

### Test

```sh

```

### Usage

```js
const { Stack } = require('./lib/stack.js');
const stack = new Stack();
```

### #Properties

#### > items

### #Methods

#### > push(param)

#### > pop()

#### > peek()

#### > size()

#### > isEmpty()

#### > print()

#### > purge()

---

## Queue

_First in first out_

### Test

```sh
$ npm run test-queue
```

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

### Test

```sh
$ npm run test-linkedlist
```

### Usage

```js
const { LinkedList } = require('./lib/linked-list.js');
const linkedList = new LinkedList();
```

### #Properties

#### > head

#### > tail

### #Methods

#### > append(param)

#### > prepend(param)

#### > size()

#### > toArray(param)

#### > print()

#### > indexOf(param)

#### > elementAt(param)

#### > addAt(param1, param2)

#### > removeAt(param)

#### > pop()

#### > delete(param)

#### > reverse

---

## Hash Table

### Test

```sh
$ npm run test-hashtable
```

### Usage

```js
const { HashTable } = require('./lib/hash-table.js');
const ht = new HashTable();
```

### #Properties

#### > table

Type: Array</br>
Default: Array(127)

#### > size

Type: Number</br>
Default: 0

### #Methods

#### > hash(param1, param2)

#### > set(param1, param2)

#### > get(param1)

#### > remove(param1)

#### > print()
