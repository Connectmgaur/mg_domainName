/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello World!");
/* eslint-disable */

/* eslint-disable */
window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];

  function generateDomainNames() {
    let outputElement = document.getElementById("output");

    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adjectives.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
          let domainName =
            pronouns[i] + adjectives[j] + nouns[k] + ".com" + ".ie";
          outputElement.innerHTML += domainName + "<br>";
        }
      }
    }
  }

  generateDomainNames();
};
