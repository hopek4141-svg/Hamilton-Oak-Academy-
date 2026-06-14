// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.enrollment-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const phone = form.querySelector('input[type="tel"]').value;
            const program = form.querySelector('select').value;
            const message = form.querySelector('textarea').value;
            
            // Validate form
            if (!name || !email || !phone || !program || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Create mailto link with form data
            const subject = `Hamilton Oak Academy Enrollment Inquiry - ${program}`;
            const body = `Name: ${name}%0DEmail: ${email}%0DPhone: ${phone}%0DProgram: ${program}%0D%0DMessage: ${message}`;
            const mailtoLink = `mailto:HamiltonOakAcademy@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your inquiry! We will contact you shortly.');
            
            // Reset form
            form.reset();
        });
    }
});

// Add active state to navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add hover effects and animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.program-card, .staff-card, .news-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// Responsive menu toggle (for future mobile menu implementation)
const navLinks = document.querySelector('.nav-links');
if (navLinks) {
    // Add responsive behavior if needed
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            // Mobile menu logic can be added here
        }
    });
}

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to cards
document.querySelectorAll('.program-card, .staff-card, .news-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Console log for tracking
console.log('Hamilton Oak Academy Website - All systems operational');
