 
window.addEventListener("DOMContentLoaded", function(event) {
 const menu = document.querySelector('#mobile-sub-menu');
 const menuOpenButton = document.querySelector("#mobile-menu-button")
 const settingsMenu = document.querySelector('#mobile-settings-menu');
 const settingsButton = document.querySelector('#settings-button');
 
 let isOpen = false;
 let settings = false;

 settingsButton.addEventListener("click", onShowSettings);

 function onShowSettings(){
     console.log("irght")
     settingsMenu.classList.toggle("hidden");
 }

 /*
 https://greensock.com/docs/Easing/Bounce
 easing graph
 */

// have the menu slide in from the 
// opacity 

  menuOpenButton.onclick = (e)=>{
     isOpen = !isOpen;
    //  set the anaimaton properties
    // top ~ same as the height of the mobile sub men
     if(!isOpen){
         TweenMax.to(menu,  0.6, {left:"-100vw",    ease:Power3.easeIn});
     }else{
         TweenMax.to(menu,  0.4,  {left: 0,   ease:Power3.easeOut});
     }
  }
 
});
 