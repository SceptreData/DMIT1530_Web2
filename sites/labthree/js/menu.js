window.addEventListener("DOMContentLoaded", function (event) {
    // Generic Function for drop down menus.
    // You can tell I wrote it because it probably isn't any good.
    function toggleMenu (targetMenu, target){
        // Get Dimensions of Target Element
        var buttonDimensions = target.getBoundingClientRect();

        // Make sure our menu shows up in the right place.
        targetMenu.style.top   = buttonDimensions.bottom + 5 + "px";
        targetMenu.style.left  = buttonDimensions.left + "px";
        targetMenu.style.opacity = 0;
        
        // BEHOLD
        // The menu
        targetMenu.classList.toggle('hidden');

        // Tween Baby Tween
        if (targetMenu.classList.contains('hidden')){
            TweenMax.to(targetMenu, 0.8,
                {
                    ease: Power4.easeOut,
                    opacity: 0.1
                });
        } else {
            TweenMax.to(targetMenu, 0.8,
                {
                    ease: Power4.easeOut,
                    opacity: 1
                });
        }
    }

    // If our mouse leaves our menu boxes, Get rid of the menu
    function registerMouseLeaveEvent(menu){
        menu.onmouseleave = () => {
            if (!menu.classList.contains('hidden'))
                menu.classList.toggle('hidden');
        }
    }

    // Main Menu Navigation Menu
    let isOpen = false;
    const mainMenu = document.querySelector('#mobile-sub-menu');
    const menuOpenButton = document.querySelector("#mobile-menu-button");

    // Account Options  Menu (Register/Login)
    const accountMenu = document.querySelector('#account-sub-menu');
    const accountOpenButton = document.querySelector('#account-menu-button');

    // Currency Selector Menu
    const currencyMenu = document.querySelector('#currency-sub-menu');
    const currencyOpenButton = document.querySelector('#currency-menu-button');

    // Language Type Menu
    const languageMenu = document.querySelector('#language-sub-menu');
    const languageOpenButton = document.querySelector('#language-menu-button');

    // Shopping Cart Menu
    const cartMenu = document.querySelector("#mobile-cart-menu");
    const cartOpenButton = document.querySelector("#mobile-cart-button");

    //  Here we add event listeners for our drop down menus.
    accountOpenButton.addEventListener('click',function(e){
        toggleMenu(accountMenu, e.currentTarget);
    });
    registerMouseLeaveEvent(accountMenu);

    currencyOpenButton.addEventListener('click',function(e){
        toggleMenu(currencyMenu, e.currentTarget );
    });
    registerMouseLeaveEvent(currencyMenu);

    languageOpenButton.addEventListener('click',function(e){
        toggleMenu(languageMenu, e.currentTarget);
    });
    registerMouseLeaveEvent(languageMenu);
    
    cartOpenButton.addEventListener('click',function(e){
        toggleMenu(cartMenu, e.currentTarget);
    });
    registerMouseLeaveEvent(cartMenu);
    
    /* This menu has it's own section even though it probably doesn't need it. */
    menuOpenButton.onclick = (e) => {
        e.preventDefault();
        let isHidden = mainMenu.classList.toggle('hidden');
        console.log(isHidden);
        if (isHidden){
            TweenMax.to(mainMenu, 0.8, { top: "203px", ease: Power4.easeOut,
                opacity: 0.1 })
        } else {
            TweenMax.to(mainMenu, 1.2, { top: "224px", ease: Power4.easeOut,
                opacity: 1 });
        }
    }
   
    registerMouseLeaveEvent(mainMenu);
});
