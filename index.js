window.addEventListener('DOMContentLoaded', (event) => {
    if (document.getElementById('dark-mode-switch').checked)
        toggleDarkMode();
});

function toggleDarkMode() {
    document.querySelector('.main').classList.toggle('dark');

    document.querySelectorAll('.icon')
        .forEach((e) => e.classList.toggle('dark'));

    document
      .querySelectorAll('body, h2, h3')
        .forEach((e) => e.classList.toggle('dark'));

    document
      .querySelector('header').classList.toggle('dark');

    document
      .querySelector('footer').classList.toggle('dark');
}
