"use strict";

let fizzBuzz = (tree) => {
  let result = [];
  if (!tree.root) return -1;
  let _game = (node) => {
    if (node.value % 3 == 0 && node.value % 5 == 0) {
      node.value = "fizzBuzz";
      result.push(node.value);
    } else if (node.value % 3 == 0) {
      node.value = "fizz";
      result.push(node.value);
    } else if ((node.value & 5) == 0) {
      node.value = "buzz";
      result.push(node.value);
    } else {
      result.push(node.value.toString());
    }

    if (node.left) _game(node.left);
    if (node.right) _game(node.right);
  };
  _game(tree.root);
  return result;
};
module.exports = fizzBuzz;