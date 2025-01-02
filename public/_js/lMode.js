document.addEventListener('DOMContentLoaded', function() {
  var themeButton = document.getElementById('themeButton');
  var body = document.body;
  
  themeButton.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      themeButton.textContent = '';
    } else {
      body.classList.add('light-theme');
      themeButton.textContent = '';
    }
  });
});

document.querySelector(".toggle input").addEventListener("change", (evt) => {
  document.documentElement.dataset.mode = evt.currentTarget.checked ? "dark" : "light";
});
