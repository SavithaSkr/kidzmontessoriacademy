// recaptcha.js (Invisible reCAPTCHA v3 handler)

function handleRecaptcha(event) {
  event.preventDefault(); // stop real submit

  grecaptcha.ready(function () {
    grecaptcha
      .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
      .then(function (token) {
        document.getElementById("recaptcha_token").value = token;

        // Now safely trigger AJAX submit
        submitFormWithAjax();
      });
  });
}
