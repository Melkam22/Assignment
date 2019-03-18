
                    /* exercices to be rendered on Node.js */

let firstName = "John";
let secondName = "Smith";
let job = "Teacher";
let age = "43";
let familyStatus = "married";
let placeOfResidence = "Berlin and Addis";
let hobby = "football, travel, music, movies, books etc."
let favoriteClub = "Arsenal-FC";
let favoriteDish = "Mendi";
let mySingers = "Bob, 2pac, Burning spear, "


console.log(firstName, secondName);
console.log(job);
console.log(age);
console.log(familyStatus);
console.log(placeOfResidence);
console.log(hobby);
console.log(favoriteClub);
console.log("difficult for me to name one, but " + favoriteDish 
+ " is what I have right now in mind.");
console.log(mySingers + " are some of my all time best Singers.");


            /* exercises to be rendered on the browser */

let movie = prompt ("What is your favorite movie?");
alert ("wowww  " + movie + " is my favorite movie too.");

let name = prompt ("what is your name?");
confirm ("Hello " + name + " nice to meet you!");

let salary = prompt ("How much is you earn per month?");
if(salary<1200) {prompt("you are poor man.");}
if(salary<=1700) {prompt("you are doing ok.");}
if(salary<=2500) {prompt("you are a middle income person.");}
else{prompt("you are rich!");}
