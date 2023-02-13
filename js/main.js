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
