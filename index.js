const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
decorator.addEventListener("click", deckTheHalls)
var left = document.getElementById("left");
var right = document.getElementById("right");
left.addEventListener("click", LeftChange);
right.addEventListener("click", RightChange);

var first = document.getElementById("first");
var second = document.getElementById("second");



first.hidden = true;
second.hidden = true;
left.hidden = true;
right.hidden = true;


const emoji = ['👶', '👼' ,'🎅','🤶','🧑','🧝','🧝‍♂️','🧝‍♀️','👪','🦌','🍪','🥛','🍷','⛪','🌟','❄️','☃️','⛄','🔥','🎄','🎁','🧦','🔔','🎶','🕯️'];
console.log(emoji.length);
first.innerHTML = emoji[14];
var index = 0;

function deckTheHalls() {
    left.hidden = false;
    right.hidden = false;
  if (decorator.checked == true)
  {
     
      house.innerHTML = first.innerHTML + house.innerHTML + second.innerHTML;
     
  }
  else{
    house.innerHTML = "🏡";
  }
    }  
 


 function LeftChange() {
    house.innerHTML ='🏡';
    index++;
    index %= emoji.length
    console.log(emoji[index]);
    first.innerHTML = emoji[index];
    house.innerHTML = first.innerHTML + house.innerHTML + second.innerHTML;
    
}

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