import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(){
  //write your code here

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'on my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let RandomWords = (str) => { return Math.floor(Math.random()*str.length);}

  let getExcuse = who[RandomWords(who)]+" "+action[RandomWords(action)]+" "+what[RandomWords(what)]+" "+when[RandomWords(when)]+".";

  document.getElementById("excuse").innerHTML = getExcuse;
};
