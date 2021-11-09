'use strict';

const Node = require ( './node.js' );
s
class LinkedList {
  constructor (){
    this.head = null ;
  }

  insert ( value ) {
    let node = new Node ( value );
    if ( !this.head ){
      this.head = node ;
    }
    else {
      let head = this.head;
      while( head.next ){
        head = head.next;
      }
      head.next = node ;
    }
  }

  includes ( value ) {
    let node = this.head ;
    if ( !node ){
      return false;
    }
    else {
      while ( node.next ){
        if ( value === node.value ){
          return true;
        }
        node = node.next;
      }
      return false;
    }
  }

  toString (){
    let node = this.head ;
    let stringValues = '' ;

    if ( !node ){
      stringValues = 'NULL';
      return stringValues ;
    }
    else {
      while( node ){
        stringValues += `{${node.value}} ->`;
        node = node.next;
      }
      stringValues += 'NULL';
    }
    return stringValues ;
  }

  append( value ){
    if( !value ){
      throw new Error( 'insert value' );
    }
    let node = new Node( value );
    if( !this.head ){
      this.head = node;
    }
    else {
      let current = this.head;
      while( current.next !== null ){
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore( currentVal, value ){
    if( !currentVal && value ){
      throw new Error( 'insert value' );
    }
    let node = new Node( value );
    if( this.head === currentVal ){
      node.next = this.head;
      this.head = node;
    }
    else {
      let temp = this.head;
      while( temp.next !== null ){

        if( temp.next.currentVal === currentVal ){
          node.next = temp.next;
          temp.next = node;
          return;
        }
        temp = temp.next;
      }
      throw new Error( 'Exception' );
    }
  }

  
  insertAfter( currentVal, value ){
    if( !currentVal && value ){
      throw new Error( 'insert value' );
    }
    let node = new Node( value );
    if( this.head === currentVal ){
      this.head.next = node;
    } else{
      let temp = this.head;
      while( temp !== null ){
        if( temp.currentVal === currentVal ){
          node.next = temp.next;
          temp.next = node;
          return;
        }
        temp = temp.next;
      }
      throw new Error( 'Exception' );
    }
  }

  llkthFromEnd( k ){
  
    if( k===null||k<0 ){
      throw new Error( 'please insert k !!!' );
    }

    let current = this.head;
    let length = 0;
   
    while( current !== null ){
      current = current.next;
      length++;
    }

  
    if( k>length-1 ){
      throw new Error( 'k > length' );
    }
 
    let distance = length-k-1;
    current = this.head;
    while( distance !== 0 ){
      current = current.next;
      distance--;
    }
   
    return current;
  }
}


module.exports = LinkedList ;