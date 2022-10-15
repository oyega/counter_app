const characters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1",
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"];

/*
at a click, 2 passwords should be generated. each passwords
 should be 15 characters long. add an input field where user can say 
 how many characters do you want in the password.
 add copy onclick, so that the user authomatically copy it
 when the pass words are clicked on.
 give a number of toggle options where users decide if
 they wanted symobols or numbers in their password or not -
 hint: split the numbers and alphabets and used them or not
 as the user wanted.
 */

 let passwordOne = document.getElementById("pass-word1")
 let passwordTwo = document.getElementById("pass-word2")
 function keyButton() {
  let containerOne = ""
  let containerTwo = ""
   for (let i = 0; i < 15; i++) {
      let randomNumberOne = characters[Math.floor(Math.random() * characters.length)]
      let randomNumberTwo = characters[Math.floor(Math.random() * characters.length)]
     containerOne += randomNumberOne
     containerTwo += randomNumberTwo 
   }
   passwordOne.textContent = containerOne
   passwordTwo.textContent = containerTwo
 }