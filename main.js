function myMenuFunction(){
    var menuBtn = document.getElementById("Nav-Menu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }

var typingEffect = new Typed(".typedText",{
    strings : ["Developer","Designer","Programmer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

// Home
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


// Project Box
sr.reveal('.project-box',{interval: 200})

// Headings 
sr.reveal('.top-header',{})

// About and Contact Info
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

// About skills and form box
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const sectionId = entry.target.getAttribute('id');
    const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active-link'));
      navLink.classList.add('active-link');
    }
  });
}, {
  rootMargin: '-50px 0px 0px 0px', // Adjust the trigger point as needed
  threshold: 0.6  // Trigger when 60% of the section is visible
});

sections.forEach(section => observer.observe(section));


