document.addEventListener('DOMContentLoaded', () => {
    void function burgerMenu() {
        const burger = document.getElementById('burger');
        burger.addEventListener('click', (e) => {
            const target = document.getElementById(burger.dataset.target);
            burger.classList.toggle('is-active');
            target.classList.toggle('is-active');
            e.preventDefault();
        })
    }();
});
