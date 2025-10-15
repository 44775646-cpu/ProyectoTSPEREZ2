document.addEventListener('DOMContentLoaded', () => {
    
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    
    if (hamburgerBtn && navLinks) {
        
        hamburgerBtn.addEventListener('click', () => {
            
            navLinks.classList.toggle('nav-active');
        });

        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                }
            });
        });
    }
});