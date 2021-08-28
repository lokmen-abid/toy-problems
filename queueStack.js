/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
 * Stack Class
 */
var Stack = function () {
  this.storage = {};
  this.count = 0;
  // i created a storage object to store in it the item of the stack element

  // add an item to the top of the stack
  this.push = function (item) {
    // i add the parameter item the function push
    this.storage[this.count] = item;
    // i store the item in the storage with key equal to the count
    this.count++; // i increment the value of the count to be to key for the next item
  };
  // remove an item from the top of the stack
  this.pop = function () {
    this.count--;
    // i decrement the count because the count will be usually grateful than the key +1
    var output = this.storage[this.count];
    // i create a variable to store in it the item i will remove it from
    delete this.storage[this.count];
    // i use delete to remove this item from the storage

    return output; // i return the variable where i stored the item was removed
  };
  // return the number of items in the stack
  this.size = function () {
    if (this.count < 0) {
      // i did this condition because after removing the last item  the count will be -1
      // but the size of the stack is 0
      return 0;
    }
    // so the size of the stack will be equal to the count
    return this.count;
  };
};

/**
 * Queue Class
 */
var Queue = function () {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();
  this.count = 0; // i fixed this count to 0 at first

  // called to add an item to the `queue`
  this.enqueue = function (item) {
    // TODO: implement `enqueue`
    inbox.push(item);
    // i store it the item using the inbox(stack)
    this.count++;
  };
  // called to remove an item from the `queue`
  this.dequeue = function () {
    // TODO: implement `dequeue`
    while (this.count !== 0) {
      // the queue it's the FIFO so i need to loop inside the queue until reach the first item
      outbox.push(inbox.pop());
      // i used the new stack(outbox) to push in it the last item was in the first stack (inbox)
      this.count--;
      // i need to decrement the count to reach the first item
    }

    return outbox.pop();
  };
  // should return the number of items in the queue
  this.size = function () {
    // TODO: implement `size`
    // the same size of the inbox will be the size of the queue
    return inbox.size();
  };
};
