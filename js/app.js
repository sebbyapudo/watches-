// SHOW MENU 
const navMneu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// MENU SHOW
// Validate if constants exists 
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMneu.classList.add('show-menu')
    });
}

// MENU HIDDEN
// Validate if constants exist 
if (navToggle) {
    navClose.addEventListener('click', () => {
        navMneu.classList.remove('show-menu')
    });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // On clicking each nav__menu, the show-menu is removed
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is lesser than 80vh, add the 'scroll-header' class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// TESTIMONIAL SWIPER
let testimoialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// NEW SWIPER
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

// SCROLL SECTIONS ACTIVE LINKS
const sections = document.querySelectorAll('section[id]');


function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

              if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }
            else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive)

// SHOW SCROLL UP
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 400 viewport height, and the show-scroll tag to the a tag with the scroll-t
    if (this.scrollY >= 400) {
        scrollUp.classList.add('show-scroll')
    }
     else {
         scrollUp.classList.remove('show-scroll')
     }
}
window.addEventListener('scroll', scrollUp)

// CART SHOW
const cart = document.getElementById('cart');
      cartShop = document.getElementById('cart-shop');
      cartClose = document.getElementById('cart-close');
// Validate if constants exists 
if (cartShop) {
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    });
}

// CART HIDDEN
// Validate if constants exist 
if (cartClose) {
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-cart')
    });
}

// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating  the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fullfileld, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


// Acivate / Deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {
    // Add / remove the dark icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme that and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})