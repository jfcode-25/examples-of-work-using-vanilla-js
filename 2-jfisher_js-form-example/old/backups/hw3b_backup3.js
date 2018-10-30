/*Author: Julie Fisher for CSCIE3*/
/* hw3b.js */

window.onload = function(){

//1
//*There are two password fields on the form. You will write code that ensures that:
    //1.Users must enter passwords of at least 8 characters.
    //2.The two fields must match.
    //3.Users receive feedback immediately if the passwords don't match, rather than only when the form is submitted.

//This code has been modified from a tutorial on http://www.the-art-of-web.com/javascript/validate-password/

var pwd1 = document.getElementById("pwd1");
console.log(pwd1);
var pwd2 = document.getElementById("pwd2");
console.log(pwd1);
var myForm = document.getElementById("myForm");
console.log(myForm);
//var error = document.getElementById("pwd1Hint");
input = document.getElementById("input");
console.log(input);

function myFunction (){

    document.getElementById("myForm");
    console.log("myFunction is here");


pwd1.onblur = function() {
  if (myForm.pwd1.value.length < 8 ) { 
    pwd1.classList.add('invalid');
    console.log("hi");
    //document.getElementById("hint").innerHTML = 'Please enter a password with 8 or more characters.';
 }
  };

pwd1.onfocus = function() {
  if (this.classList.contains('invalid')) {
    
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
       //document.getElementById("hint").innerHTML = '';
  }
};

pwd2.onblur = function() {
  //if (myForm.pwd2.value.length < 8 ) { 
   // pwd2.classList.add('invalid');
    //console.log("hi2");

 if (myForm.pwd2.value = "1"){

    //myForm.pwd1.value != "" && myForm.pwd1.value != myForm.pwd2.value){
    pwd2.classList.add('match');
    console.log("hi3");
  }
    //document.getElementById("hint").innerHTML = 'Please enter a password with 8 or more characters.';
};

pwd2.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');

    //document.getElementById("hint").innerHTML = '';
 }
};

}
myFunction();








 //if(fillin.pwd1.value != "" && fillin.pwd1.value == fillin.pwd2.value) {
      //if(fillin.pwd1.value.length < 8) {
        //alert("Please enter at least eight characters for Password.");
      
//if(fillin.pwd1.value != "" && fillin.pwd1.value != fillin.pwd2.value)

//alert("You entered a valid password: " + fillin.pwd1.value);
    //return true;
   





//2
//***There is a textarea on the form labeled Brief Bio. This is going to be really brief. Your code will provide a countdown near the 140 character limit caption that counts backwards from 140 to zero to show users how many characters they have left.  You may make it so that once the limit is reached, no more characters show in the field, even if the user keeps typing. Alternatively, you may choose to let users keep typing, but have the page show users how far over the limit they've gone. 

var txt = document.getElementById("bio");
console.log(txt);
// listen to count characters entered by keystroke (up), display remaining number till max, alert if > max, end alert if extra characters deleted

txt.addEventListener("keyup", function () {
    bioText = document.getElementById("charsLeft").innerHTML = 140-this.value.length;
     if (bioText < 0){
       alert("Please enter no more than 140 characters.");
        }
    //console.log(this.value.length);
    //console.log(bioText);
});


//3
//***Sometimes a selection in a pull-down menu (an HTML SELECT) should populate another SELECT field with complimentary values.  For example, if we're selecting cars, picking "Ford" in the Make field should populate the Model field with Ford models, such as the Focus, the Fusion, and the Flex, while picking "Dodge" might populate the Model field with values that include Charger, Challenger, and Caravan.

//Your task is to make the two complimentary SELECT controls work in this way—selecting a value in the first populates the second with appropriate choices. The types of values are entirely up to you— automobile Make/Model is just an example.

//declare variable
var sel1 = document.getElementById("firstSelect");
console.log(sel1);

var selectList = {
     "fabrics": ["Apparel", "Upholstery", "Retail", "Professional"]
 }

 /*  First, populate the select.  
     For each element in the "selectList.fruits" array,
      we will create an <option> element, give it a
      text node that contains its label, set the 
      'value' attribute on our new <option> element, and 
      finally, add it to the <select> element. 
 */
for (var i = 0; i < selectList.fabrics.length; i++) {
//create <option>
     var s = document.createElement("option");  
     // create text node
     var t = document.createTextNode(selectList.fabrics[i]);
     console.log(t);
     // add text node to <option>
     s.appendChild(t);
     console.log(s);
     // set value="" on the <option>
     s.setAttribute("value", selectList.fabrics[i]);
     // add the new <option> to the <select>
     sel1.appendChild(s);
     console.log(sel1);

// This part will react to user selections on our drop-down list
// and write to the page
  sel1.addEventListener("change", function(e) {
     var val = this.value;
    document.getElementById('feedback').innerHTML = val + "s are good!"
     });
}



//4
//***Your form should have at least one subsection which will appear depending on the value selected in a checkbox, radio button or SELECT. For example, if the user selected a checkbox called "add my Twitter account", a section of the form will appear prompting the user for their Twitter username. You may add this feature anywhere on the form.

var f = document.getElementById("theForm")
var ff = document.getElementById("fruitForm");
var vf = document.getElementById("vegForm");

    f.addEventListener("change", function(e){
        if( e.target.name == "fOrV"){
            if (e.target.value == "fruits") {
                ff.style.display = "block";
                vf.style.display = "none";
            }else{
                vf.style.display = "block";
                ff.style.display = "none";
            }
        }
    });
//

//RegEx 10 digit phone number of digits without hyphen: /\d{10}/ , /\d{3}-\d{3}-\d{4}-/
//debuggex.com
//email /.+@.+\..+/  for only .edu /.+@.+\..+edu$

//5
//*Phone number: While it's easy to validate a phone number to make sure it matches the HTML5 validation pattern, it is even better is to reformat one to make it match. For this field, the user may enter any ten-digit number in either xxx-xxx-xxxx, (xxx)xxx-xxxx or xxxxxxxxxx form. 
//Your validation should confirm that it's a ten-digit number, regardless of the punctuation used, and format it in the input field as xxx-xxx-xxxx.  You may do this by applying the formatting live (difficult), or waiting until the user has finished typing in the field (onchange or onblur) and then reformat the string (easier). It's up to you.


//6
//Upon submitting the form, make sure that at least one of the Phone or Email fields are completed. One or the other, or both, may be filled in, but both cannot be blank. Provide a useful message to the user if they fail to complete one of these fields.

};///window







  