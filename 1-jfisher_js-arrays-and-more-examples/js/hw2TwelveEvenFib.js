//Author: Julie Fisher for E3 Javascript
/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");
//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
  document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum( );
}
 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */
var a = 0;
var b = 1;
var c = 0;
var n = 0;
var s = 0;
function twelveEvenFibonacciSum(){
  /// WRITE YOUR CODE HERE
  do{ 
    if (a%2 == 0){
    n = n + 1;
    s = s + a;
  }
  c = b;
  b = a;
  a = b + c;
  }
  while (n <= 11);
  console.log(s);
  return (s);
}





