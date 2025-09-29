var hamburgerbutton = document.querySelector(".mobiel-nav ul li > button")



// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit

hamburgerbutton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav


function openMenu() {
  var nav = document.querySelector("header > nav:nth-of-type(4)")
  nav.classList.toggle('toonMenu');



  setTimeout(function() {
    sluiten.style.backgroundColor = ""; // verwijdert de inline stijl → originele CSS pakt weer
  }, 300);

}








/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
var sluiten =
document.querySelector("header > nav:nth-of-type(4) > button")

// stap 2 - laat die button luisteren naar kliks
sluiten.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav

function sluitMenu() {
  console.log ("ik probeer te sluiten")
  var nav = document.querySelector("header > nav:nth-of-type(4)")
  nav.classList.remove('toonMenu');

  sluiten.style.backgroundColor = "rgba(0, 0, 0, 0)"
}







/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
var sluiten2 =
document.querySelector("header > nav:nth-of-type(4) > section > ul:nth-of-type(2) > li > button")

// stap 2 - laat die button luisteren naar kliks
sluiten2.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
