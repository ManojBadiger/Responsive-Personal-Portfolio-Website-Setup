/* ----- RESPONSIVE NAVIGATION BAR FUNCTION ----- */
function responsiveMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");
  var menuIconChange = document.getElementById("menu-change");

  if(menuBtn.className === "menu-container"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "menu-container";
  }
  if(menuIconChange.className === "ri-menu-2-line"){
    menuIconChange.classList.remove("ri-menu-2-line");
    menuIconChange.classList.add("ri-close-line");
  } else {
    menuIconChange.classList.remove("ri-close-line");
    menuIconChange.classList.add("ri-menu-2-line");
  }
}

/* ----- TOGGLE THEME ----- */
