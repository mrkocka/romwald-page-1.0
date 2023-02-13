//Variables
let button = document.getElementById("button-js");
let icon = document.getElementById("butonIcon");
let textbutton = document.querySelector("#nav-list-JS");

//Event
button.addEventListener("click", Hmenu);
/* textbutton.addEventListener("click", Hmenu);
 */
function Hmenu() {
  textbutton.classList.toggle("active");
  if (textbutton.classList == "active") {
    icon.classList.toggle("bi-x-lg");
  } else {
    icon.classList.toggle("bi-x-lg");
  }
}

//--------------------------------------Pop Up ---------------------------------------

let close = document.getElementById("close-js");

window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    document.getElementById("popup-js").classList.toggle("popup-container");
  }, 2000);
});

close.addEventListener("click", cloesPopUp);

function cloesPopUp() {
  document.getElementById("popup-js").classList.toggle("popup-container");
}
