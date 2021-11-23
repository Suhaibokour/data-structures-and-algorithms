"use strict";

const Node = require("./Node");
const BinaryTree = require("./BinaryTree");

class BinarySearchTree extends BinaryTree {
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current) {
        if (val >= current.value) {
          if (current.right === null) {
            current.right = newNode;
            break;
          } else {
            console.log("right");
            current = current.right;
          }
        } else {
          if (current.left === null) {
            current.left = newNode;
            break;
          } else {
            console.log("left");
            current = current.left;
          }
        }
      }
    }
    return this;
  }

  find(val) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val > current.value) {
        current = current.right;
      } else if (val < current.value) {
        current = current.left;
      } else {
        found = true;
      }
    }
    return found;
  }
}

module.exports = BinarySearchTree;