'use strict';
const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    include(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    to_string() {
        let currentNode = this.head;
        let string = '';
        if (!currentNode) {
            string = string + `NULL -> `
        }
        else{
        string = string + `{${currentNode.value}} -> `
        }
        while (currentNode.next) {
            currentNode = currentNode.next;
            string = string + `{${currentNode.value}} -> `
        }
        string = string + 'NULL'
        return string;
    }


}
module.exports = LinkedList;