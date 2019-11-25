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

  remove(data, node = this.root, parent = null) {
    if (node === null) {
      console.log('node not found');
    } else if (data < node.data) {
      this.remove(data, node.left, node);
    } else if (data > node.data) {
      this.remove(data, node.right, node);
    } else if (data === node.data) {
      if (node.left && node.right) { // has two children
        const minRightNode = this.getMinNode(node.right);
        node.data = minRightNode.data;
        this.remove(minRightNode.data, node.right, node);
      } else if (node.left) { // has one child (left)
        this.replaceNode(node, parent, node.left);
      } else if (node.right) { // has one child (right)
        this.replaceNode(node, parent, node.right);
      } else { // has no children
        this.replaceNode(node, parent, null);
      }
    }
  }

  replaceNode(node, parent, replacement) {
    if (parent === null) { // this means the node is the root
      this.root = replacement;
    } else if (node.data < parent.data) { // this means the node is the left child
      parent.left = replacement;
    } else { // this means the node is the right child
      parent.right = replacement;
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
    console.log(node);
    if (node.right) this.inOrderTraversal(node.right);
  }
}

const bst = new BinarySearchTreeV1();
bst.add(5);
bst.add(7);
bst.add(12);
bst.add(6);
bst.add(2);
bst.add(3);
// bst.inOrderTraversal(); // 2, 3, 5, 6, 7, 12
// console.log(bst.getMinNode());
// console.log(bst.contains(8)) // false
// console.log(bst.contains(7)) // true
// bst.remove(3);
// bst.inOrderTraversal(); // 2, 5, 6, 7, 12
// bst.remove(2);
// bst.inOrderTraversal(); // 3, 5, 6, 7, 12
// bst.remove(7);
// bst.inOrderTraversal(); // 2, 3, 5, 6, 12
bst.remove(5);
bst.inOrderTraversal(); // 2, 3, 6, 7, 12