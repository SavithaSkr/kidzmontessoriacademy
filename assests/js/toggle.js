document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".nav-menu");
  const backdrop = document.querySelector(".mobile-menu-backdrop");
  const menuLinks = document.querySelectorAll(".nav-menu a");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    menu.classList.toggle("mobile-menu-open");

    if (backdrop) {
      backdrop.classList.toggle("active");
    }

    document.body.classList.toggle("menu-open");
  });

  if (backdrop) {
    backdrop.addEventListener("click", function () {
      toggle.classList.remove("active");
      menu.classList.remove("mobile-menu-open");
      backdrop.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  }

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.classList.remove("active");
      menu.classList.remove("mobile-menu-open");

      if (backdrop) {
        backdrop.classList.remove("active");
      }

      document.body.classList.remove("menu-open");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      toggle.classList.remove("active");
      menu.classList.remove("mobile-menu-open");

      if (backdrop) {
        backdrop.classList.remove("active");
      }

      document.body.classList.remove("menu-open");
    }
  });
});