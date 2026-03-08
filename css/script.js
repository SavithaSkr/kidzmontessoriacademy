console.log("toggle.js loaded");
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slides img");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Change image every 3 seconds

  // Mobile menu toggle
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');
  const backdrop = document.querySelector('.mobile-menu-backdrop');
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('mobile-menu-open');
    backdrop.classList.toggle('active');
  });
  
  backdrop.addEventListener('click', () => {
    toggle.classList.remove('active');
    menu.classList.remove('mobile-menu-open');
    backdrop.classList.remove('active');
  });
  
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('mobile-menu-open');
      backdrop.classList.remove('active');
    });
  });
});



