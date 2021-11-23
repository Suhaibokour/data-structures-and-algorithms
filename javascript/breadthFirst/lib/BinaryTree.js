"use strict";


class BinaryTree {
  constructor() {
    this.root = null;
  }

  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }


  getMax() {
    let max = 0;
    if(!this.root){return null}
    let current = this.root;
    function _maxVal(node) {
      if (node.value > max) {
        max = node.value;
      }
      if (node.left) {
        _maxVal(node.left);
      }
      if (node.right) {
        _maxVal(node.right);
      }
    }
    _maxVal(current);
    return max;
  }

}

module.exports = BinaryTree;