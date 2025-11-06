// JavaScript for Lynk Manager Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeHeader();
    initializeAnimatedSections();
    initializeFAQ();
    initializeCurrentYear();
});

// Header scroll functionality
function initializeHeader() {
    const header = document.getElementById('header');
    const heroSection = document.getElementById('hero-section');
    
    function handleScroll() {
        if (heroSection) {
            // Show header when scrolled past hero section
            if (window.scrollY > heroSection.offsetHeight) {
                header.classList.add('visible');
                header.setAttribute('aria-hidden', 'false');
            } else {
                header.classList.remove('visible');
                header.setAttribute('aria-hidden', 'true');
            }
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
}

// Animated sections with Intersection Observer
function initializeAnimatedSections() {
    const animatedSections = document.querySelectorAll('.animated-section');
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Unobserve after animation to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );
    
    animatedSections.forEach((section) => {
        observer.observe(section);
    });
}

// FAQ functionality
function initializeFAQ() {
    const faqButtons = document.querySelectorAll('.faq-button');
    
    faqButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const content = faqItem.querySelector('.faq-content');
            const chevron = faqItem.querySelector('.faq-chevron');
            
            // Check if this FAQ is currently open
            const isOpen = content.classList.contains('open');
            
            // Close all FAQ items first
            faqButtons.forEach((otherButton) => {
                const otherItem = otherButton.closest('.faq-item');
                const otherContent = otherItem.querySelector('.faq-content');
                const otherChevron = otherItem.querySelector('.faq-chevron');
                
                otherContent.classList.remove('open');
                otherChevron.classList.remove('rotated');
            });
            
            // If this FAQ wasn't open, open it
            if (!isOpen) {
                content.classList.add('open');
                chevron.classList.add('rotated');
            }
        });
    });
}

// Set current year in footer
function initializeCurrentYear() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Smooth scrolling for anchor links (if any are added)
function initializeSmoothScrolling() {
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
}

// Additional utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler with debouncing
const debouncedScrollHandler = debounce(() => {
    // Any additional scroll-based functionality can be added here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Enhanced hover effects for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.hover\\:-translate-y-2');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Loading animation (optional)
function showPageLoaded() {
    document.body.classList.add('loaded');
}

// Call when page is fully loaded
window.addEventListener('load', showPageLoaded);

// Fallback for browsers that don't support Intersection Observer
if (!('IntersectionObserver' in window)) {
    // Fallback: show all animated sections immediately
    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach(section => {
        section.classList.add('visible');
    });
}

// Console message for developers
console.log('Lynk Manager Landing Page - Converted from React to Vanilla HTML/CSS/JS');
console.log('Original built with React + TypeScript + Vite');
console.log('Converted to plain HTML, CSS, and JavaScript');