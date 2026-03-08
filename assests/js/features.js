document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".cmsmasters_toggle_wrap");

  toggles.forEach((toggle) => {
    const title = toggle.querySelector(".cmsmasters_toggle_title");
    const content = toggle.querySelector(".cmsmasters_toggle");

    if (!title || !content) return;

    title.addEventListener("click", () => {
      const isVisible = content.style.display === "block";

      document.querySelectorAll(".cmsmasters_toggle").forEach((el) => {
        el.style.display = "none";
      });

      if (!isVisible) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

if (window.jQuery) {
  (function ($) {
    if ($("#myCollapse").length && $.fn.collapse) {
      $("#myCollapse").on("shown.bs.collapse", function () {});
    }

    if ($("#myCarousel").length && $.fn.carousel) {
      $("#myCarousel").on("slid.bs.carousel", function () {
        $("#myCarousel").carousel(2);
      });

      $("#myCarousel").carousel(1);
      $("#myCarousel").carousel(2);
    }

    if ($.fn.modal && $.fn.modal.Constructor && $.fn.modal.Constructor.Default) {
      $.fn.modal.Constructor.Default.keyboard = false;
    }
  })(jQuery);
}