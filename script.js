// Translations
const translations = {
    ru: {
        'nav.about': 'Кто я',
        'nav.experience': 'Опыт',
        'nav.portfolio': 'Портфолио',
        'nav.techStack': 'Стек',
        'nav.contact': 'Контакты',
        'nav.contactMe': 'Связаться со мной',
        'hero.description': 'Создаю современные цифровые решения с фокусом на качество и инновации. Специализируюсь на разработке интерактивных симуляторов, обучающих систем и VR-приложений, а также игр на Unity.',
        'hero.name.first': 'Никита',
        'hero.name.last': 'Устинов',
        'services.title': 'Опыт работы',
        'techStack.title': 'Стек',
        'contact.title': 'Контакты',
        'contact.phone': 'Телефон',
        'contact.email': 'Почта',
        'contact.quote': '«Общение — это начало любого великого дела.» — Дмитрий Менделеев',
        'portfolio.title': 'Проекты',
        'portfolio.subtitle': 'Некоторые из моих работ',
        'exp.lead.title': 'Lead Unity Developer',
        'exp.lead.company': 'Robiсlab (ООО Робиклаб) | Санкт-Петербург, Россия',
        'exp.lead.dates': 'Январь 2022 — Декабрь 2025',
        'exp.lead.achievement1': 'Руководство разработкой интерактивных образовательных симуляторов (WebGL, Unity)',
        'exp.lead.achievement2': 'Проектирование архитектуры и внедрение современных решений (Zenject, Addressables и др.)',
        'exp.lead.achievement3': 'Интеграция аппаратных датчиков и внешних сервисов',
        'exp.lead.achievement4': 'Тестирование, документация, код-ревью',
        'exp.lead.achievement5': 'Менторинг и управление командой',
        'exp.unity.title': 'Unity Developer',
        'exp.unity.company': 'BlazesGames | Россия',
        'exp.unity.dates': 'Октябрь 2018 — Декабрь 2022',
        'exp.unity.achievement1': 'Разработка мобильных и PC-проектов (Android / iOS / Steam)',
        'exp.unity.achievement2': 'Создание геймплея, уровней, UI и катсцен',
        'exp.unity.achievement3': 'Оптимизация и подготовка билдов под разные платформы',
        'exp.unity.achievement4': 'Публикация и поддержка проектов',
        'exp.unity.achievement5': 'Участие в коммерческих релизах',
        'exp.ar.title': 'Unity / AR Developer',
        'exp.ar.company': 'Издательский центр «Аврора» | Санкт-Петербург, Россия',
        'exp.ar.achievement1': 'Создание кроссплатформенного AR-приложения (Android / iOS)',
        'exp.ar.achievement2': 'Работа с 3D-контентом, трекингом и интерактивом в реальном времени',
        'exp.ar.achievement3': 'Интеграция серверной части: загрузка и обновление контента / бандлов с сервера',
        'exp.ar.achievement4': 'Оптимизация UX и производительности для стабильной работы на мобильных устройствах',
        'exp.ar.achievement5': 'Подготовка к публикации и сопровождение проекта',
        'portfolio.mechanical.title': 'WebGL Mechanical Simulator',
        'portfolio.mechanical.description': 'Симулятор механики с интерактивными лабораторными работами и физикой в реальном времени. Работает во внутренней образовательной платформе в браузере, поддерживает сохранения и позволяет собирать конструкции из обширного инвентаря.',
        'portfolio.optics.title': 'WebGL Optics Simulator',
        'portfolio.optics.description': 'Интерактивный симулятор оптики с инвентарём приборов, разными источниками света и системой линз, формирующей проекции на экране. Содержит лабораторные задания для практики и обучения, работает в браузере на внутренней платформе заказчика и сохраняет личный прогресс.',
        'portfolio.rabbit.title': 'Rabbit Hole',
        'portfolio.rabbit.description': 'Атмосферный приключенческий survival-horror с упором на исследование, напряжённое выживание, стелс и прямой бой. Игра сочетает исследование локаций и механики выживания, создавая мрачную и напряжённую атмосферу.',
        'portfolio.awakening.title': 'Awakening: The Story of Elizabeth',
        'portfolio.awakening.description': 'Мобильный мистический квест от первого лица с атмосферным исследованием и интерактивной средой. Создан на Unity для iOS и Android, поддерживает сенсорное управление, включает интерактивные объекты, аудио-эффекты, головоломки и элементы выживания.',
        'portfolio.projector.title': 'Interactive Projector Game',
        'portfolio.projector.description': 'Интерактивная проекторная игра с управлением жестами и предметами. Игроки защищают коров от летающих тарелок. Проект демонстрирует опыт создания мультимедийных приложений на Unity с отслеживанием действий в реальном времени и проекцией на стены или пол.'
    },
    en: {
        'nav.about': 'Home',
        'nav.experience': 'Experience',
        'nav.portfolio': 'Portfolio',
        'nav.techStack': 'Tech Stack',
        'nav.contact': 'Contact',
        'nav.contactMe': 'Contact Me',
        'hero.description': 'I craft modern digital solutions that prioritize quality and innovation. My expertise lies in developing interactive simulators, educational platforms, VR applications, and Unity games.',
        'hero.name.first': 'Nikita',
        'hero.name.last': 'Ustinov',
        'services.title': 'Work Experience',
        'techStack.title': 'Tech Stack',
        'contact.title': 'Contact',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.quote': '"An idea becomes valuable only when it is realized together with others." — Thomas Edison',
        'portfolio.title': 'Projects',
        'portfolio.subtitle': 'Some of My Work',
        'exp.lead.title': 'Lead Unity Developer',
        'exp.lead.company': 'Robiclab | Saint Petersburg, Russia',
        'exp.lead.dates': 'January 2022 — December 2025',
        'exp.lead.achievement1': 'Led the development of interactive educational simulators (WebGL, Unity)',
        'exp.lead.achievement2': 'Designed architecture and implemented modern solutions (Zenject, Addressables, etc.)',
        'exp.lead.achievement3': 'Integrated hardware sensors and external services',
        'exp.lead.achievement4': 'Conducted testing, documentation, and code reviews',
        'exp.lead.achievement5': 'Mentored and managed the development team',
        'exp.unity.title': 'Unity Developer',
        'exp.unity.company': 'BlazesGames | Russia',
        'exp.unity.dates': 'October 2018 — December 2022',
        'exp.unity.achievement1': 'Developed mobile and PC projects (Android / iOS / Steam)',
        'exp.unity.achievement2': 'Created gameplay, levels, UI, and cutscenes',
        'exp.unity.achievement3': 'Optimized and prepared builds for multiple platforms',
        'exp.unity.achievement4': 'Published and maintained projects',
        'exp.unity.achievement5': 'Participated in commercial releases',
        'exp.ar.title': 'Unity / AR Developer',
        'exp.ar.company': 'Aurora Publishing Center | Saint Petersburg, Russia',
        'exp.ar.achievement1': 'Developed cross-platform AR application (Android / iOS)',
        'exp.ar.achievement2': 'Worked with 3D content, tracking, and real-time interactivity',
        'exp.ar.achievement3': 'Integrated server-side functionality: content and bundle loading/updating',
        'exp.ar.achievement4': 'Optimized UX and performance for stable mobile operation',
        'exp.ar.achievement5': 'Prepared project for publication and provided ongoing support',
        'portfolio.mechanical.title': 'Mechanical Simulator',
        'portfolio.mechanical.description': 'A simulator featuring interactive lab exercises and real-time physics. Runs within an internal educational platform in the browser, supports saving progress, and allows users to assemble constructions from an extensive inventory.',
        'portfolio.optics.title': 'WebGL Optics Simulator',
        'portfolio.optics.description': 'An interactive optics simulator featuring a toolbox of instruments, multiple light sources, and a lens system that forms projections on the screen. Includes lab exercises for hands-on practice and learning, runs in the browser on the client\'s internal platform, and saves individual progress.',
        'portfolio.rabbit.title': 'Rabbit Hole',
        'portfolio.rabbit.description': 'An atmospheric adventure survival-horror game focused on exploration, tense survival, stealth, and direct combat. Combines location exploration with survival mechanics to create a dark and intense atmosphere.',
        'portfolio.awakening.title': 'Awakening: The Story of Elizabeth',
        'portfolio.awakening.description': 'A mobile first-person mystical quest featuring atmospheric exploration and an interactive environment. Developed in Unity for iOS and Android, it supports touch controls and includes interactive objects, audio effects, puzzles, and survival elements.',
        'portfolio.projector.title': 'Interactive Projector Game',
        'portfolio.projector.description': 'An interactive projector-based game with gesture and object controls. Players defend cows from flying saucers. The project demonstrates experience in creating multimedia Unity applications with real-time action tracking and projection onto walls or floors.'
    }
};

// Language Switcher
class LanguageSwitcher {
    constructor() {
        // Check URL hash first, then localStorage, then default to 'ru'
        const urlLang = window.location.hash === '#EN' ? 'en' : null;
        this.currentLang = urlLang || localStorage.getItem('language') || 'ru';
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
        
        // Listen for hash changes (back/forward navigation)
        window.addEventListener('hashchange', () => {
            const urlLang = window.location.hash === '#EN' ? 'en' : 'ru';
            if (urlLang !== this.currentLang) {
                this.switchLanguage(urlLang, false);
            }
        });
        
        // Set initial language
        this.switchLanguage(this.currentLang, false);
    }
    
    switchLanguage(lang, save = true) {
        this.currentLang = lang;
        
        if (save) {
            localStorage.setItem('language', lang);
            
            // Update URL hash
            if (lang === 'en') {
                // Add #EN to URL
                if (window.location.hash !== '#EN') {
                    window.history.pushState(null, '', '#EN');
                }
            } else {
                // Remove hash from URL for Russian
                if (window.location.hash === '#EN') {
                    window.history.pushState(null, '', window.location.pathname + window.location.search);
                }
            }
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
        
        // Update translations
        this.updateTranslations();
        
        // Update videos if they are already loaded
        this.updateVideos();
    }
    
    updateTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[this.currentLang] && translations[this.currentLang][key]) {
                element.textContent = translations[this.currentLang][key];
            }
        });
    }
    
    updateVideos() {
        // Update video URLs only if they are already loaded
        const iframes = document.querySelectorAll('.video-iframe.loaded');
        iframes.forEach(iframe => {
            const dataSrc = this.currentLang === 'ru' 
                ? iframe.getAttribute('data-src-ru')
                : iframe.getAttribute('data-src-en');
            if (dataSrc) {
                const url = new URL(dataSrc);
                url.searchParams.set('autoplay', '1');
                iframe.src = url.toString();
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
        // Setup click handlers for video thumbnails
        this.setupClickHandlers();
        
        // Update videos when language changes
        if (this.languageSwitcher) {
            const originalUpdateVideos = this.languageSwitcher.updateVideos.bind(this.languageSwitcher);
            this.languageSwitcher.updateVideos = () => {
                originalUpdateVideos();
                // Videos will be reloaded on next click if needed
            };
        }
    }
    
    setupClickHandlers() {
        const thumbnails = document.querySelectorAll('.video-thumbnail');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const videoContainer = thumbnail.closest('.portfolio-video');
                const iframe = videoContainer.querySelector('.video-iframe');
                
                if (iframe && !iframe.src) {
                    // Load video with autoplay on click
                    this.loadVideoOnClick(iframe);
                }
                
                // Hide thumbnail and show iframe
                thumbnail.classList.add('hidden');
                iframe.classList.add('loaded');
            });
        });
    }
    
    loadVideoOnClick(iframe) {
        const currentLang = this.languageSwitcher ? this.languageSwitcher.getCurrentLang() : 'ru';
        const dataSrc = currentLang === 'ru' 
            ? iframe.getAttribute('data-src-ru')
            : iframe.getAttribute('data-src-en');
        
        if (dataSrc) {
            // Load video with autoplay when user clicks
            const url = new URL(dataSrc);
            url.searchParams.set('autoplay', '1');
            iframe.src = url.toString();
        }
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
            '.service-card, .testimonial-card, .contact-card, .portfolio-card, .section-header, .tech-card, .tech-stack-header, .tech-stack-wrapper'
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

// Email Copy Handler
class EmailCopyHandler {
    constructor(languageSwitcher) {
        this.languageSwitcher = languageSwitcher;
        this.emailCard = document.querySelector('.contact-card-email');
        this.phoneCard = document.querySelector('.contact-card-phone');
        this.init();
    }
    
    init() {
        // Email card click handler
        if (this.emailCard) {
            this.emailCard.addEventListener('click', (e) => {
                e.preventDefault();
                const emailElement = this.emailCard.querySelector('.contact-email');
                const email = emailElement ? (emailElement.getAttribute('data-email') || emailElement.textContent.trim()) : 'i@nustinov.ru';
                this.copyToClipboard(email);
            });
        }
        
        // Phone card click handler
        if (this.phoneCard) {
            this.phoneCard.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'tel:+79313694024';
            });
        }
    }
    
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showNotification();
        } catch (err) {
            console.error('Failed to copy email:', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                this.showNotification();
            } catch (e) {
                console.error('Fallback copy failed:', e);
            }
            document.body.removeChild(textArea);
        }
    }
    
    showNotification() {
        // Remove existing notification if any
        const existing = document.querySelector('.copy-notification');
        if (existing) {
            existing.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        
        // Get current language and set appropriate message
        const currentLang = this.languageSwitcher ? this.languageSwitcher.currentLang : 'ru';
        notification.textContent = currentLang === 'ru' ? 'Скопировано' : 'copied';
        
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove after animation
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 2000);
    }
}

// Hero Animation Handler
class HeroAnimation {
    constructor() {
        this.heroContent = document.querySelector('.hero-content');
        this.init();
    }
    
    init() {
        if (!this.heroContent) return;
        
        // Add visible class after a short delay to trigger animation
        setTimeout(() => {
            this.heroContent.classList.add('hero-visible');
        }, 100);
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize LiquidEther background for hero section
    const liquidEtherHeroBg = new LiquidEtherHeroBackground();

    // Initialize language switcher first
    const languageSwitcher = new LanguageSwitcher();
    
    // Initialize hero animation
    new HeroAnimation();
    
    // Initialize portfolio video handler with language switcher
    new PortfolioVideoHandler(languageSwitcher);
    new TechStackNav();
    new SmoothScroll();
    new NavbarScroll();
    new ActiveNavLink();
    new ScrollAnimations();
    new CTAHandlers();
    new EmailCopyHandler(languageSwitcher);
    
    console.log('Portfolio landing page initialized!');
});

