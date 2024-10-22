document.addEventListener('DOMContentLoaded', function() {
  var themeButton = document.getElementById('themeButton');
  var body = document.body;

  themeButton.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      themeButton.textContent = 'Light Theme';
    } else {
      body.classList.add('light-theme');
      themeButton.textContent = 'Dark Theme';
    }
  });
});

document.querySelector(".toggle input").addEventListener("change", (evt) => {
  document.documentElement.dataset.mode = evt.currentTarget.checked ? "dark" : "light";
});
