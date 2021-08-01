class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  };
};

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  };

  isEmpty() {
    return this.head === null;
  };

  peek() {
    return this.head;
  };

  add(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.tail.next = node;
    };

    this.tail = node;
  };

  remove() {
    if (this.isEmpty()) {
      console.log('queue is empty');
      return;
    }
    const data = this.head.data;

    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }

    return data;
  };

  print() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const queue = new Queue();
queue.add(4);
queue.add(7);
queue.add(9);
console.log('removing ', queue.remove());
queue.print();
