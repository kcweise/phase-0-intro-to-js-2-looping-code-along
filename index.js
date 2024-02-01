const names = ["Guadalupe", "Ollie ", "Aki"];
const newMessage = []

function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    newMessage.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    
}
console.log(newMessage)
  return newMessage;
}


function countDown(number){
    for (let i = number; i>=0; i--)
    {
    console.log(i)}
    return number
    }

