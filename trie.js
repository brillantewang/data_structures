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

  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      node = node.children[char];
      if (!node) return false;
    }

    if (node.isCompleteWord) return true;
    return false;
  };
}

const trie = new Trie();
trie.insert('bruhz');
trie.insert('bruhs');
trie.insert('potato');
console.log(trie.search('bruhz'));
console.log(trie.search('bruhzz'));
console.log(trie.search('bruhs'));
console.log(trie.search('pot'));
