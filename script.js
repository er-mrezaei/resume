let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fa' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-fa]');
    const langButton = document.getElementById('langText');
    const body = document.body;

    elements.forEach(element => {
        if (currentLang === 'en') {
            element.textContent = element.getAttribute('data-en');
            body.classList.remove('rtl');
            langButton.textContent = 'فارسی';
        } else {
            element.textContent = element.getAttribute('data-fa');
            body.classList.add('rtl');
            langButton.textContent = 'English';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
});
