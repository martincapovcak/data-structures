const { assert } = require('chai');
const HashTable = require('../lib/hash-table.js');

describe('Hash Table', () => {
  let ht, ht2;

  beforeEach(() => {
    ht = new HashTable();
    ht2 = new HashTable();

    ht2.set('Canada', 300);
    ht2.set('France', 100);
    ht2.set('Spain', 110);
    ht2.set('ǻ', 192);
  });

  describe('set(key, value)', () => {
    it('add a new entry ', () => {
      const initialSize = ht.size;
      ht.set('Spain', 110);
      assert.equal(initialSize + 1, ht.size);
    });
    it('updates the entry with the same key', () => {
      let htTableSize = ht.table.length;
      const hash = HashTable.hash('Spain', htTableSize);
      ht.set('Spain', 110);
      assert.equal(ht.table[hash][0][1], 110);
      const initialSize = ht.size;
      ht.set('Spain', 300);
      assert.equal(ht.table[hash][0][1], 300);
      assert.equal(initialSize, ht.size);
    });
    it('handle new entry with hash collision', () => {
      let htTableSize = ht.table.length;
      ht.set('Spain', 110);
      ht.set('ǻ', 192);
      const hash01 = HashTable.hash('Spain', htTableSize);
      const hash02 = HashTable.hash('ǻ', htTableSize);
      assert.equal(hash01, hash02);
      assert.equal(ht.size, 2);
    });
  });

  describe('get(key)', () => {
    it('returns the corresponding value', () => {
      const result = ht2.get('Canada');
      const result2 = ht2.get('Spain');
      assert.equal(result, 300);
      assert.equal(result2, 110);
    });
    it("returns 'undefined' if the key does not exists", () => {
      const result = ht2.get('abc');
      assert.equal(result, undefined);
    });
  });

  describe('remove(key)', () => {
    it('removes entry based on given key', () => {
      const initialLength = ht2.size;
      let check = ht2.get('Canada');
      assert.equal(check, 300);
      ht2.remove('Canada');
      check = ht2.get('Canada');
      assert.equal(check, undefined);
      assert.equal(initialLength, ht2.size + 1);
    });
    it("returns 'true' when entry is removed, 'false' when there is no such key", () => {
      let result = ht2.remove('Canada');
      assert.equal(result, true);
      result = ht2.remove('Canada');
      assert.equal(result, false);
    });
    it('handle the table hash after its last entry removal', () => {
      const initTableLength = ht2.table.length;
      ht2.remove('ǻ');
      const spain = ht2.get('Spain');
      assert.equal(spain, 110);
      ht2.remove('Canada');
      const result = ht2.get('Canada');
      assert.equal(result, undefined);
      const tableLength = ht2.table.length;
      assert.equal(initTableLength, tableLength);
    });
  });
});
