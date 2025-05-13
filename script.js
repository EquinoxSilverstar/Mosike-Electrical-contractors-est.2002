let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});

   const menuBtn = document.getElementById('menu-btn');
  const exitBtn = document.getElementById('exit-btn');


  menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
  });

  exitBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
  });

  // Optional: Close menu when clicking a link
  const navLinks = navbar.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });     

  const servicesBtn = document.getElementById('services-btn');
const servicesDropdown = document.getElementById('services-dropdown');

servicesBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent jump to anchor
  servicesDropdown.classList.toggle('show');
});

window.addEventListener('click', function(e) {
  if (!servicesBtn.contains(e.target) && !servicesDropdown.contains(e.target)) {
    servicesDropdown.classList.remove('show');
  }
});

// Get all dropdowns
const dropdownToggles = document.querySelectorAll('.navbar .dropdown > a');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault(); // prevent anchor jump

    // Close other open dropdowns if needed
    dropdownToggles.forEach(otherToggle => {
      if (otherToggle !== toggle) {
        otherToggle.parentElement.classList.remove('active');
      }
    });

    // Toggle active class on this dropdown
    this.parentElement.classList.toggle('active');
  });
});

