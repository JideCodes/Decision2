const body = document.querySelector("body");
const button = document.querySelector("button");
const items = ['Marxism', 'Codification', 'Sociological', 'Realism', 'Historical'];
let arr = document.querySelector("p");
let output = document.querySelector("h1");

arr.textContent = `The current options are: ${JSON.stringify(items)}`;

function randomDecision(){
  let index = Math.floor(Math.random() * items.length + 1);
  console.log(items[index]);
  return output.textContent = items[index];
}

button.addEventListener('click', randomDecision);
