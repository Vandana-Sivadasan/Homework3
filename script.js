//generate password:
function generate(){

//set password length/complexity:

let complexity = document.getElementByID("Your secure password").value;

//possible password values:

let values =  "ABcdderrttuuu23344@$%#!*&?12344dttADDT";
let password = "";

//create forloop to choose password characters:

for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random) * Math.floor(values.length - 1));
 
}
//add password to text box/display area:
document.getElementById("dispaly").values = password;

//add password to previously generated passwords section
document.getElementById("lastNums").innerHTML += password + "<br />";
}
//set default length display of 25:
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position:
document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").nnerHTML = "Length:"+ document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1"
    }

//function to Copy password to clipboard
function copyPassword(){
    document .getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");
}