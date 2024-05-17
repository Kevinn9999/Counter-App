let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");

let count = 0;

// document.getElementById("save-btn").addEventListener("click", function() {
//   console.log(0);
// });

console.log(saveEl)

function increment() {
  count = count + 1;
  countEl.textContent = count;
}

function save() {
  let previousEnteries = count + ' - '
  saveEl.textContent += previousEnteries
  countEl.textContent = 0
  count = 0
 
  console.log(count);
}






let welcomeMessage = document.getElementById('testp');

let name = 'Kevin'
let greeting = 'Welcome back '

welcomeMessage.innerText = greeting + name;
welcomeMessage.innerText += "👋"

