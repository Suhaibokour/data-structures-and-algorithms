'use strict';

const Node = require( '../node.js' );

const LinkedList = require( '../LL.js' );

const { expect, describe, it } = require( '@jest/globals' );

describe ( 'LinkedList', ()=>{

  it( 'should return empty linked list',()=>{

    let ll = new LinkedList() ;
   
    expect( ll.head ).toBeNull();
  } );

  it( 'should insert new node', ()=>{
 
    let value = 10 ;
    let ll = new LinkedList ( value );

    ll.insert( value );
 
    expect( ll.head.value ).toBe( value );
  } );

  
  it( 'The head property will properly point to the first node in the linked list',()=>{

  } );

  it( 'should insert multiple node into linked list',()=>{
   
    let ll = new LinkedList ();
    let value1 = 10;
    let value2 = 20;
    let value3 = 30;
    
    ll.insert( value1 );
    ll.insert( value2 );
    ll.insert( value3 );
    
    expect( ll.includes( value1 ) ).toBeTruthy();
    expect( ll.includes( value2 ) ).toBeTruthy();
  } );

  it( 'should return true when finding the value', ()=>{
 
    let ll = new LinkedList ();
    ll.insert( 10 );
    ll.insert( 20 );
  
    let test = ll.includes( 10 );
   
    expect( test ).toBeTruthy();
  } );

  it( 'should return false when searching for not exist value', ()=>{
   
    let value = 10 ;
    let ll = new LinkedList ( value );

    let test = ll.includes( value );
    
    expect( test ).toBe( false );
  } );

  it( 'should return all values in linked list', ()=>{
  
    let ll = new LinkedList ();
    ll.insert( 'a' );
    ll.insert( 'b' );
    ll.insert( 'c' );

    let test = ll.toString();
  
    expect( test ).toEqual( '{a} ->{b} ->{c} ->NULL' );
  } );

  it( 'should successfully add a node to the end',() => {
  
    let ll = new LinkedList();
    let val = 10;
    
    ll.append( val );
   
    expect( ll.head.next.value ).toEqual( val );
  } );

  it( 'should successfully add multiple nodes to the end',() => {
    
    let ll = new LinkedList();
    let value1 = 10;
    let value2 = 11;
 
    ll.append( value1 );
    ll.append( value2 );
 
    expect( ll.head.next.value ).toEqual( value2 );
  } );

  it( 'should successfully insert a node before a node located',() => {
    
    let ll = new LinkedList();
    ll.insert( 1 );
    ll.insert( 2 );
    ll.insert( 3 );
    ll.insert( 4 );
  
    ll.insertBefore( 3,5 );
    
    expect( ll.head.next.value ).toEqual( 5 );
  } );

  it( 'should successfully insert a node before the first node',() => {
 
    let ll = new LinkedList();
    ll.insert( 6 );
 
    ll.insertBefore( 6,7 );

    expect( ll.head.value ).toEqual( 7 );
  } );

  it( 'should successfully insert after a node in the middle',() => {

    let ll = new LinkedList();
    ll.insert( 1 );
    ll.insert( 2 );
    ll.insert( 3 );
   
    ll.insertAfter( 2,4 );
    
    expect( ll.head.next.value ).toEqual( 4 );
  } );

  it( 'should successfully insert a node after the last node',() => {
    
    let ll = new LinkedList();
    ll.insert( 1 );
    ll.insert( 2 );
   
    ll.insertAfter( 1,3 );
  
    expect( ll.head.next.next.value ).toEqual( 3 );
  } );
  
} );