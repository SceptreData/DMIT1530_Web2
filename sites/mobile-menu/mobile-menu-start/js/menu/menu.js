 
window.addEventListener("DOMContentLoaded", function(event) {
 const menu = document.querySelector('#mobile-sub-menu');
 const menuOpenButton = document.querySelector("#mobile-menu-button");

//  The name of the ID on the Settings-Button Icon.
 const settingsButton = document.querySelector("#settings-button");
 // Window Element that is the settings menu
 const settingsMenu = document.querySelector("#mobile-menu-settings");
 let isOpen = false;

 settingsButton.addEventListener("click", ()=> {
     settingsMenu.classList.toggle("hidden");
 });

 /*
 https://greensock.com/docs/Easing/Bounce
 easing graph
 */

  menuOpenButton.onclick = (e)=>{
     isOpen = !isOpen;
     if(!isOpen){
         TweenMax.to(menu,  0.4, {left:"0",  ease:Power4.easeIn});
        //  TweenMax.to(menu,  0.9, {top:"-65vh", opacity: 0,  ease:Back.easeIn});
     }else{
         TweenMax.to(menu,  0.6,  {left:"-15vw",  ease:Power4.easeOut});
     }
  }
 
  
 
});
 