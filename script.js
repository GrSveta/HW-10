const div = document.querySelector(".txt");
const textarea = document.querySelector('#txtarea');
       
function Increase() {
  textarea.style.fontSize=parseInt(textarea.style.fontSize) + 5 +'px';
}
function Decrease() {
textarea.style.fontSize=parseInt(textarea.style.fontSize) - 5 +'px';
}

let btnColor = document.querySelectorAll(".bgcolor");
function btn (a) {
textarea.style.backgroundColor = btnColor [a].value;
}
let btnTextColor =document.querySelectorAll(".txtcolor");
function btn2 (b) {
textarea.style.color = btnTextColor [b].value;}