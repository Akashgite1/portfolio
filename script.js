// This part is optional if you want to include JavaScript-based animations
const logo = document.querySelector('.logo-container');

logo.addEventListener('mouseenter', () => {
    logo.querySelector('.logo').style.transform = 'rotate(360deg)';
});

logo.addEventListener('mouseleave', () => {
    logo.querySelector('.logo').style.transform = 'rotate(0deg)';
});
