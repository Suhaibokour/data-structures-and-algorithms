'use strict';

// access Node class
const Node = require( '../node.js' );

// access Linked list class
const LinkedList = require( '../LL.js' );

// require jest
const { expect, describe, it } = require( '@jest/globals' );


// start test
describe ( 'LinkedList', ()=>{

  //test when the linked list is empty
  it( 'should return empty linked list',()=>{
    //arrange
    let ll = new LinkedList() ;
    //assert
    expect( ll.head ).toBeNull();
  } );

  //test insert node into linked list
  it( 'should insert new node', ()=>{
    //arrange
    let value = 10 ;
    let ll = new LinkedList ( value );
    //act
    ll.insert( value );
    //assert
    expect( ll.head.value ).toBe( value );
  } );

  //test if the head property will properly point to the first node in the linked list
  it( 'The head property will properly point to the first node in the linked list',()=>{

  } );

  //test if we can insert multiple nodes into the linked list
  it( 'should insert multiple node into linked list',()=>{
    //arrange
    let ll = new LinkedList ();
    let value1 = 10;
    let value2 = 20;
    let value3 = 30;
    //act
    ll.insert( value1 );
    ll.insert( value2 );
    ll.insert( value3 );
    //assert
    expect( ll.includes( value1 ) ).toBeTruthy();
    expect( ll.includes( value2 ) ).toBeTruthy();
  } );

  //test when finding value will return true
  it( 'should return true when finding the value', ()=>{
    //arrange
    let ll = new LinkedList ();
    ll.insert( 10 );
    ll.insert( 20 );
    //act
    let test = ll.includes( 10 );
    //assert
    expect( test ).toBeTruthy();
  } );

  //test when not exist value will return false
  it( 'should return false when searching for not exist value', ()=>{
    //arrange
    let value = 10 ;
    let ll = new LinkedList ( value );
    //act
    let test = ll.includes( value );
    //assert
    expect( test ).toBe( false );
  } );

  //test if it's return all values in linked list
  it( 'should return all values in linked list', ()=>{
    //arrange
    let ll = new LinkedList ();
    ll.insert( 'a' );
    ll.insert( 'b' );
    ll.insert( 'c' );
    //act
    let test = ll.toString();
    //assert
    expect( test ).toEqual( '{a} ->{b} ->{c} ->NULL' );
  } );

  //test if add to the end
  it( 'should successfully add a node to the end',() => {
    //arrange
    let ll = new LinkedList();
    let val = 10;
    ll.insert( 1 );
    //act
    ll.append( val );
    //assert
    expect( ll.head.next.value ).toEqual( val );
  } );

  //test if add multiple nodes to the end
  it( 'should successfully add multiple nodes to the end',() => {
    //arrange
    let ll = new LinkedList();
    let value1 = 10;
    let value2 = 11;
    //act
    ll.insert( 1 );
    ll.append( value1 );
    ll.append( value2 );
    //assert
    expect( ll.head.next.value ).toEqual( value2 );
  } );

  //test if insert a node before a node located
  it( 'should successfully insert a node before a node located',() => {
    //arrange
    let ll = new LinkedList();
    ll.insert( 1 );
    ll.insert( 2 );
    ll.insert( 3 );
    ll.insert( 4 );
    //act
    ll.insertBefore( 3,5 );
    //assert
    expect( ll.head.next.value ).toEqual( 5 );
  } );

  //test if successfully insert a node before the first node
  it( 'should successfully insert a node before the first node',() => {
    //arrange
    let ll = new LinkedList();
    ll.insert( 6 );
    //act
    ll.insertBefore( 6,7 );
    //assert
    expect( ll.head.value ).toEqual( 7 );
  } );

  //test if successfully insert after a node in the middle
  it( 'should successfully insert after a node in the middle',() => {
    //arrange
    let ll = new LinkedList();
    ll.insert( 1 );
    ll.insert( 2 );
    ll.insert( 3 );
    //act
    ll.insertAfter( 2,4 );
    //assert
    expect( ll.head.next.next.value ).toEqual( 4 );
  } );

  //test if successfully insert a node after the last node
  it( 'should successfully insert a node after the last node',() => {
    //arrange
    let ll = new LinkedList();
    ll.insert( 1 );
    ll.insert( 2 );
    //act
    ll.insertAfter( 1,3 );
    //assert
    expect( ll.head.next.next.value ).toEqual( 3 );
  } );

  //test Where k is greater than the length of the linked list
  it( 'should return error when k is greater linked list',() => {
    //arrange
    let ll = new LinkedList();
    ll.insert( 5 );
    ll.insert( 6 );
    ll.insert( 7 );
    //act
    function notFound(){
      ll.llkthFromEnd( 8 );
    }
    //assert
    expect( notFound ).toThrow();
  } );

  //test Where k and the length of the list are the same
  it( 'should return false if the k equal the length of linked list',() => {
    //arrange
    let ll = new LinkedList();
    ll.insert( 5 );
    ll.insert( 6 );
    ll.insert( 7 );
    ll.insert( 8 );
    //act
    function notFound(){
      ll.llkthFromEnd( 8 );
    }
    //assert
    expect( notFound ).toThrow();
  } );

  //test Where k is not a positive integer
  it( 'should return error when the k is not a positive integer' ,() => {
    //arrange
    let ll = new LinkedList();
    ll.insert( 1 );
    ll.insert( 2 );
    ll.insert( 3 );
    //act
    function notFound(){
      let x = ll.llkthFromEnd( -1 );
      console.log( 'negative',x );
    }
    //assert
    expect( notFound ).toThrow();
  } );

  //test Where the linked list is of a size 1
  it( 'should test if the length of the linked list is of a size 1',() => {
    //arrange
    let ll = new LinkedList();
    ll.insert( 1 );
    //act
    let value = ll.llkthFromEnd( 0 );
    //assert
    expect( value.value ).toEqual( 1 );
  } );

  //test if Happy Path” where k is not at the end, but somewhere in the middle of the linked list
  it( 'should return the value except the end or the beginning',() => {
    //arrange
    let ll = new LinkedList();
    ll.insert( 1 );
    ll.insert( 2 );
    ll.insert( 3 );
    ll.insert( 4 );
    //act
    let value =  ll.llkthFromEnd( 2 );
    //assert
    expect( value.value ).toEqual( 2 );
  } );

} );