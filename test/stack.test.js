const { assert, expect } = require('chai');
const { Stack } = require('../lib/stack');

describe('Stack', () => {
  let stack;
  let value1, value2;

  beforeEach(() => {
    value1 = 'A';
    value2 = 'B';
    value3 = 'C';
    values = [value1, value2, value3];
    stack = new Stack();
  });

  describe('stack based on Array', () => {
    it('Returns undefined when trying to access items property', () => {
      assert.equal(stack.items, undefined);
    });
    it('Returns error when tries access element directly from a props', () => {
      stack.push(value1);
      stack.push(value2);
      //console.log(stack.items[0]);
      expect(() => stack.items[0]).to.throw(Error);
    });
  });

  describe('push()', () => {
    it('Add element to the top of a stack', () => {
      stack.push(value1);
      assert.equal(value1, stack.pop());
    });
  });

  describe('pop()', () => {
    it('returns top element from a stack', () => {
      values.forEach(value => stack.push(value));
      const result = stack.pop();
      const lastValue = values[values.length - 1];
      assert.equal(result, lastValue);
    });
    it('removes top element from a stack', () => {
      values.forEach(value => stack.push(value));
      let size1 = stack.size();
      stack.pop();
      assert.equal(stack.size(), size1 - 1);
    });
  });

  describe('peek()', () => {
    it('returns top element from a stack', () => {
      values.forEach(value => stack.push(value));
      const result = stack.peek();
      const lastValue = values[values.length - 1];
      assert.equal(result, lastValue);
    });
    it('dont removes top element from a stack', () => {
      values.forEach(value => stack.push(value));
      let size1 = stack.size();
      stack.peek();
      assert.equal(stack.size(), size1);
    });
  });

  describe('size()', () => {
    it('returns the length of a stack', () => {
      values.forEach(value => stack.push(value));
      const result = stack.size();
      assert.equal(result, values.length);
    });
  });

  describe('isEmpty()', () => {
    it('returns "true" if the stack is empty', () => {
      const result = stack.isEmpty();
      assert.equal(result, true);
    });
    it('returns "false" if the stack is not empty', () => {
      values.forEach(value => stack.push(value));
      const result = stack.isEmpty();
      assert.equal(result, false);
    });
  });

  describe('purge()', () => {
    it('removes all elements from stack', () => {
      values.forEach(value => stack.push(value));
      stack.purge();
      assert.equal(stack.isEmpty(), true);
    });
  });
});
