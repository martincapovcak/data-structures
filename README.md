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

#### > size

Type: Getter</br>
Info: Returns the length of a queue

#### > toArray(param)

@param</br>
@Type: Any

Type: Static</br>
Info: Converts Queue structure to an array

#### > enqueue(param)

@param: value</br>
@Type: Any

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

Default: null</br>
Info: Stores the first node of a Linked-list

#### > tail

Default: null</br>
Info: Stores the last node of a Linked-list

### #Methods

#### > append(param)

@param: value</br>
@Type: Any

Info: Creates a new node with given value as param at the end of a linked-list

#### > prepend(param)

@param: value</br>
@Type: Any

Info: Creates a new node with given value as param at the very begining of i linked-list

#### > size()

Info: Returns the size of linked-list

#### > toArray(param)

@param</br>
@type: Any

Type: Static</br>
Info: Converts linked-list structure to an array

#### > print()

Info: Prints linked-list as a table to console

#### > indexOf(param)

@param: value</br>
@Type: Any

Info: Searches for node with value of given param. Returns node index

#### > elementAt(param)

@param: index</br>
@Type: Number

Info: Searches for node at given index as param. Returns node value

#### > addAt(param1, param2)

@param1: index</br>
@Type: Number

@param2: value</br>
@Type: Any

Info: Creates new node at certain index with given value

#### > removeAt(param)

@param: index</br>
@Type: Number

Info: Removes node at certain index from linked-list

#### > pop()

Info: Removes last node from linked-list and returnes it

#### > delete(param)

@param: value</br>
@Type: Any

Info: Removes every node from linked-list which value match the param

#### > reverse()

Info: Reverse nodes order in the linked-list

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

@param1: key </br>
@Type: String

@param2: value</br>
@Type: Any

Type: Static
Info: Returns hash for given key in tke max length of a scope param

#### > set(param1, param2)

@param1: key </br>
@Type: String

@param2: value</br>
@Type: Any

Info: Create a new record in the hash-table

#### > get(param)

@param: key </br>
@Type: String

Info: Returns back value of a record with given key as a param

#### > remove(param)

@param: key </br>
@Type: String

Info: Removes record from hash-table

#### > print()

Info: Prints hash-table as a table to the console
