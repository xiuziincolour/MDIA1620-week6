const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

//determine a proper parameter variable name
function CheckDrinkingAge(age){

   /* planning and design */
   // The function will accept the person's age as an argument.
   // The question should be "If you wnat to enter the bar, I need to know how old you are." and check their age.
   //if they are under 19, show "You should leave."
   //if they are between 19 to 50, then "Drink away."
   //if they are over 50, then "It's not healthy."
   //if they are over 70, then "Dringking cause death."

  if (age<=19) {
  console.log("You should leave.");
  }
  else if (age > 19 && age <= 50) {
    console.log("Drink away.")
  }
  else if (age > 50 && age <= 70){
      console.log("It's not healthy.")
  }
  else if (age > 70){
      console.log("Drinking cause death.")
  }
}

//ask the question
readline.question('If you wnat to enter the bar, I need to know how old you are. ', age => {

  CheckDrinkingAge(number(age));
  
  readline.close();
});

//looks good!
