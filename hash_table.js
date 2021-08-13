// does not handle collisions
class BasicHashTable {
  constructor(size) {
    this.size = size;
    this.array = Array(this.size).fill(null);
  };

  // key has to be a string type (not an integer, etc)
  hash(key) {
    // I guess this hashing function is O(n) where n is the number of chars in the key. Is that
    // slow or is it normal? I wonder if there are hashing functions that are O(1).
    const asciiSum = key.split('').reduce((acc, currChar) => acc + currChar.charCodeAt(0), 0);
    return asciiSum % this.size;
  };

  insert(key, value) {
    const hash = this.hash(key);
    this.array[hash] = value;
  };

  get(key) {
    const hash = this.hash(key);
    return this.array[hash];
  };

  delete(key) {
    const hash = this.hash(key);
    this.array[hash] = null;
  };
}

const bht = new BasicHashTable(10);
console.log(bht.hash('aa b'));

console.log(bht.array);
bht.insert('a', 15);
bht.insert('b', 18);
bht.insert('c', 191);
bht.insert('d', 11);
bht.insert('DO', 21);
console.log(bht.array);
bht.delete('DO');
console.log(bht.array);

console.log(bht.get('DO'));
