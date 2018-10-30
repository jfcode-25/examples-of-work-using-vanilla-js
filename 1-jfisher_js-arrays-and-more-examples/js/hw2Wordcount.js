//Author: Julie Fisher for E3 Javascript
var myTextareaElement = document.getElementById('myWordsToCount');
var mywordcount = document.getElementById('wordcount');
console.log(mywordcount);
myTextareaElement.onkeyup = function(){
  // your code goes here
  //get the contents of the textarea
  var x = myWordsToCount.value;
  mywordcount.innerHTML = x.split(/\s+/).length - 1;
  //mywordcount.innerHTML = x.split(" ").length - 1;  
}