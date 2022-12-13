
const menuItems = document.querySelectorAll(".nav__menuItem");
const hamburger=document.querySelector(".nav__hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon=document.querySelector(".menuIcon");

function toggleMenu(){
    const menu = document.queryCommandIndeterm(".nav__menu");
    if(menu.classList.contains('showMenu')){
        menu.classList.remove("showMenu");
        closeIcon.style.display ='none';
        menuIcon.style.display="block"
    }else{
        menu.classList.add("showMenu")
        closeIcon.style.display="block"
        menuIcon.style.display ="none"
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )