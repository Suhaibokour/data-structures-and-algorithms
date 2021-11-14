const Stack = require('../Stack');
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
   queue.dequeue(2)
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
   queue.dequeue(1)
   queue.dequeue(2)
   queue.dequeue(2)
   queue.isEmpty()
    expect(queue).toBeDefined();
    expect(queue).toBeTruthy();
  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
   queue.enqueue(1)
   queue.enqueue(2)
   queue.enqueue(2)
   queue.dequeue(1)
   queue.dequeue(2)
   queue.dequeue(2)
 
   
    expect(queue.peek()).toBe('exception');
  });