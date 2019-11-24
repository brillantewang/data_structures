class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTreeV1 {
  constructor() {
    this.root = null;
  }

  add(data, node = this.root) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    if (data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.add(data, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.add(data, node.right);
      }
    }
  }

  remove(data, node = this.root) {
    if (node === null) return;
    if (data < node.data) this.remove(data, node.left);
    if (data > node.data) this.remove(data, node.right);
    if (data === node.data) {
      if (node.left && node.right) {
        const minRightNode = getMinNode(node.right);
        node.data = minRightNode.data;
        minRightNode = null;
      } else if (node.left) {
        node = node.left;
      } else if (node.right) {
        node = node.right
      } else {
        node = null;
      }
    }
  }

  getMinNode(node = this.root) {
    if (node.left) return this.getMinNode(node.left);
    return node;
  }

  contains(data, node = this.root) {
    if (node === null) return false;
    if (data === node.data) return true;
    if (data < node.data) return this.contains(data, node.left);
    if (data > node.data) return this.contains(data, node.right);
  }

  inOrderTraversal(node = this.root) {
    if (this.root === null) return;
    if (node.left) this.inOrderTraversal(node.left);
    console.log(node.data);
    if (node.right) this.inOrderTraversal(node.right);
  }
}

const bst = new BinarySearchTreeV1();
bst.add(5);
bst.add(7);
bst.add(12);
bst.add(6);
bst.add(2);
bst.inOrderTraversal(); // 2, 5, 6, 7, 12
console.log(bst.contains(3)) // false
console.log(bst.contains(7)) // true