document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const reveals = document.querySelectorAll('.reveal');
    const header = document.querySelector('.header');
    
    // Add active class to hero for initial animation
    setTimeout(() => {
        document.querySelector('.hero').classList.add('active');
    }, 100);

    const checkScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        // Handle reveals
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });

        // Handle header background
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.add('scrolled'); // Wait, image reference always has dark navbar?
            // Actually let's make it fully responsive
            if(window.scrollY < 50) {
                header.classList.remove('scrolled');
            }
        }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Trigger once on load

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header-nav');
    const navLinks = document.querySelectorAll('.nav-links a');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            nav.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                nav.classList.remove('open');
            });
        });
    }

    // Parallax effect for images
    const parallaxImgs = document.querySelectorAll('.parallax-img');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        parallaxImgs.forEach(img => {
            const limit = img.offsetTop;
            // Simple subtle parallax
            const yPos = (scrolled - limit) * 0.1;
            img.style.transform = `translateY(${yPos}px) scale(1.1)`;
        });
    });
});
