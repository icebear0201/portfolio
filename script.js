const toggleBtn = document.getElementById('theme-toggle');
const themeLabel = toggleBtn.querySelector('.theme-label');
const root = document.documentElement;

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    themeLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
}

// Initialize theme from localStorage or OS preference
const savedTheme = localStorage.getItem('portfolio-theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    applyTheme(savedTheme);
} else if (systemPrefersDark) {
    applyTheme('dark');
} else {
    applyTheme('light');
}

toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});