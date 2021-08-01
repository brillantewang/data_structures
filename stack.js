class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
  };
};

class Stack {
  constructor() {
    this.tail = null;
  }

  isEmpty() {
    return this.tail === null;
  };

  peek() {
    return this.tail.data;
  };

  push(data) {
    const node = new Node(data);
    node.previous = this.tail;
    this.tail = node;
  };

  pop() {
    if (this.isEmpty()) {
      console.log('stack is empty');
      return;
    };

    const data = this.tail.data;
    this.tail = this.tail.previous;

    return data;
  };

  print() {
    let node = this.tail;

    console.log('printing in reverse');
    while (node) {
      console.log(node.data);
      node = node.previous;
    }
  }
};

const stack = new Stack();
stack.push(4);
stack.push(7);
stack.push(9);
stack.print();
console.log('removing', stack.pop());
