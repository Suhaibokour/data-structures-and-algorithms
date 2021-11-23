"use strict";

const breadthFirst = (tree) => {
  if (!tree.root) return null;
  let queues = [];
  let treeArr = [];
  let current = tree.root;
  queues.push(current);
  while (queues.length) {
    current = queues.shift();
    treeArr.push(current.value);
    if (current.left !== null) queues.push(current.left);
    if (current.right !== null) queues.push(current.right);
  }
  return treeArr;
};

module.exports = breadthFirst;