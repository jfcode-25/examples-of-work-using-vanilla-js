/*Author: Julie Fisher for CSCIE3*/
/* hw3b.js */

//execute upon page load
window.onload = function(){
  "use strict";

//1
//Assignment Description: There are two password fields on the form. You will write code that ensures that: 1.Users must enter passwords of at least 8 characters. 2.The two fields must match. 3.Users receive feedback immediately if the passwords don't match, rather than only when the form is submitted.

//declare variables for the form and password input fields and 
var pwd1 = document.getElementById("pwd1");
var pwd2 = document.getElementById("pwd2");
var myForm = document.getElementById("myForm");

  //this function uses the onblur, onfocus and onkeyup events to trigger a test of the length of the value of the password entry fields and uses css styles to indicate validity to the user using red and green. A message displays in real time as the user types until the two password inputs match. The function prevents submit for input of less than 8 characters and prevents submit if only one field is filled in.
  
  function pwValidate (){
    //when user clicks or tabs out of the field, test for length and apply class invalid if not enough characters
    pwd1.onblur = function(e) {
      if (pwd1.value.length < 8) {
        pwd1.classList.add('invalid');
        alert("Please enter a password with at least 8 characters.");
        }
      };

    //get the second password field when the user clicks into the field and test for class
    pwd1.onfocus = function(e) {
      if (this.classList.contains('invalid')) {
        // remove the error color when the user clicks to re-enter a value into the field
        this.classList.remove('invalid');
        }
      };

    //get both password fields and compare them for a match
    pwd2.onkeyup = function(e) {
      if (pwd1.value ==
        pwd2.value) 
        {
        
        //if they match, apply green and write a message to the page
        pwdCheck.style.color = 'green';
        pwdCheck.innerHTML = 'Your password entries match.';
        
        //if they do not match, apply red and write the error message to the page
        } else {
          pwdCheck.style.color = 'red';
          pwdCheck.innerHTML = 'Your password entries do not match. Please try again.';
          }
          
          e.stopPropagation();
          }
    } //end pwValidate function
  
  //See end of page for code for Register Me submit button
  //function call
  pwValidate();

//2
//Assignment Description: There is a textarea on the form labeled Brief Bio. Your code will provide a countdown near the 140 character limit caption that counts backwards from 140 to zero to show users how many characters they have left.  You may make it so that once the limit is reached, no more characters show in the field, even if the user keeps typing. Alternatively, you may choose to let users keep typing, but have the page show users how far over the limit they've gone. 

//get the text area and assign a variable
var txt = document.getElementById("bio");

  // listen to count characters entered by keystroke (up), display remaining number till max, alert if > max, end alert if extra characters deleted
  txt.addEventListener("keyup", function () {
    bioText = document.getElementById("charsLeft").innerHTML = 140-this.value.length;
    if (bioText < 0){
      alert("Please enter no more than 140 characters.");
      }
  }); //end keyup event


//3
//Assignment Description: Sometimes a selection in a pull-down menu (an HTML SELECT) should populate another SELECT field with complimentary values. Your task is to make the two complimentary SELECT controls work in this way—selecting a value in the first populates the second with appropriate choices.

//declare variables of select drop downs
var sel1 = document.getElementById("firstSelect");
var sel2 = document.getElementById("secondSelect");

//JSON objects with "data" for the fields
var selectList = {
  "fabrics": ["Apparel", "Upholstery"]
  }

var selectList2 = {
  "apparel": ["silk", "wool", "knits", "other woven"]
  }

var selectList3 = {
  "upholstery": ["cotton duck", "wool", "leather", "synthetics"]
  }

 //Populate the select.  For each element create an <option> element, give it a text node that contains its label, set the 'value' attribute on the new <option element, add it to the <select> element. 

  for (var i = 0; i < selectList.fabrics.length; i++) {
    //create <option>
    var s = document.createElement("option");  
    // create text node
    var t = document.createTextNode(selectList.fabrics[i]);
    // add text node to <option>
    s.appendChild(t);
    // set value="" on the <option>
    s.setAttribute("value", selectList.fabrics[i]);
    // add the new <option> to the <select>
    sel1.appendChild(s);
    }
 
  //clear the second select when the first is changed       
  sel1.addEventListener("change", function(e) {
    var len = sel2.length;
    for (var i = len; i >= 1; i--) {
      sel2.remove(i);
      }

    if(e.target.name == "firstSelect") {    
      if(e.target.value == "Apparel") {  
      //if the value is Apparel, populate the second field with selectList2  
        for (var i = 0; i < selectList2.apparel.length; i++) {
        //create <option>
          var s = document.createElement("option");  
          // create text node
          var t = document.createTextNode(selectList2.apparel[i]);
          // add text node to <option>
          s.appendChild(t);
          // set value="" on the <option>
          s.setAttribute("value", selectList2.apparel[i]);
          // add the new <option> to the <select>
          sel2.appendChild(s);
        }
      }
    }
  
  //target the first field and determine its value
  if(e.target.name == "firstSelect") { 
    //if the value is Upholstery, populate the second field with selectList3   
    if(e.target.value == "Upholstery") {  
      for (var i = 0; i < selectList3.upholstery.length; i++) {
        //create <option>
        var u = document.createElement("option");  
        // create text node
        var v = document.createTextNode(selectList3.upholstery[i]);
        // add text node to <option>
        u.appendChild(v);
        // set value="" on the <option>
        u.setAttribute("value", selectList3.upholstery[i]);
        // add the new <option> to the <select>
        sel2.appendChild(u);
        }
      }
    }
  }); //end change event      
   
  // This part will react to user selections on our drop-down list
  // and write to the page
  sel2.addEventListener("change", function(e) {
    var val = this.value;
    document.getElementById('feedback').innerHTML = val + " is an excellent choice."
  }); //end change event


//4
//Assignment Description: Your form should have at least one subsection which will appear depending on the value selected in a checkbox, radio button or SELECT.

//declare viariables for the form and the radio buttons 
var form = document.getElementById("theForm")
var apparelForm = document.getElementById("apparelForm");
var upholtForm = document.getElementById("upholsteryForm");

  //listen for the change of the radio button and target the chosen field, then apply corresponding styles of block or none (like a toggle) to highlight each corresponding selection
  form.addEventListener("change", function(e) {
    if( e.target.name == "fabricSelect") {
      if (e.target.value == "apparelFabric") {
        apparelForm.style.display = "block";
        upholtForm.style.display = "none";
        } else {
          upholtForm.style.display = "block";
          apparelForm.style.display = "none";
          }
        }
    }); //end change event


//5
//Assignment Description: Phone number: For this field, the user may enter any ten-digit number in either xxx-xxx-xxxx, (xxx)xxx-xxxx or xxxxxxxxxx form. Your validation should confirm that it's a ten-digit number, regardless of the punctuation used, and format it in the input field as xxx-xxx-xxxx.  You may do this by applying the formatting live (difficult), or waiting until the user has finished typing in the field (onchange or onblur) and then reformat the string (easier).
//.........................................

//this code was modified from an opensource jsfiddle linked from stackoverflow. http://jsfiddle.net/rm9vg16m/ . It uses a function (phoneFormat) with an event listener to analyze characters entered into the phone form field and corrects to the format XXX-XXX-XXXX. It formats/re-formats the characters while they are entered including not allowing alpha characters and preventing zeros in the second set of three numerals. Applies to North American phone number format. Does not test for country code.
//..........................................

  function phoneFormat(input){
    // Strip all characters from the input except digits using a regular expression
    input = input.replace(/\D/g,'');

    // Trim the remaining input to ten characters, to preserve phone number format
    input = input.substring(0,10);

    // Based upon the length of the string, add formatting as necessary
    var size = input.length;
    if(size == 0) {
      input = input;
      } else if (size < 4) {
        input = input;
        } else if (size < 7) {
          input = input.substring(0,3)+'-'+input.substring(3,6);
          } else {
          input = input.substring(0,3)+- input.substring(3,6)+'-'+input.substring(6,10);
          }
          return input; 
    }

  //use an event listener to get the form field on keyup and run the function
  document.getElementById('phone').addEventListener('keyup', function(evt){
    var phone = document.getElementById('phone');
    phone.value = phoneFormat(phone.value);
  });


//6
//Assignment Description: Upon submitting the form, make sure that at least one of the Phone or Email fields are completed. One or the other, or both, may be filled in, but both cannot be blank. Provide a useful message to the user if they fail to complete one of these fields.

//code for for Resgister Me Submit button follows, including for submit of the password fields above

  //listen for the click (submit button) event and evaluate the inputs.
  submitBtn.addEventListener("click", function(e) {
  
    //display an alert if password inputs do not match. Match on submit is determined by the length of the second password field because the value.length in the first field is validated above when being input. 

    //the click (submit button) event function continues and evaluates validity of the email format using a regular expression that compares for characters present before and after an @ sign and a "dot" something at the end (.com, .net, etc).

    //click event function continues and tests that at least one of phone and/or email is entered and displays alert if they are both empty or if one is empty. If email is valid it is confirmed as entered. Display a message to the user if the submit fails showing the requirements and instructions to try input again. 
    
    if (pwd2.value.length < 8) {
      alert("Password entries must match before submit. Use at least 8 characters. Please enter your password again.");
      e.preventDefault();
      }

    //declare variable of the email field, apply regex, compare fields
    emailId = document.getElementById("emailId").value;
    var result = /.+@.+\..+/.test(emailId);
    
    if ((result == false) && (phone.value.length !== 12)) {
      alert("Please enter a valid email address. Format: abc@something.com (.net, .edu, etc.) OR enter your phone number as xxx-xxx-xxxx.")
       
      //write var = result to the console that tests for valid format (true or false result of /regex/.test(emailId)
      console.log(result);
      }

      //note: the form will submit if either or both phone and email are completed. However, if a phone number is entered correctly, but a non valid email is entered, HTML 5 gives the error to enter an email address even though phone is already entered.

  }); //end submit event

}; //close of window onload function







  