const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('#mobile-sub-menu');

mobileMenuButton.addEventListener('click', e => {
  console.log('yo');
  e.preventDefault();
  let isHidden = mobileMenu.classList.toggle('hidden');
  if (isHidden){
    TweenMax.to(mobileMenu, 0.8, { top: "2rem", ease: Power4.easeOut,
        opacity: 0.1 })
} else {
    TweenMax.to(mobileMenu, 1.2, { top: "2rem", ease: Power4.easeOut,
        opacity: 1 });
}
});