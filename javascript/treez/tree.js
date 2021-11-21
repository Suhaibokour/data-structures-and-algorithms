'use strict'
const Node = require('./node')
class Tree {
    constructor(root = null) {
        this.root = root;
    }
    preOder() {
        let newArr = [];
        let _recourse = (node) => {
            newArr.push(node.value);
            if (node.left) {
                _recourse(node.left);
            }
            if (node.right) {
                _recourse(node.right);
            }
        }
        _recourse(this.root);
        return newArr

    }

    inOrder() {

        let newArr = [];

        let _recourse = (node) => {
            if (node.left) {
                _recourse(node.left);

            }
            newArr.push(node.value);
            if (node.right) {
                _recourse(node.right);
            }


        }
        _recourse(this.root);
        return newArr

    }
    postOder() {

        let newArr = [];

        let _recourse = (node) => {
            if (node.left) {
                _recourse(node.left);

            }
            if (node.right) {
                _recourse(node.right);
            }
            newArr.push(node.value);


        }
        _recourse(this.root);
        return newArr
    }



    isEmpty() {
        return this.root === null;

    }




}
class BST {
    constructor() {
        this.root = null;
    }
    add(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return newNode;
        }
        let _recourse = (node) => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                    return newNode;
                }
                _recourse(node.left);
            } else {
                if (!node.right) {
                    node.right = newNode;
                    return newNode;
                }
                _recourse(node.right);
            }
        }
        _recourse(this.root);
        return newNode;


    }


    Contains(value) {
        let currentNode = this.root
        while (currentNode) {
            if (currentNode.value === value) {
             return true;
            }
            if (currentNode.value > value) {
                currentNode = currentNode.left
            }
            else  {
                currentNode = currentNode.right
                
            }
        }
         return false 
    }
    isEmpty() {
        return this.root === null

    }

}
module.exports = { Tree, BST };