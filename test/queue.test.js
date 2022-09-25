const { assert } = require('chai');
const { Queue } = require('../lib/queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('enqueue(value)', () => {
    it('add new node to the queue', () => {
      const initSize = queue.size;
      queue.enqueue('A');
      assert.equal(initSize + 1, queue.size);
    });
    it("if added as first node sets a 'first' and 'last' prop correctly", () => {
      queue.enqueue('A');
      assert.equal(queue.first.val, 'A');
      assert.equal(queue.last.val, 'A');
    });
    it('sets a last node correctly for next nodes', () => {
      queue.enqueue('A');
      queue.enqueue('B');
      assert.equal(queue.last.val, 'B');
    });
    it('updates the queue size correctly', () => {
      const values = ['A', 'B', 'C', 'D'];
      values.forEach(value => {
        queue.enqueue(value);
      });
      assert.equal(values.length, queue.size);
    });
  });

  describe('dequeue()', () => {
    it("returns 'null' if the queue is empty", () => {
      const result = queue.dequeue();
      assert.equal(result, null);
    });
    it('removes first node from queue and return its value', () => {
      const values = ['A', 'B', 'C', 'D'];
      values.forEach(value => {
        queue.enqueue(value);
      });

      for (let i = 0; i < values.length; i++) {
        let result = queue.dequeue();
        assert.equal(result, values[i]);
      }
    });
    it("handles 'first' and 'last' props correctly", () => {
      const values = ['A', 'B', 'C', 'D'];
      values.forEach(value => {
        queue.enqueue(value);
      });

      for (let i = 0; i <= values.length; i++) {
        if (i === values.length) {
          //Empty queue
          assert.equal(queue.first, null);
          assert.equal(queue.last, null);
        } else if (i === values.length - 1) {
          //Last node in a queue
          assert.equal(queue.first.val, values[i]);
          assert.equal(queue.last.val, values[i]);
        } else {
          //Populated queue
          assert.equal(queue.first.val, values[i]);
          assert.equal(queue.last.val, values[values.length - 1]);
        }
        queue.dequeue();
      }
    });

    it('updates the queue size correctly', () => {
      const values = ['A', 'B', 'C', 'D'];
      values.forEach(value => {
        queue.enqueue(value);
      });

      for (let i = 0; i < values.length; i++) {
        let size = values.length;
        assert.equal(queue.size, size - i);
        queue.dequeue();
      }
    });
  });

  describe('purge()', () => {
    it("delete all nodes in a queue, sets 'first' and 'last' prop to 'null'", () => {
      const values = ['A', 'B', 'C', 'D'];
      values.forEach(value => {
        queue.enqueue(value);
      });
      queue.purge();
      assert.equal(queue.first, null);
      assert.equal(queue.last, null);
    });
    it("reset the size to '0'", () => {
      const values = ['A', 'B', 'C', 'D'];
      values.forEach(value => {
        queue.enqueue(value);
      });
      queue.purge();
      assert.equal(queue.size, 0);
    });
    it("returns 'null' if the queue is empty", () => {
      const result = queue.purge();
      assert.equal(result, null);
    });
  });
});
