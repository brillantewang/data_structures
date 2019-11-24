class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  };
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  };

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    return data;
  };

  get(index) {
    if (index < 0) return undefined;

    let current = this.head;
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next;
    }

    if (current === null) return undefined;

    return current.data;
  };

  remove(index) {
    if (index < 0 || this.head === null) throw RangeError('index not in range');

    if (index === 0) {
      const data = this.head.data;
      this.head = this.head.next;
      return data;
    }

    let previous = this.head;
    let current = this.head.next;
    for (let i = 1; i < index && current !== null; i++) {
      previous = current;
      current = current.next;
    }

    if (current === null) throw RangeError('index not in range');

    previous.next = current.next;
    return current.data;
  };

  *values() {
    let current = this.head;

    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }

  [Symbol.iterator]() {
    return this.values();
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.add(4);
singlyLinkedList.add(8);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(7);
console.log([...singlyLinkedList.values()]); // [4, 8, 2, 3, 7]

console.log(singlyLinkedList.get(5)); // undefined
console.log(singlyLinkedList.get(-5)); // undefined
console.log(singlyLinkedList.get(3)); // 3
console.log(singlyLinkedList.remove(0)); // 4
console.log([...singlyLinkedList.values()]); // [8, 2, 3, 7]
console.log(singlyLinkedList.get(3)); // 7
console.log(singlyLinkedList.remove(2)); // 3
console.log([...singlyLinkedList.values()]); // [8, 2, 7]
// singlyLinkedList.remove(-1); // throw range error
singlyLinkedList.remove(4); // throw range error
