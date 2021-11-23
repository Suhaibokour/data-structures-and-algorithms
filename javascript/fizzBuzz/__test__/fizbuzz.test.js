"use strict";
const Node = require("../Node");
const BinaryTree = require("../binaryTree");

const fizzBuzz = require("../fizzBuzz");

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(15);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

let tree = new BinaryTree(one);

describe("Binary Tree", () => {
  it("fizzBuzz()", () => {
    let result = [
      "1",
      "buzz",
      "fizz",
      "7",
      "fizzBuzz",
      "fizz",
      "fizz",
      "4",
      "5",
    ];
    let tree2 = new BinaryTree();

    expect(fizzBuzz(tree)).toEqual(result);
    expect(tree2.root).toBeNull();
    expect(fizzBuzz(tree2)).toBe(-1);
  });
});