document.addEventListener('DOMContentLoaded', () => {
    const yearTarget = document.querySelector('[data-current-year]');
    if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
    }

    const swapBrandMarks = () => {
        document.querySelectorAll('img[data-light-src][data-dark-src]').forEach((img) => {
            const prefersDark = Boolean(img.closest('.on-dark'));
            const nextSrc = prefersDark ? img.dataset.darkSrc : img.dataset.lightSrc;
            if (nextSrc && img.getAttribute('src') !== nextSrc) {
                img.setAttribute('src', nextSrc);
            }
        });
    };

    swapBrandMarks();
});
