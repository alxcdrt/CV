const defaultLanguage = 'en';

let showLangSelector = false;
let currentLanguage = defaultLanguage;

const languages = new Map([
  ['en', 'fi-gb'],
  ['es', 'fi-es'],
  ['fr', 'fi-fr']
]);

window.addEventListener('DOMContentLoaded', (event) => {
    if (document.getElementById('dark-mode-switch').checked)
        toggleDarkMode();

    const url = new URL(window.location.href);
    let lang = url.searchParams.get('lang');

    if (!lang || !languages.has(lang))
        lang = defaultLanguage;
    
    languages.forEach(function (_, v) {
        document.querySelector(`section[lang=${v}]`).style.display = 'none';
    });

    selectLanguage(lang);
});

function toggleDarkMode() {
    document.querySelectorAll('.main')
		.forEach(e => e.classList.toggle('dark'));

    document.querySelectorAll('.icon')
        .forEach(e => e.classList.toggle('dark'));

    document
      .querySelectorAll('body, h2, h3')
        .forEach(e => e.classList.toggle('dark'));

    document
      .querySelector('header').classList.toggle('dark');

    document
      .querySelector('footer').classList.toggle('dark');

    document.getElementById('lang-selector-btn').classList.toggle('dark');
}

function toggleSelector() {
    if (showLangSelector)
        closeSelector();
    else
        openSelector();
}

function closeSelector() {
    const selector = document.getElementById('selector-tooltip');
    selector.style.display = 'none';
    showLangSelector = false;
}

function openSelector() {
    const selector = document.getElementById('selector-tooltip');
    selector.style.display = 'flex';
    showLangSelector = true;
}

function selectLanguage(language) {
    const selectedLang = document.getElementById('selected-lang');
  
    selectedLang.classList.remove(languages.get(currentLanguage));
    selectedLang.classList.add(languages.get(language));
  
    document.querySelector(`section[lang=${currentLanguage}]`).style.display = 'none';

    currentLanguage = language;

    document.querySelector(`section[lang=${currentLanguage}]`).style.display = 'inherit';

    closeSelector();
}
