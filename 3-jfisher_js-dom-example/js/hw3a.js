
/*Julie Fisher for CSCIE3*/
/* hw3a.js  */
window.onload = function(){
"use strict";

// your solution here
    //get the DIV transcriptText from the HTML and define it a variable 
    var textAreaElement = document.getElementById("transcriptText");
    
    //get the HTML button element with id divideTranscript and assign it a variable
    var myButton = document.getElementById("divideTranscript").onclick = function(){
        
        //get the contents of the textarea and assign variable
        var myText = textAreaElement.innerHTML;
        
        //confirm what was retrieved
        console.log(myText);
        
        //Divide the text into an array of words with a RegExp, assign variable
        var splitText = myText.split(/\s+/);
        
        //confirm
        console.log(splitText);
        
        //clear out the text in the div
        textAreaElement.innerHTML = " ";

        //Iterate over length of the array 
        for (var i = 0; i < splitText.length; i++){         
            
            //create the new span elements and at each step, build them with the required attributes, assign variable
            
            var spanElement = document.createElement("span");
            spanElement.setAttribute("class", "word");
            spanElement.setAttribute("id", "word" + (i += 0));
                
            //confirm
            console.log(spanElement);

            //Create a new text node, append the split array words to the node
            var spanText = document.createTextNode(splitText[i]+" ");
                        
            spanElement.appendChild(spanText);

            //Add the SPAN elements to the original DIV 
            textAreaElement.appendChild(spanElement);
            }
                            
        //Add a handler to the SPAN elements, or to the DIV, which causes the style on the SPAN to change on mouseover

        //get the DIV element and add event listeners for mouseover and mouseout, call a function for each resulting action
        
        //mouseover = change background color of class word to highlight
        document.getElementById("transcriptText").addEventListener("mouseover", function(evt){
            if (evt.target.className == "word"){
                evt.target.style.backgroundColor = "yellow";}
            }, false);
        
        //mouseout change background color of class word back to white
        document.getElementById("transcriptText").addEventListener("mouseout", function(evt){
                evt.target.style.backgroundColor = "white";}, false);  
    }//onclick
}//window





