document.addEventListener('DOMContentLoaded', (event) => {
    const socialLinks = document.querySelectorAll('.social-media a');

    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.2)';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });
});
