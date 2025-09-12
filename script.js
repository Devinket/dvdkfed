// JavaScript Document
console.log("hi");

const button = document.querySelector('button')

console.log(button)

button.addEventListener('click', ietsDoen)
/* kan ook long press zijn, of dubbel click etc */

function ietsDoen() {
    console.log("ik ben geclickt")
    button.classList.toggle('anders');
   /* button.classList.add('anders'); */
}

const deDerdeP = document.querySelector("li:nth-of-type(3) p");
console.log(deDerdeP)
/* stap 2 */
/* laat deDerdeP luisteren naar kliks */
/* en voer dan de functie veranderMezelf uit */

deDerdeP.addEventListener('click', veranderMezelf);

/* stap 3 */
/* maak de functie veranderMezelf aan */
/* voeg in de functie de class anders toe aan deDerdeP */

function veranderMezelf() {
  deDerdeP.classList.toggle("anders")
}