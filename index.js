const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
decorator.addEventListener("click", deckTheHalls)
const left = document.getElementById("left");
const right = document.getElementById("right");
const buttons = document.getElementById("buttons");

left.addEventListener("click", LeftChange);
right.addEventListener("click", RightChange);

var first = document.getElementById("first");
var second = document.getElementById("second");


buttons.hidden = true;
first.hidden = true;
second.hidden = true;
left.hidden = true;
right.hidden = true;


const emoji = ['👶', '👼' ,'🎅','🤶','🧑','🧝','🧝‍♂️','🧝‍♀️','👪','🦌','🍪','🥛','🍷','⛪','🌟','❄️','☃️','⛄','🔥','🎄','🎁','🧦','🔔','🎶','🕯️'];
console.log(emoji.length);
first.innerHTML = emoji[14];
var index = 0;

function deckTheHalls() {
  
    buttons.hidden = false;
    left.hidden = false;
    right.hidden = false;
  if (decorator.checked == true)
  {
     
      house.innerHTML = first.innerHTML + house.innerHTML + second.innerHTML;
     
  }
  else{
    buttons.hidden = true;
    first.hidden = true;
    second.hidden = true;
    left.hidden = true;
    right.hidden = true;
    
    house.innerHTML = "🏡";
  }
    }  
 

    //Functionality for left span element change from an array
 function LeftChange() {
    house.innerHTML ='🏡';
    index++;
    index %= emoji.length
    console.log(emoji[index]);
    first.innerHTML = emoji[index];
    house.innerHTML = first.innerHTML + house.innerHTML + second.innerHTML;
    
}
//Functionality for right span element change from an array
function RightChange() {
    house.innerHTML = '🏡';
    index++;
    index %= emoji.length
    console.log(emoji[index]);
    second.innerHTML = emoji[index];
    house.innerHTML = first.innerHTML + house.innerHTML + second.innerHTML; 
    
}
// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
