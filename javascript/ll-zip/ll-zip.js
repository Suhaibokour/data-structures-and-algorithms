'use strict';

const Node = require ( '../../code-challenge5/node.js' );

const LinkedList = require ( '../../code-challenge5/LL.js' );

function zipLists( ll1,ll2 ){

  let newLinkedList = new LinkedList () ;

  let val = ll1.head ;
  let val2 = ll2.head;

  if ( val===null && val2===null ){
    throw new Error( 'please input linked list' );
  }

  else {
  
    while( val || val2 ){

      if ( val ){
      
        newLinkedList.append( val.value );
     
        val = val.next ;
      }

      if ( val2 ) {
    
        newLinkedList.append( val2.value );
       
        val2 = val2.next ;
      }

    }
    console.log( newLinkedList.toString() );
    
    return newLinkedList.toString ();
  }
}

module.exports = zipLists ;