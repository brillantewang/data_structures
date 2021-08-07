class MinHeap {
  constructor() {
    this.items = [0,1,2,3,4,5,6,7,8,9,10];
  };

  getLeftChildIndex(index) {
    return index * 2 + 1;
  };

  getRightChildIndex(index) {
    return index * 2 + 2;
  };

  getParentIndex(index) {
    return Math.round(index / 2 - 1);
  };

  getLeftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  };

  getRightChild(index) {
    return this.items[this.getRightChildIndex(index)];
  };

  getParent(index) {
    return this.items[this.getParentIndex(index)];
  };

  hasLeftChild(index) {
    return !!this.getLeftChild(index);
  };

  hasRightChild(index) {
    return !!this.getRightChild(index);
  };

  hasParent(index) {
    return !!this.getParent(index);
  };

  swap(index1, index2) {
    const item1 = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = item1;
  };

  peek() {
    return this.items[0];
  };

  poll() {
    const firstItem = this.peek();
    const lastItem = this.items.pop();
    this.items[0] = lastItem;
    this.heapifyDown();
    return firstItem;
  };

  add(item) {
    this.items.push(item);
    this.heapifyUp();
  };

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      const leftChild = this.getLeftChild(index);
      const rightChild = this.getRightChild(index);

      const smallerChildIndex = rightChild && rightChild < leftChild ?
        this.getRightChildIndex(index) :
        this.getLeftChildIndex(index);

      if (this.items[index] <= this.items[smallerChildIndex]) break;
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  };

  heapifyUp() {
    let index = this.items.length - 1;
    while (this.hasParent(index) && this.getParent(index) > this.items[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  };
}

const minHeap = new MinHeap();
console.log(0, minHeap.getLeftChild(0), minHeap.getRightChild(0), minHeap.getParent(0));
console.log(1, minHeap.getLeftChild(1), minHeap.getRightChild(1), minHeap.getParent(1));
console.log(2, minHeap.getLeftChild(2), minHeap.getRightChild(2), minHeap.getParent(2));
console.log(3, minHeap.getLeftChild(3), minHeap.getRightChild(3), minHeap.getParent(3));
console.log(4, minHeap.getLeftChild(4), minHeap.getRightChild(4), minHeap.getParent(4));
console.log(5, minHeap.getLeftChild(5), minHeap.getRightChild(5), minHeap.getParent(5));
console.log(6, minHeap.getLeftChild(6), minHeap.getRightChild(6), minHeap.getParent(6));
console.log(7, minHeap.getLeftChild(7), minHeap.getRightChild(7), minHeap.getParent(7));
console.log(8, minHeap.getLeftChild(8), minHeap.getRightChild(8), minHeap.getParent(8));
console.log(9, minHeap.getLeftChild(9), minHeap.getRightChild(9), minHeap.getParent(9));
console.log(10, minHeap.getLeftChild(10), minHeap.getRightChild(10), minHeap.getParent(10));

minHeap.swap(0, 5);
console.log(minHeap.items);

minHeap.items = [0,1,2,5,4,5,6,7,8,9,5.5];
console.log('polling', minHeap.poll());
console.log(minHeap.items);

minHeap.items = [0,1,2,3,4,5,6,7,8,9];
console.log('adding', minHeap.add(2.5));
console.log(minHeap.items);
