//STACK

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    let remove = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return remove;
  }

  peek() {
    return this.storage[this.size];
  }
}

const stack1 = new Stack();

stack1.push("try");
stack1.push("test");
stack1.push("data");

stack1.pop();

stack1.peek();

console.log(stack1.peek());

//QUEUE basic
const queue = [];

//enqueue
queue.push("me");
queue.push("you");
queue.push("we");
//dequeue
queue.shift(); //me - gone

//QUEUE function usign prototype functions
function Queue() {
  this.elements = [];
}

Queue.prototype.enqueue = function (e) {
  this.elements.push(e);
};

Queue.prototype.dequeue = function () {
  return this.elements.shift();
};

//check if queue is empty
Queue.prototype.isEmpty = function () {
  return this.elements.length == 0;
};

//Gets the front of the queue
Queue.prototype.peek = function () {
  return !this.isEmpty() ? this.elements[0] : undefined;
};

Queue.prototype.length = function () {
  return this.elements.length;
};

let q = new Queue();
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
console.log(q.length());
console.log(q.peek());

console.log(q.dequeue());
console.log(q.length());

//while loop to remove all elements in queue
/*while(!q.isEmpty()){
    console.log((q.dequeue));
}
*/
