"use strict";

const Node = require("./Node");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  contanis(value) {
    if (this.root == null) {
      return false;
    }
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        true;
      }
    }
    return false;
  }

  add(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (current) {
      if (current.value > node.value) {
        if (!current.left) {
          current.left = node;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = node;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }
}
module.exports = BinaryTree;