'use strict';
const {Tree,BST} = require('../trees/tree')
const Node = require('../trees/node')

it('Can successfully instantiate an empty BSt', () => {
  let BT = new Tree();
  expect(BT).toBeDefined();
});

it('Can successfully instantiate a tree with a single root node', () => {
  let BT = new Tree();
  BT.root = new Node(1)
  expect(BT).toBeDefined();
  expect(BT.root.value).toBe(1);
});

it('Can successfully add a left child and right child to a single root node', () => {
  let BT = new Tree();
  BT.root = new Node(1,new Node(2))
  expect(BT).toBeDefined();
  expect(BT.root.left.value).toBe(2);
});

it('Can successfully return a collection from a preorder traversal', () => {
  let BT = new Tree();
  BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));
  expect(BT).toBeDefined();
  expect(BT.root.left.value).toBe(4);
  expect(BT.preOder()).toStrictEqual([1, 4, 7, 2, 3, 9, 6]);
});

it('Can successfully return a collection from an inorder traversal', () => {
  let BT = new Tree();
  BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));
  expect(BT).toBeDefined();
  expect(BT.root.left.value).toBe(4);
  expect(BT.inOrder()).toStrictEqual([7, 4, 2, 1,9, 3, 6]);
});

it('Can successfully return a collection from a postorder traversal', () => {
  let BT = new Tree();
  BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));
  expect(BT).toBeDefined();
  expect(BT.root.left.value).toBe(4);
  expect(BT.postOder()).toStrictEqual([7, 2, 4, 9,6, 3, 1]);
});

it('Can successfully instantiate an empty BSt', () => {
  let bst = new BST();
  expect(bst).toBeDefined();
});

it('Can successfully add to BST with a single root node', () => {
  let bst = new BST();
  bst.add(1)
  expect(bst.root.value).toBe(1);
});

it('Can successfully push onto a bst', () => {
    let bst = new BST();
    bst.add(1)
    bst.add(2)
    expect(bst).toBeDefined();
    expect(bst.root.value).toBe(1);
    expect(bst.root.right.value).toBe(2);
  });
  
  it('Can successfully push onto a bst', () => {
    let bst = new BST();
    bst.add(23)
    bst.add(8)
    bst.add(4)
    bst.add(42)
    bst.add(85)
    bst.add(105)
    expect(bst.Contains(4)).toBeTruthy()
  });