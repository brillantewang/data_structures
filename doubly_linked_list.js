class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;

    return data;
  }

  get(idx) {
    if (this.head === null || idx < 0) return undefined;

    let current = this.head;
    for (let i = 0; i < idx && current !== null; i++) {
      current = current.next;
    }

    if (current === null) return undefined;

    return current.data;
  }

  remove(idx) {
    if (this.head === null || idx < 0) throw RangeError('idx not in range');

    if (idx === 0) {
      const data = this.head.data;
      this.head = this.head.next;

      if (this.head !== null) this.head.prev = null;

      return data;
    }

    let current = this.head.next;
    for (let i = 1; i < idx && current !== null; i++) {
      current = current.next;
    }

    if (current === null) throw RangeError('idx not in range');
    if (current === this.tail) {
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    return current.data;
  }

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

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(4);
doublyLinkedList.add(8);
doublyLinkedList.add(7);
doublyLinkedList.add(5);
doublyLinkedList.add(2);
console.log([...doublyLinkedList.values()]) // [4, 8, 7, 5, 2]

console.log(doublyLinkedList.get(1)) // 8
console.log(doublyLinkedList.get(3)) // 5
console.log(doublyLinkedList.get(-1)) // undefined
console.log(doublyLinkedList.remove(3)) // throw range error
console.log(doublyLinkedList.remove(-1)) // throw range error
console.log(doublyLinkedList.remove(0)) // 4
console.log([...doublyLinkedList.values()]) // [8, 7, 5, 2]
console.log(doublyLinkedList.get(1)) // 7
console.log(doublyLinkedList.remove(3)) // 2
console.log([...doublyLinkedList.values()]) // [8, 7, 5]
console.log(doublyLinkedList.remove(1)) // 7
console.log([...doublyLinkedList.values()]) // [8, 5]
