
window.addEventListener("DOMContentLoaded", function (event) {

    // Main Menu Navigation Menu
    let isOpen = false;
    const menu = document.querySelector('#mobile-sub-menu');
    const menuOpenButton = document.querySelector("#mobile-menu-button");

    // Account Options  Menu (Register/Login)
    const accountMenu = document.querySelector('#account-sub-menu');
    const accountOpenButton = document.querySelector('#account-menu-button');

    // Currency Selector Menu
    const currencyMenu = document.querySelector('#currency-sub-menu');
    const currencyOpenButton = document.querySelector('#currency-menu-button');

    // Language Type Menu
    const languageMenu = document.querySelector('#language-sub-menu');
    const lanuageOpenButton = document.querySelector('#language-menu-button');

    // Shopping Cart Menu
    const cartMenu = document.querySelector("#mobile-cart-menu");
    const cartOpenButton = document.querySelector("#mobile-cart-button");


    // // Code to open and close the settings menu.
    // settingsButton.onclick = () => {
    //     settingsMenu.classList.toggle('hidden');
    // }

    // settingsMenu.onmouseleave = () => {
    //     settingsMenu.classList.toggle('hidden');
    // }
    // menu.onmouseleave = () => {
    //     isOpen = !isOpen;
    //     TweenMax.to(menu, 0.8, { top: "-55vh", ease: Power4.easeOut });
    // }

    /*
    https://greensock.com/docs/Easing/Bounce
    easing graph
    */

    //  code to animate mobile navigation menu.
    menuOpenButton.onclick = (e) => {
        isOpen = !isOpen;
        menu.classList.toggle('hidden');
        if (!isOpen) {
            TweenMax.to(menu, 0.8, { top: "203px", ease: Power4.easeOut,
                opacity: 0.1 });
        } else {
            TweenMax.to(menu, 0.8, { top: "223px", ease: Power4.easeOut,
                opacity: 1 });
        }
        e.preventDefault();
    }



});
