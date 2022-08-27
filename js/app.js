const sections = document.querySelectorAll('section');

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function scrolling() {
    sections.forEach((section) => {
        if (section.offsetTop <= window.scrollY + 400 && section.offsetTop + section.offsetHeight - 400 > window.scrollY) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    });
});