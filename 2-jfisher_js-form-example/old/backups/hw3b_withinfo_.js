//Julie Fisher CSCIE3
/* hw3b.js */

window.onload = function(){

//testing
//console.log(document.getElementById("theForm").id);
console.log(document.forms[0].id);
//console.log(document.forms["firstform"].id);

var f = document.forms[0];

	console.log(f[0].id);
	console.log(f["name"].id);

	var els = f.elements;
	for(var i=0; i<els.length;i++){
	console.log("for loop:"+els[i].name);

	Array.prototype.forEach.call(els, function(e){
	console.log("proto:" +e.name);
	});
}

var ageInput = document.forms[0].age;
var ageHint = document.getElementById("agehint");

ageInput.addEventListener("input", function(){
	if (!this.validity.valid){
		console.log("Too high:" + this.validity.rangeOverflow);
		console.log("Too low:" + this.validity.rangeOverflow);
	} else if (this.validity.rangeUnderflow) {
		agehint.innerHTML = 'Number is too low';
	} else {
		agehint.innerHTML = '';
	}
}
});

var txt = document.getElementById("bio");

//events, length property and writing to DOM to make a counter

txt.addEventListener("keyup", function(){
	document.getElementById("chars").innerHTML = this.value.length;
//jsfiddle
});
}
//testing end

//1
//***Your form should have at least one subsection which will appear depending on the value selected in a checkbox, radio button or SELECT. For example, if the user selectsed a checkbox called "add my Twitter account", a section of the form will appear prompting the user for their Twitter username. You may add this feature anywhere on the form.


//2
//***There is a textarea on the form labeled Brief Bio. This is going to be really brief. Your code will provide a countdown near the 140 character limit caption that counts backwards from 140 to zero to show users how many characters they have left.  You may make it so that once the limit is reached, no more characters show in the field, even if the user keeps typing. Alternatively, you may choose to let users keep typing, but have the page show users how far over the limit they've gone. 




//3
//*Phone number: While it's easy to validate a phone number to make sure it matches the HTML5 validation pattern, it is even better is to reformat one to make it match. For this field, the user may enter any ten-digit number in either xxx-xxx-xxxx, (xxx)xxx-xxxx or xxxxxxxxxx form. 
//Your validation should confirm that it's a ten-digit number, regardless of the punctuation used, and format it in the input field as xxx-xxx-xxxx.  You may do this by applying the formatting live (difficult), or waiting until the user has finished typing in the field (onchange or onblur) and then reformat the string (easier). It's up to you.




//4
//*There are two password fields on the form. You will write code that ensures that:
	//1.Users must enter passwords of at least 8 characters.
	//2.The two fields must match.
	//3.Users receive feedback immediately if the passwords don't match, rather than only when the form is submitted.






//5
//***Sometimes a selection in a pull-down menu (an HTML SELECT) should populate another SELECT field with complimentary values.  For example, if we're selecting cars, picking "Ford" in the Make field should populate the Model field with Ford models, such as the Focus, the Fusion, and the Flex, while picking "Dodge" might populate the Model field with values that include Charger, Challenger, and Caravan.

//Your task is to make the two complimentary SELECT controls work in this way—selecting a value in the first populates the second with appropriate choices. The types of values are entirely up to you— automobile Make/Model is just an example.

//declare variable
var sel1 = document.getElementById(firstselect);

var selectList = {
     "fruits": ["Apple", "Banana", "Grapefruit", "Plantain"]
 }


 /*  First, populate the select.  
     For each element in the "selectList.fruits" array,
      we will create an <option> element, give it a
      text node that contains its label, set the 
      'value' attribute on our new <option> element, and 
      finally, add it to the <select> element. 
 */
 for (var i = 0; i < selectList.fruits.length; i++) {
     //create <option>
     var s = document.createElement("option");  
     // create text node
     var t = document.createTextNode(selectList.fruits[i]);
     // add text node to <option>
     s.appendChild(t);
     // set value="" on the <option>
     s.setAttribute("value", selectList.fruits[i]);
     // add the new <option> to the <select>
     sel1.appendChild(s);

// This part will react to user selections on our drop-down list
// and write to the page
  sel1.addEventListener("change", function(e) {
     var val = this.value;
     document.getElementById('feedback').innerHTML = val + "s are good!"
 });



//create <option>



//create text node



//add text node to <option>




//set value="" on the <option>





//add the new <option> to the <select>




////////////////////////////////////
//Begin code from Crunchify
//http://crunchify.com/javascript-function-to-validate-email-password-fields-on-from-submit-event/
//Thanks for this code goes to App Shah who is the founder of crunchify.com

function IsEmpty(objectfield,stringfield)
{
    objectvalue = objectfield.value.length;
    if(objectvalue=="")
    {
        alert("Oops.. Please fill out the value of "+stringfield);
        objectfield.style.background = 'Yellow';
        return false;
    }
    else
        return true;
}

function validate_email(email,alerttxt)
{
    with (field)
    {
        apos=value.indexOf("@");
        dotpos=value.lastIndexOf(".");
        if (apos<1||dotpos-apos<2){
            alert(alerttxt);return false;
        }
        else {
            return true;
        }
    }
}

function validatePassword(psd1) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers
 
    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
 
    } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
        error = "The password is the wrong length. \n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
 
    } else if (illegalChars.test(fld.value)) {
        error = "The password contains illegal characters.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
 
    } else if ( (fld.value.search(/[a-zA-Z]+/)==-1) || (fld.value.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
 
    } else {
        fld.style.background = 'White';
    }
   return true;
}


//RegEx 10 digit phone number of digits without hyphen: /\d{10}/ , /\d{3}-\d{3}-\d{4}-/
//debuggex.com
//email /.+@.+\..+/  for only .edu /.+@.+\..+edu$







//end crunchify code



