document.addEventListener('DOMContentLoaded', () => {
    // Navbar Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.querySelector('i').classList.toggle('fa-bars');
        navToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Optimized Parallax Effect for Hero Section
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateParallax = () => {
        const hero = document.querySelector('.hero');
        const heroOverlay = document.querySelector('.hero-overlay');
        const scrollPosition = lastScrollY;

        // Only update if hero is in viewport
        const heroRect = hero.getBoundingClientRect();
        if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
            heroOverlay.style.opacity = `${0.5 - scrollPosition / 4000}`;
        }

        ticking = false;
    };

    const onScroll = () => {
        lastScrollY = window.pageYOffset;
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll);

    // Modal Functionality
    const franchiseButton = document.querySelector('.franchise-button');
    const modal = document.querySelector('#franchise-modal');
    const modalClose = document.querySelector('.modal-close');

    franchiseButton.addEventListener('click', () => {
        modal.style.display = 'flex';
        const modalContent = document.querySelector('.modal-content');
        modalContent.classList.remove('animate-in', 'animate-reset');
        setTimeout(() => modalContent.classList.add('animate-in'), 0);
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form Submission (Redirect to WhatsApp)
    const form = document.getElementById('franchise-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const whatsappNumber = '+6281649475421';

        const whatsappMessage = [
            '🌟 *Franchise Inquiry - Takoyaki Mayumi* 🌟',
            '',
            `*Name:* ${name}`,
            `*Email:* ${email}`,
            `*Message:* ${message}`,
            '',
            'Please contact me regarding franchise opportunities. Thank you!'
        ].join('\n');

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        form.reset();
        modal.style.display = 'none';
    });

    // Scroll Animations for Elements
    const elementsToAnimate = document.querySelectorAll(
        '.hero-content, .hero-content p, .hero-content h2, .menu h2, .menu-card, .menu-image, .menu-list h3, .accordion-item, .menu-info, .locations h2, .location-card, .feedback h2, .feedback p, .feedback-card, .franchise, footer p, .nav-links a, .footer-links a'
    );

    // Set index for staggered animations
    const menuCards = document.querySelectorAll('.menu-card');
    const locationCards = document.querySelectorAll('.location-card');
    const feedbackCards = document.querySelectorAll('.feedback-card');
    const accordionItems = document.querySelectorAll('.accordion-item');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const footerLinksItems = document.querySelectorAll('.footer-links a');
    const heroSubElements = document.querySelectorAll('.hero-content p, .hero-content h2');

    menuCards.forEach((card, index) => {
        card.style.setProperty('--index', index);
    });

    locationCards.forEach((card, index) => {
        card.style.setProperty('--index', index);
    });

    feedbackCards.forEach((card, index) => {
        card.style.setProperty('--index', index);
    });

    accordionItems.forEach((item, index) => {
        item.style.setProperty('--index', index);
    });

    navLinksItems.forEach((link, index) => {
        link.style.setProperty('--index', index);
    });

    footerLinksItems.forEach((link, index) => {
        link.style.setProperty('--index', index);
    });

    heroSubElements.forEach((elem, index) => {
        elem.style.setProperty('--index', index + 1);
    });

    // IntersectionObserver for scroll animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-reset');
                } else {
                    entry.target.classList.remove('animate-in');
                    entry.target.classList.add('animate-reset');
                }
            });
        },
        { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    elementsToAnimate.forEach((element) => {
        observer.observe(element);
    });

    // Trigger navbar animations on page load
    navLinksItems.forEach((link) => {
        link.classList.add('animate-in');
    });

    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach((header) => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');

            accordionHeaders.forEach((h) => {
                h.classList.remove('active');
                h.nextElementSibling.style.display = 'none';
            });

            if (!isActive) {
                header.classList.add('active');
                content.style.display = 'block';
            }
        });
    });
});