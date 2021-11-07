'use strict';

const Node = require( '../node.js' );

describe( 'node class', ()=>{
  it ( 'should create new Node obj',()=>{
  
    let value = 10 ;
    
    let node = new Node ( value );
    
    expect( node.value ).toBe( 10 );
    expect( node.next ).toBe( null );
  } );
} );