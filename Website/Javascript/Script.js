//
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Toggle menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        this.setAttribute('aria-expanded', this.classList.contains('active'));
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        this.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
});

//Getting dynamic date on footer
const yearElement= document.getElementById(currentYear)
const year= new Date();
yearElement.innerText= year.getFullYear();