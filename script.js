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

AOS.init({ duration: 700, once: false, delay: 50 });

        window.onload = function() {
            const loaderElement = document.querySelector('.loader');
            if (loaderElement) {
                loaderElement.classList.add('fade-out');
                setTimeout(() => {
                    if (loaderElement.parentElement) {
                        loaderElement.style.display = 'none';
                    }
                }, 500);
            }
        };

        const progressBar = document.getElementById("progressBar");
        const backToTopButton = document.getElementById("backToTop");

   

       

        const searchBtn = document.getElementById('search-btn');
        const searchBox = document.getElementById('search-box');

        

        function scrollProgressAndTopButton() {
            if(progressBar) {
                var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var scrolled = (winScroll / height) * 100;
                progressBar.style.width = scrolled + "%";
            }

            if (backToTopButton) {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    backToTopButton.classList.add("visible");
                } else {
                    backToTopButton.classList.remove("visible");
                }
            }
        }

        function closeAllPopups(exceptThisOne = null) {
            if(navbar && navbar !== exceptThisOne) navbar.classList.remove('active');
            if(contactInfo && contactInfo !== exceptThisOne) contactInfo.classList.remove('active');
            if(searchForm && searchForm !== exceptThisOne) searchForm.classList.remove('active');
           
        }
        
        window.onscroll = () => {
            scrollProgressAndTopButton();
            closeAllPopups(); // Close all popups on scroll
        };

        if(backToTopButton){
            backToTopButton.onclick = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
        }

        function setupToggle(btn, element, focusElement = null) {
            if (btn && element) {
                btn.onclick = (e) => {
                    e.stopPropagation();
                    const isActive = element.classList.contains('active');
                    closeAllPopups(element); // Close others, but not this one yet
                    element.classList.toggle('active'); // Now toggle this one
                    if (element.classList.contains('active') && focusElement) {
                        focusElement.focus();
                    }
                };
            }
        }

        setupToggle(menuBtn, navbar);
        if (exitBtn && navbar) { 
            exitBtn.onclick = (e) => {
                e.stopPropagation();
                navbar.classList.remove('active');
            }; 
        }
        
        setupToggle(infoBtn, contactInfo);
        if (closeContactInfo && contactInfo) { 
            closeContactInfo.onclick = (e) => {
                e.stopPropagation();
                contactInfo.classList.remove('active');
            };
        }

        setupToggle(searchBtn, searchForm, searchBox);
        setupToggle(loginBtn, loginForm);

        document.querySelectorAll('.dropdown > a.dropdown-toggle').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); 
                e.stopPropagation();
                const dropdown = this.parentElement;
                const isActive = dropdown.classList.contains('active');
                
                document.querySelectorAll('.dropdown.active').forEach(openDropdown => {
                    if (openDropdown !== dropdown) { // Close other dropdowns
                       openDropdown.classList.remove('active');
                    }
                });

                if (!isActive) {
                    dropdown.classList.add('active');
                } else {
                    dropdown.classList.remove('active'); // Allow closing by clicking again
                }
            });
        });

        document.addEventListener('click', function(e) {
            // Close popups if click is outside
            if (navbar && navbar.classList.contains('active') && !navbar.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
                navbar.classList.remove('active');
            }
            if (contactInfo && contactInfo.classList.contains('active') && !contactInfo.contains(e.target) && e.target !== infoBtn && !infoBtn.contains(e.target)) {
                contactInfo.classList.remove('active');
            }
            if (searchForm && searchForm.classList.contains('active') && !searchForm.contains(e.target) && e.target !== searchBtn && !searchBtn.contains(e.target)) {
                searchForm.classList.remove('active');
            }
            if (loginForm && loginForm.classList.contains('active') && !loginForm.classList.contains(e.target) && e.target !== loginBtn && !loginBtn.contains(e.target)) {
                loginForm.classList.remove('active');
            }
            
            // Close dropdowns if click is outside
            document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                const toggleLink = dropdown.querySelector('.dropdown-toggle');
                if (!dropdown.contains(e.target) && e.target !== toggleLink) {
                    dropdown.classList.remove('active');
                }
            });
        });

        const counters = document.querySelectorAll('.box-container .box h3');
        const counterSpeed = 150;

        const animateCounters = (counter) => {
            const target = +counter.dataset.target;
            let count = 0;
            const increment = target / counterSpeed;
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count) + '+';
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target + '+';
                }
            };
            updateCount();
        };

        if (typeof IntersectionObserver !== 'undefined') {
            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const h3 = entry.target.querySelector('h3');
                        if(h3 && h3.dataset.target && !h3.classList.contains('animated')){
                            animateCounters(h3);
                            h3.classList.add('animated');
                        }
                    }
                });
            }, { threshold: 0.4 });

            document.querySelectorAll('.box-container .box').forEach(box => {
                counterObserver.observe(box);
            });
        } else {
            counters.forEach(counter => { if(counter.dataset.target) animateCounters(counter); });
        }