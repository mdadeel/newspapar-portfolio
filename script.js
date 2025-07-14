document.addEventListener('DOMContentLoaded', () => {
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    const body = document.body;

    darkModeCheckbox.addEventListener('change', () => {
        if (darkModeCheckbox.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });
});