document.addEventListener('DOMContentLoaded', () => {
    // Navbar Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.querySelector('i').classList.toggle('fa-bars');
        navToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Modal Functionality
    const franchiseButton = document.querySelector('.franchise-button');
    const modal = document.querySelector('#franchise-modal');
    const modalClose = document.querySelector('.modal-close');

    franchiseButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form Submission (Redirect to WhatsApp with Improved Encoding and Formatting)
    const form = document.getElementById('franchise-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const whatsappNumber = '+6281649475421';

        // Construct the message with proper formatting
        const whatsappMessage = [
            '🌟 *Franchise Inquiry - Takoyaki Mayumi* 🌟',
            '',
            `*Name:* ${name}`,
            `*Email:* ${email}`,
            `*Message:* ${message}`,
            '',
            'Please contact me regarding franchise opportunities. Thank you!'
        ].join('\n');

        // Encode the entire message for WhatsApp URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp chat in a new tab
        window.open(whatsappUrl, '_blank');

        // Reset form and close modal
        form.reset();
        modal.style.display = 'none';
    });

    // Scroll Animations for Sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');

            // Close all other accordion items
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.display = 'none';
            });

            // Toggle the clicked item
            if (!isActive) {
                header.classList.add('active');
                content.style.display = 'block';
            }
        });
    });
});

// Add fade-in class for CSS animation
document.styleSheets[0].insertRule(`
    .fade-in {
        animation: fadeIn 1s ease forwards;
    }
`, document.styleSheets[0].cssRules.length);