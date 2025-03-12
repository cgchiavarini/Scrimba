const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passOne = document.getElementById("pw1");
let passTwo = document.getElementById("pw2");

function generate() {
   let rand1 = [];
   let rand2 = [];
    for (let i = 0; i <15; i++) {
    rand1 += characters[Math.floor(Math.random() * characters.length)]
    rand2 += characters[Math.floor(Math.random() * characters.length)]
    }
    passOne.textContent = rand1;
    passTwo.textContent = rand2;
}
