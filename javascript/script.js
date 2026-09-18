// ============================================================
// Sterling & Co. Properties — script.js
// Supports: mobile nav toggle, dynamic footer year,
// and basic front-end form validation feedback.
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile navigation toggle ----
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close the menu when a link is tapped (mobile)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Dynamic footer year ----
  var yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ---- Basic form validation feedback ----
  var forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var valid = form.checkValidity();
      if (!valid) {
        form.reportValidity();
        return;
      }

      var successMessage = form.querySelector('.form-success');
      if (successMessage) {
        successMessage.classList.add('visible');
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      form.reset();
    });
  });

});
