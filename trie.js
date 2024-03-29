class Node {
  constructor(char) {
    this.char = char;
    this.children = {};
    this.isCompleteWord = false;
  };
}

class Trie {
  constructor() {
    this.root = new Node('*');
  };

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children[char]) node.children[char] = new Node(char);
      node = node.children[char];
    }

    node.isCompleteWord = true;
  };

  getLastCharNode(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      node = node.children[char];
      if (!node) return false;
    }

    return node;
  };

  search(word) {
    const node = this.getLastCharNode(word);
    return node && node.isCompleteWord;
  }

  startsWith(prefix) {
    return Boolean(this.getLastCharNode(prefix));
  }
}

const trie = new Trie();
trie.insert('bruhz');
trie.insert('bruhs');
trie.insert('potato');
console.log(trie.search('bruhz')); // true
console.log(trie.search('bruhzz')); // false
console.log(trie.search('bruhs')); // true
console.log(trie.startsWith('bruhs')); // true
console.log(trie.search('pot')); // false
console.log(trie.startsWith('pot')); // true
