// Kilo Portfolio - Vanilla JavaScript
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all reveal elements
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));
});

// Navigation scroll effect
const nav = document.getElementById('nav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  // Add scrolled class for background
  nav.classList.toggle('scrolled', currentScrollY > 50);
  
  lastScrollY = currentScrollY;
});

// Mobile menu functionality
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu when clicking links
const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
mobileMenuLinks?.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Custom cursor effect (optional - only on desktop)
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const cursor = document.createElement('div');
  cursor.className = 'cursor-glow';
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate cursor with requestAnimationFrame for smooth movement
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();

  // Show/hide cursor
  document.addEventListener('mouseenter', () => cursor.classList.add('active'));
  document.addEventListener('mouseleave', () => cursor.classList.remove('active'));

  // Hover effect on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    const rate = scrolled * -0.3;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
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

// Project card hover tilt effect (subtle)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Skill bars animation on scroll
const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const level = bar.style.getPropertyValue('--level');
      setTimeout(() => {
        bar.style.width = level;
      }, 200);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Trigger initial animations
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal').forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 200);
    });
  }, 100);
});

// Prevent FOUC (Flash of Unstyled Content)
document.documentElement.style.setProperty('--visibility', 'visible');

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Performance optimization - Debounce scroll events
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

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
  // Scroll-based animations here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Touch device detection for better mobile experience
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (isTouchDevice()) {
  document.body.classList.add('touch-device');
}

// Console Easter egg
console.log('%c Kilo Portfolio ', 'background: #000; color: #00ffc8; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c Designed with precision and elegance ', 'background: #111; color: #888; font-size: 12px; padding: 5px;');
