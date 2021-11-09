'use strict';

// access Node class
const Node = require( '../node.js' );


// start test
describe( 'node class', ()=>{
  it ( 'should create new Node obj',()=>{
    //arrange
    let value = 10 ;

    //act
    let node = new Node ( value );

    //assert
    expect( node.value ).toBe( 10 );
    expect( node.next ).toBe( null );
  } );
} );