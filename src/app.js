import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(){

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'on my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  // This fuction picks a random string from a certain array
  const RandomWords = (str) => { return Math.floor(Math.random()*str.length);}

  // This fuction concatenates the random strings from the arrays forming a phrase.
  const getExcuse = who[RandomWords(who)]+" "+action[RandomWords(action)]+" "+what[RandomWords(what)]+" "+when[RandomWords(when)]+".";

  // This fuction displays the phrase in the HTML
  document.getElementById("excuse").innerHTML = getExcuse;
};
