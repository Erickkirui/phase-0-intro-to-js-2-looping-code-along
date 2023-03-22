// Code your solutions in this file
// create the string
const gifters = ["Guadalupe", "Ollie", "Aki"]


/// write card function
function writeCards(gifters) {
  const messages = [];
  for (let i = 0; i < gifters.length; i++) {
    let message = `Thank you, ${gifters[i]}, for the wonderful surprise gift!`;
    messages.push(message);
  }
  return messages;
}

const thankYouMessages = writeCards(gifters);
//console.log(thankYouMessages);


//Assignment 2 while loop 

let num = ""
function countDown(num){
while( num >= 0){
   console.log(num)
    num --
}
}



