// Language Switcher
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ru';
        this.init();
    }
    
    init() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });
        
        // Set initial language
        this.switchLanguage(this.currentLang, false);
    }
    
    switchLanguage(lang, save = true) {
        this.currentLang = lang;
        
        if (save) {
            localStorage.setItem('language', lang);
        }
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update document language
        document.documentElement.lang = lang;
        
        // Update videos if they are already loaded
        this.updateVideos();
    }
    
    updateVideos() {
        const iframes = document.querySelectorAll('.video-iframe');
        iframes.forEach(iframe => {
            // Only update if video is already loaded
            if (iframe.src) {
                const dataSrc = this.currentLang === 'ru' 
                    ? iframe.getAttribute('data-src-ru')
                    : iframe.getAttribute('data-src-en');
                if (dataSrc) {
                    iframe.src = dataSrc;
                }
            }
        });
    }
    
    getCurrentLang() {
        return this.currentLang;
    }
}

// Portfolio Video Handler
class PortfolioVideoHandler {
    constructor(languageSwitcher) {
        this.languageSwitcher = languageSwitcher;
        this.init();
    }
    
    init() {
        const playButtons = document.querySelectorAll('.play-button');
        
        playButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const card = button.closest('.portfolio-card');
                const thumbnail = card.querySelector('.video-thumbnail');
                const iframe = card.querySelector('.video-iframe');
                
                if (thumbnail && iframe) {
                    // Get current language
                    const currentLang = this.languageSwitcher ? this.languageSwitcher.getCurrentLang() : 'ru';
                    
                    // Load video src from data-src-ru or data-src-en based on language
                    if (!iframe.src) {
                        const dataSrc = currentLang === 'ru' 
                            ? iframe.getAttribute('data-src-ru')
                            : iframe.getAttribute('data-src-en');
                        if (dataSrc) {
                            iframe.src = dataSrc;
                        }
                    } else {
                        // Update video if language changed
                        const dataSrc = currentLang === 'ru' 
                            ? iframe.getAttribute('data-src-ru')
                            : iframe.getAttribute('data-src-en');
                        if (dataSrc && iframe.src !== dataSrc) {
                            iframe.src = dataSrc;
                        }
                    }
                    
                    // Hide thumbnail and show iframe
                    thumbnail.style.display = 'none';
                    iframe.style.display = 'block';
                }
            });
        });
    }
}

// Smooth Scroll Navigation
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offset = 80; // Account for fixed navbar
                    const targetPosition = target.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Navbar Scroll Effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScroll = 0;
        this.init();
    }
    
    init() {
        if (!this.navbar) return;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add background on scroll
            if (currentScroll > 50) {
                this.navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
            } else {
                this.navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.8)';
            }
            
            this.lastScroll = currentScroll;
        });
    }
}

// Active Navigation Link Highlighting
class ActiveNavLink {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-links a');
        this.init();
    }
    
    init() {
        if (this.sections.length === 0 || this.navLinks.length === 0) return;
        
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosition = window.pageYOffset + 150;
            
            this.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// Intersection Observer for Fade-in Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe cards and sections
        const elementsToAnimate = document.querySelectorAll(
            '.service-card, .testimonial-card, .contact-card, .portfolio-card, .section-header'
        );
        
        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// CTA Button Handlers
class CTAHandlers {
    constructor() {
        this.init();
    }
    
    init() {
        const ctaButtons = document.querySelectorAll('.hero-cta, .nav-cta, .tech-stack-cta');
        
        ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // You can add custom logic here, like opening a contact form
                // For now, just scroll to contact section
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                    e.preventDefault();
                    const offset = 80;
                    const targetPosition = contactSection.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// LiquidEther Hero Background Initialization
class LiquidEtherHeroBackground {
    constructor() {
        this.liquidEther = null;
        this.init();
    }

    init() {
        const container = document.getElementById('liquid-ether-hero');
        if (!container) {
            console.warn('LiquidEther hero container not found');
            return;
        }

        // Wait for THREE.js to be loaded
        let attempts = 0;
        const maxAttempts = 50;
        const waitForTHREE = () => {
            attempts++;
            if (typeof THREE !== 'undefined' && THREE && THREE.WebGLRenderer) {
                try {
                    console.log('THREE.js loaded, initializing LiquidEther...');
                    this.liquidEther = new LiquidEther(container, {
                        colors: ['#5227FF', '#FF9FFC', '#B19EEF'],
                        mouseForce: 20,
                        cursorSize: 100,
                        isViscous: false,
                        viscous: 30,
                        iterationsViscous: 32,
                        iterationsPoisson: 32,
                        resolution: 0.5,
                        isBounce: false,
                        autoDemo: true,
                        autoSpeed: 0.5,
                        autoIntensity: 2.2,
                        takeoverDuration: 0.25,
                        autoResumeDelay: 3000,
                        autoRampDuration: 0.6
                    });
                    console.log('LiquidEther hero background initialized');
                    
                    // Check if canvas was created
                    setTimeout(() => {
                        const canvas = container.querySelector('canvas');
                        if (canvas) {
                            console.log('Canvas found, dimensions:', canvas.width, 'x', canvas.height);
                        } else {
                            console.warn('Canvas not found in container');
                        }
                    }, 500);
                } catch (error) {
                    console.error('Error initializing LiquidEther for hero:', error);
                }
            } else if (attempts < maxAttempts) {
                setTimeout(waitForTHREE, 100);
            } else {
                console.error('THREE.js failed to load after', maxAttempts, 'attempts');
            }
        };
        waitForTHREE();
    }

    dispose() {
        if (this.liquidEther) {
            this.liquidEther.dispose();
            this.liquidEther = null;
        }
    }
}

// Tech Stack - no navigation needed, all items displayed
class TechStackNav {
    constructor() {
        // All cards are displayed, no navigation needed
        this.init();
    }
    
    init() {
        // Ensure all cards are visible
        const cards = document.querySelectorAll('.tech-card');
        cards.forEach(card => {
            card.style.display = 'flex';
        });
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize LiquidEther background for hero section
    const liquidEtherHeroBg = new LiquidEtherHeroBackground();

    // Initialize language switcher first
    const languageSwitcher = new LanguageSwitcher();
    
    // Initialize portfolio video handler with language switcher
    new PortfolioVideoHandler(languageSwitcher);
    new TechStackNav();
    new SmoothScroll();
    new NavbarScroll();
    new ActiveNavLink();
    new ScrollAnimations();
    new CTAHandlers();
    
    console.log('Portfolio landing page initialized!');
});

