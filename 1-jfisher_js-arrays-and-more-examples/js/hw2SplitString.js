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
  * Third problem: Splitting a String
  *
  ********************************************************************/

var splitName = document.getElementById("splitName");
splitName.onclick = function(){
  var fullname = document.getElementById("fullName").value;
               /*
                *  We've gotten the fullname from the HTML form field.
                *  Your job is to use the String.slice(), String.substring() or String.substr() functions
                *  to divide your name into separate first and last name strings and assign
                *  them to the variables provided. You may
                *  need String.indexOf() as well.
                *
                *  You may not hardcode the position of where to split the string. Your code should
                *  work for anyone's first and last name. If the user enters a name without any whitespace
                *  return that as firstname and leave lastname blank.
                *
                *  If a name has more than one whitespace (as in, using one or more middle names),
                *  make the first name 'firstname' and assign the rest to 'lastname'
                *
                **/
  var str = fullname;
  var res = str.split(" ", str.length);
    console.log(res);
  var firstname = res [0];
    console.log(res [0]);
  var placeholder = res.splice([1]);
  var lastname = placeholder.join(' ');
    console.log(lastname);
  document.getElementById("firstname").innerHTML = firstname;
  document.getElementById("lastname").innerHTML = lastname;
}