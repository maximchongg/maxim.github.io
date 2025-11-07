// ============================================
// STARFIELD BACKGROUND ANIMATION
// ============================================

function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationId;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Star class
    class Star {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Twinkle effect
            this.opacity += this.twinkleSpeed;
            if (this.opacity > 1 || this.opacity < 0.3) {
                this.twinkleSpeed *= -1;
            }
            
            // Reset if out of bounds
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Create stars
    function createStars(count = 200) {
        stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(new Star());
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            star.update();
            star.draw();
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Initialize
    createStars(150);
    animate();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationId);
    });
}

// Initialize starfield when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStarfield);
} else {
    initStarfield();
}

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// SCROLL ANIMATIONS - INTERSECTION OBSERVER
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animate skill bars when they come into view
            if (entry.target.classList.contains('skill-category')) {
                animateSkillBars(entry.target);
            }
            
            // Animate stats counter when they come into view
            if (entry.target.querySelector('.stat-number')) {
                animateStats(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all elements with reveal classes
const revealElements = document.querySelectorAll('.reveal, .reveal-right, .reveal-scale, .reveal-bottom');
revealElements.forEach(element => observer.observe(element));

// ============================================
// SKILL BARS ANIMATION
// ============================================

function animateSkillBars(skillCategory) {
    const skillBars = skillCategory.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress-width', progress + '%');
        
        // Small delay for each bar
        setTimeout(() => {
            bar.classList.add('active');
            bar.style.width = progress + '%';
        }, 100);
    });
}

// ============================================
// STATS COUNTER ANIMATION
// ============================================

function animateStats(container) {
    const statNumbers = container.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// SCROLL INDICATOR ANIMATION
// ============================================

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Hide scroll indicator when scrolling down
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// ============================================
// FORM SUBMISSION HANDLER
// ============================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// ============================================
// PARALLAX EFFECT FOR HERO SECTION
// ============================================

const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    });
}

// ============================================
// CURSOR TRAIL EFFECT (Optional Enhancement)
// ============================================

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Create cursor trail
function createCursorTrail() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = mouseX + 'px';
    trail.style.top = mouseY + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 1000);
}

// Optional: Uncomment to enable cursor trail
// setInterval(createCursorTrail, 100);

// ============================================
// TYPING EFFECT FOR HERO SUBTITLE
// ============================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Optional: Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const subtitle = document.querySelector('.hero-subtitle');
//     if (subtitle) {
//         const originalText = subtitle.textContent;
//         typeWriter(subtitle, originalText, 100);
//     }
// });

// ============================================
// IMAGE LAZY LOADING
// ============================================

const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ============================================
// ACTIVE SECTION HIGHLIGHTING IN NAVIGATION
// ============================================

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active-link');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ============================================
// PROJECT CARDS HOVER EFFECT
// ============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// IMAGE LIGHTBOX FOR PROJECT GALLERIES
// ============================================

function createLightbox() {
    // Create lightbox HTML
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" src="" alt="">
        <div class="lightbox-caption"></div>
    `;
    document.body.appendChild(lightbox);
    
    // Add click handlers to all gallery images
    document.querySelectorAll('.project-gallery img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            const lightboxImg = lightbox.querySelector('.lightbox-content');
            const caption = lightbox.querySelector('.lightbox-caption');
            
            lightboxImg.src = img.src;
            caption.textContent = img.title || img.alt;
            lightbox.classList.add('active');
        });
    });
    
    // Close lightbox
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
}

// ============================================
// TECH ICONS SCATTER/GATHER ANIMATION
// ============================================

function initTechIcons() {
    const icons = document.querySelectorAll('.tech-icon');
    const container = document.querySelector('.tech-icons-container');
    
    if (!icons.length || !container) return;
    
    // Generate random scatter positions for each icon
    icons.forEach((icon, index) => {
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const distance = 200 + Math.random() * 300;
        const scatterX = Math.cos(angle) * distance;
        const scatterY = Math.sin(angle) * distance;
        const scatterRotate = Math.random() * 360 - 180;
        
        icon.style.setProperty('--scatter-x', `${scatterX}px`);
        icon.style.setProperty('--scatter-y', `${scatterY}px`);
        icon.style.setProperty('--scatter-rotate', `${scatterRotate}deg`);
        icon.style.transitionDelay = `${index * 0.03}s`;
    });
    
    // Scroll observer for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Gather icons when scrolling into view
                icons.forEach(icon => {
                    icon.classList.remove('scattered');
                    icon.classList.add('gathered');
                });
            } else {
                // Scatter icons when scrolling out
                icons.forEach(icon => {
                    icon.classList.remove('gathered');
                    icon.classList.add('scattered');
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px'
    });
    
    observer.observe(container);
    
    // Initially scatter
    setTimeout(() => {
        icons.forEach(icon => {
            icon.classList.add('scattered');
        });
    }, 100);
}

// ============================================
// TIMELINE PROGRESS FILL ANIMATION
// ============================================

function updateTimelineProgress() {
    const timeline = document.querySelector('.experience-timeline');
    if (!timeline) return;
    
    const timelineRect = timeline.getBoundingClientRect();
    const timelineTop = timelineRect.top + window.pageYOffset;
    const timelineHeight = timelineRect.height;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset + windowHeight / 2;
    
    // Calculate progress percentage
    let progress = ((scrollPosition - timelineTop) / timelineHeight) * 100;
    progress = Math.max(0, Math.min(100, progress));
    
    // Update the gradient fill
    timeline.style.setProperty('--timeline-progress', progress + '%');
    
    // Apply the progress to the ::after pseudo-element
    const afterElement = window.getComputedStyle(timeline, '::after');
    if (afterElement) {
        timeline.style.setProperty('--fill-height', progress + '%');
    }
}

// Initialize timeline progress on load and scroll
window.addEventListener('scroll', updateTimelineProgress);
window.addEventListener('resize', updateTimelineProgress);

// ============================================
// INITIALIZE ALL ANIMATIONS ON PAGE LOAD
// ============================================

window.addEventListener('load', () => {
    // Add loaded class to body for any CSS animations
    document.body.classList.add('loaded');
    
    // Initialize lightbox for images
    createLightbox();
    
    // Initialize tech icons animation
    initTechIcons();
    
    // Initialize timeline progress
    updateTimelineProgress();
    
    // Start observing elements
    console.log('Portfolio website loaded successfully! 🚀');
});

// ============================================
// SCROLL PROGRESS INDICATOR (Optional)
// ============================================

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        document.querySelector('.scroll-progress-bar').style.width = scrolled + '%';
    });
}

// Optional: Uncomment to enable scroll progress bar
// createScrollProgress();

// Add CSS for scroll progress (add to your CSS file if you enable this)
const style = document.createElement('style');
style.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(0, 0, 0, 0.1);
        z-index: 9999;
    }
    
    .scroll-progress-bar {
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        width: 0%;
        transition: width 0.1s ease;
    }
    
    .active-link {
        color: #667eea !important;
    }
    
    .active-link::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);
