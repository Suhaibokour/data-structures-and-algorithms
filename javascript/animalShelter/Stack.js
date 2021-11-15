const Node = require('./Node');


class Stack {

  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {

    if (this.isEmpty()) { 
     
      const newNode = new Node(value);
      this.top = newNode;

    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }

  }

  pop() {

    if (this.isEmpty()) {
      console.log('No Nodes are left in your stack');
      return false;
    }

    const temp = this.top; 
    this.top = this.top.next;
    temp.next = null; 
    return temp.value;
  }

  
  peek() {
    if (this.isEmpty()) {
      return 'exception'
    }
    return this.top.value;
  }


  isEmpty() {
   
 
    return this.top === null;
  }
}

class PseudoQueue{
constructor(){
this.front = new Stack ();
this.rear = new Stack ();
this.length = 0
}

enqueue(value) {

if (this.isEmpty()) {
  console.log('The queue is Empty');
  return false;
}
this.rear.push(value)
this.length++;
return this
}
dequeue() {
  if (this.isEmpty()) {
    console.log('The queue is Empty');
    return false;
  }
  const temp = this.rear.top;
  this.rear.top = this.rear.top.next;
  temp.next = null;
  this.length -= 1;
  return temp.value;

}


  isEmpty() {
    return this.top === null;
}  



}


module.exports = {Stack,PseudoQueue};