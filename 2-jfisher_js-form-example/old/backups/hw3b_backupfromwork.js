/* hw3b.js */
window.onload = function() {
 

var pwd1 = document.getElementById("pwd1");
console.log(pwd1);
var pwd2 = document.getElementById("pwd2");
console.log(pwd1);
var myForm = document.getElementById("myForm");
console.log(myForm);
//var error = document.getElementById("pwd1Hint");
input = document.getElementById("input");
console.log(input);

//<div id="error"></div>
function myFunction (){

	document.getElementById("myForm");
	console.log("myFunction is here");

input.onblur = function() {
  if (myForm.input.value.length < 8) { 
    input.classList.add('invalid');
    //error.innerHTML = 'Please enter a correct email.'
  }
};

input.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    //error.innerHTML = "";
}
};


pwd1.onblur = function() {
  if (myForm.pwd1.value.length < 8 ) { 
    pwd1.classList.add('invalid');
    console.log("hi");
    document.getElementById("hint").innerHTML = 'Please enter a password with 8 or more characters.';
 }
  };

pwd1.onfocus = function() {
  if (this.classList.contains('invalid')) {
    
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
       document.getElementById("hint").innerHTML = '';
  }
};

pwd2.onblur = function() {
  if (myForm.pwd2.value.length < 8 ) { 
    pwd2.classList.add('invalid');
    //if (myForm.pwd2.value != myForm.pwd1.value) { 
    pwd2.classList.add('invalid');
    document.getElementById("hint").innerHTML = 'Please enter a password with 8 or more characters.';
 }
  };

pwd2.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    document.getElementById("hint").innerHTML = '';
  }
  
};
//};

};
myFunction();


 //var re = /[A-Za-z -']$/;



//document.getElementById("text").addEventListener("onblur", function myFunction() {

//alert("Input field lost focus.");

///});

 //var pwd1 = document.getElementById("pwd1");
 //console.log(pwd1);
 //var pwd2 = document.getElementById("pwd2");
 //console.log(pwd1);
 //var myForm = document.getElementById("myForm");
 //console.log(myForm);

//myForm.addEventListener("onblur", function myFunction (){

	//if(re.test(document.getElementById(pwd1).value)){
		//if(document.getElementById("pwd1").value.length < 8){
        // Style green
       //alert("less than");
       //document.getElementById(pwd1).style.background ='#ccffcc';
        // Hide error prompt
       //document.getElementById(pwd1 + 'Error').style.display = "none";
       //return true;
     //}else{
        // Style red
      //document.getElementById(pwd1).style.background ='#e35152';
       // // Show error prompt
        //document.getElementById(pwd1 + 'Error').style.display = "block";
        //return false; 
      //};
//});//submit

  

};//window

     