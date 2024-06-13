document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.getElementById('openMenu');
    const closeMenuBtn = document.getElementById('closeMenu');
    const menu = document.getElementById('menu');

    openMenuBtn.addEventListener('click', function() {
        menu.classList.add('active');
    });

    closeMenuBtn.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});
