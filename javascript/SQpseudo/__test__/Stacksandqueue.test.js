const {Stack,PseudoQueue} = require('../Stack');
const Queue = require('../Queue');


describe('Stack', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
    it('start', () => {
      const stack = new Stack();
      expect(stack).toBeDefined();
      expect(stack.top).toBeNull();
    });
  })

    describe('Queue', () => {
      it('works', () => {
        expect(true).toBeTruthy();
      })
    it('start', () => {
      const queue = new Queue();
      expect(queue).toBeDefined();
      expect(queue.length).toBe(0);
    });
  })
  
  it('start', () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
    expect(queue.length).toBe(0);
  });


  
  
  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1)
    expect(stack).toBeDefined();
    expect(stack.top.value).toBe(1);
  });
  
  
  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1)
    stack.push(2)
    expect(stack).toBeDefined();
    expect(stack.top.value).toBe(2);
  });
  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1)
    stack.push(2)
    stack.pop()
    expect(stack).toBeDefined();
    expect(stack.top.value).toBe(1);
  });
  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1)
    stack.push(2)
    stack.pop()
    stack.pop()
    expect(stack).toBeDefined();
    expect(stack.top).toBeNull();
  });
  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1)
    stack.push(2)
    stack.peek()
    expect(stack).toBeDefined();
    expect(stack.top.value).toBe(2);
  });
  
  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
   
    // expect(stack).toBeDefined();
    expect( stack.peek()).toBe('exception');
  });
  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
   queue.enqueue(1)
    expect(queue).toBeDefined();
    expect(queue.front.value).toBe(1);
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
   queue.enqueue(1)
   queue.enqueue(2)
   queue.enqueue(3)
    expect(queue).toBeDefined();
    expect(queue.rear.value).toBe(3);
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
   queue.enqueue(1)
   queue.enqueue(2)
   queue.dequeue()
    expect(queue).toBeDefined();
    expect(queue.rear.value).toBe(2);
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
   queue.enqueue(1)
   queue.enqueue(2)
   queue.peek()
    expect(queue).toBeDefined();
    expect(queue.rear.value).toBe(2);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
   queue.enqueue(1)
   queue.enqueue(2)
   queue.enqueue(2)
   queue.dequeue()
   queue.dequeue()
   queue.dequeue()
   queue.isEmpty()
    expect(queue).toBeDefined();
    expect(queue).toBeTruthy();
  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
   queue.enqueue(1)
   queue.enqueue(2)
   queue.enqueue(2)
   queue.dequeue()
   queue.dequeue()
   queue.dequeue()
    expect(queue.peek()).toBe('exception');
  });
  it('Can successfully enqueue into a Pseudo queue', () => {
    const queue = new PseudoQueue();
   queue.enqueue(10)
   queue.enqueue(15)
   queue.enqueue(20)
   queue.enqueue(5)
  //  [10]->[15]->[20]
    expect(queue.rear.top.value).toBe(5);
  });
  it('Can successfully cheak if the queue is empty', () => {
    const queue = new PseudoQueue();
    expect(queue.isEmpty()).toBeFalsy();
  });
  it('Can successfully enqueue into a Pseudo queue to be wrong', () => {
    const queue = new PseudoQueue();
   queue.enqueue(10)
   queue.enqueue(15)
   queue.enqueue(20)
   queue.enqueue(5)
  //  [10]->[15]->[20]
    expect(queue.rear.top.value).not.toBe(10);
  });
  
  it('Calling PseudoQueue dequeue to be truthy  ', () => {
    const queue = new PseudoQueue();
    queue.enqueue(5)
   queue.enqueue(10)
   queue.enqueue(15)
   queue.enqueue(20)
  //  console.log(queue.rear.top.value)
  queue.dequeue()
  //  [5]->[10]->[15]->{[20]x}queue.rear.top.value
    expect(queue.rear.top.value).toBe(15);
  });
  it('Calling PseudoQueue dequeue to be wrong  ', () => {
    const queue = new PseudoQueue();
    queue.enqueue(5)
   queue.enqueue(10)
   queue.enqueue(15)
   queue.enqueue(20)
  queue.dequeue()
    expect(queue.rear.top.value).not.toBe(20);
  });