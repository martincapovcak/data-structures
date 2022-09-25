const { assert } = require('chai');
const { LinkedList, Node } = require('../lib/linked-list');

describe('Linked List', () => {
  let list, value1, value2, valueFirst, valueLast, valueInsert, values;
  value1 = 'A';
  value2 = 'B';
  valueArr = ['A', 'B'];
  valueObj = { key: 'Hello', key1: 'World' };
  valueFirst = 'FIRST';
  valueLast = 'LAST';
  valueInsert = 'INSERT';
  values = [value1, value2, valueArr, valueObj];

  beforeEach(() => {
    emptyList = new LinkedList();
    list = new LinkedList();
    values.forEach(value => {
      list.append(value);
    });
  });

  describe('Properties', () => {
    it('Head should be "null" by default', () => {
      assert.equal(emptyList.head, null);
    });
    it('Tail should be "null" by default', () => {
      assert.equal(emptyList.head, null);
    });
  });

  describe('Methods', () => {
    describe('size()', () => {
      it('returns "0" if the list is empty', () => {
        assert.equal(emptyList.size(), 0);
      });
      it('returns the corrent length', () => {
        let nodeA = new Node('A');
        let nodeB = new Node('B');
        let nodeC = new Node('C');
        nodeA.next = nodeB;
        nodeB.next = nodeC;
        emptyList.head = nodeA;
        emptyList.tail = nodeC;
        assert.equal(emptyList.size(), 3);
      });
    });

    describe('append(value)', () => {
      it('creates new node if the list is empty', () => {
        emptyList.append(value1);
        assert.equal(emptyList.head.val, value1);
        assert.equal(emptyList.tail.val, value1);
      });
      it('add new node at the end of list and updates tail node', () => {
        emptyList.append(value1);
        emptyList.append(value2);
        assert.equal(emptyList.head.next.val, value2);
        assert.equal(emptyList.head.val, value1);
        assert.equal(emptyList.tail.val, value2);
      });
    });

    describe('prepend(value)', () => {
      it('creates new node if the list is empty', () => {
        emptyList.prepend(value1);
        assert.equal(emptyList.head.val, value1);
        assert.equal(emptyList.tail.val, value1);
      });
      it('add new node at the beggining of list and updates head node', () => {
        emptyList.prepend(valueLast);
        emptyList.prepend(valueFirst);
        assert.equal(emptyList.head.val, valueFirst);
        assert.equal(emptyList.head.next.val, valueLast);
        assert.equal(emptyList.tail.val, valueLast);
      });
    });

    describe('toArray()', () => {
      it('returns an array from linked-list', () => {
        const result = LinkedList.toArray(list.head);
        assert.equal(Array.isArray(result), true);
        list.print();
      });
    });

    describe('indexOf(value)', () => {
      it('returns null if given value is not in the list', () => {
        const valueX = 'xxx';
        assert.equal(list.indexOf(valueX), null);
      });
      it('returns index of given value', () => {
        const checkIndex = values.length - 1;
        const value = values[checkIndex];
        assert.equal(list.indexOf(value), checkIndex);
      });
    });

    describe('elementAt(index)', () => {
      it('returns null if given index is out of scope', () => {
        // size() method returns length
        const outOfScopeIndex = list.size();
        assert.equal(list.elementAt(outOfScopeIndex), null);
      });
      it('returns value of list at given index', () => {
        const index = list.indexOf(valueObj);
        assert.equal(list.elementAt(index), valueObj);
      });
    });

    describe('addAt(index,value)', () => {
      it('add new node to list at given index', () => {
        const index = Math.ceil(list.size() * 0.5);
        list.addAt(index, valueInsert);
        assert.equal(list.elementAt(index), valueInsert);
      });
      it('updates head if added as the first element', () => {
        list.addAt(0, valueInsert);
        assert.equal(list.head.val, valueInsert);
      });
      it('updates tail if added as last element', () => {
        const afterLastIndex = list.size();
        list.addAt(afterLastIndex, valueInsert);
        assert.equal(list.tail.val, valueInsert);
      });
      it('returns null if added as out of scope index', () => {
        const outOfScopeIndex = list.size() + 1;
        const result = list.addAt(outOfScopeIndex, valueInsert);
        assert.equal(result, null);
      });
    });

    describe('pop()', () => {
      it('removes the last node and returns it', () => {
        const length = list.size();
        const lastIndex = list.size() - 1;
        const lastElement = new Node(list.elementAt(lastIndex));
        const result = list.pop();
        assert.equal(result.val, lastElement.val);
        const newLength = list.size();
        assert.equal(length, newLength + 1);
      });
      it('handle the new tail node', () => {
        list.pop();
        const lastElement = list.elementAt(list.size() - 1);
        assert.equal(list.tail.val, lastElement);
      });
    });

    describe('delete(value)', () => {
      it('deletes all list nodes with matched value', () => {
        let iterations = 2;
        for (let i = 0; i < iterations; i++) {
          list.append(valueInsert);
        }

        for (let i = 0; i < iterations; i++) {
          list.prepend(valueInsert);
        }

        for (let i = 0; i < iterations; i++) {
          list.addAt(Math.ceil(list.size() / 2), valueInsert);
        }

        assert.equal(list.elementAt(0), valueInsert);
        assert.equal(list.elementAt(Math.ceil(list.size() / 2)), valueInsert);
        assert.equal(list.elementAt(list.size() - 1), valueInsert);

        list.delete(valueInsert);

        assert.equal(list.indexOf(valueInsert), null);
      });
      it('Handle head and tail nodes after delete', () => {
        list.append(valueInsert);
        list.prepend(valueInsert);
        assert.equal(list.head.val, valueInsert);
        assert.equal(list.tail.val, valueInsert);
        list.delete(valueInsert);
        assert.equal(list.head.val, values[0]);
        assert.equal(list.tail.val, values[values.length - 1]);
      });
      it('if delete list with only one element returns null', () => {
        emptyList.append(valueInsert);
        assert.equal(emptyList.elementAt(0), valueInsert);
        const result = emptyList.delete(valueInsert);
        assert.equal(result, null);
      });
    });

    describe('reverse()', () => {
      it('reverse the order of nodes', () => {
        list.prepend(valueFirst);
        list.append(valueLast);
        assert.equal(list.elementAt(0), valueFirst);
        assert.equal(list.elementAt(list.size() - 1), valueLast);
        list.reverse();
        assert.equal(list.elementAt(0), valueLast);
        assert.equal(list.elementAt(list.size() - 1), valueFirst);
      });
      it('reverse head and tail nodes handle', () => {
        list.prepend(valueFirst);
        list.append(valueLast);
        assert.equal(list.head.val, valueFirst);
        assert.equal(list.tail.val, valueLast);
        list.reverse();
        assert.equal(list.head.val, valueLast);
        assert.equal(list.tail.val, valueFirst);
      });
    });
  });
});
