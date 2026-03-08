// form-submit.js

function submitFormWithAjax() {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("form-status");

  const formData = new FormData(form);

  statusEl.textContent = "Sending...";
  statusEl.style.color = "black";

  fetch(form.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      const type = response.headers.get("content-type");

      if (type && type.includes("application/json")) {
        return response.json();
      }
      return response.text();
    })
    .then((data) => {
      if (typeof data === "object") {
        if (data.status === "success") {
          // Custom multi-line success message in a different font color
          statusEl.innerHTML =
            '<div style="color:#2a9d8f; font-weight:600">' +
            "Thank you for Contacting KidzMontessori Academy!<br>" +
            "Your message has been sent successfully!<br>" +
            "We will contact you shortly" +
            "</div>";
          // Clear the form and reset the recaptcha token field
          form.reset();
          const tokenEl = document.getElementById("recaptcha_token");
          if (tokenEl) tokenEl.value = "";
        } else {
          statusEl.textContent = "❌ " + data.message;
          statusEl.style.color = "red";
        }
      } else {
        statusEl.innerHTML = data;
        statusEl.style.color = "blue";
      }
    })
    .catch((err) => {
      console.error(err);
      statusEl.textContent = "❌ Server error";
      statusEl.style.color = "red";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", handleRecaptcha);
});
