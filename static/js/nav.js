// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Smooth scrolling effect
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active link based on scroll position
window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            link.classList.add('active'); // Add active class to the current link
        } else {
            link.classList.remove('active'); // Remove active class from other links
        }
    });
});