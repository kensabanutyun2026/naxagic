// Մենյուի բացել/փակելը հեռախոսների վրա
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Երբ սեղմում ենք որևէ հղման վրա, մենյուն ավտոմատ փակվում է
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Header-ի ստվերի ավելացում սքրոլի ժամանակ
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});