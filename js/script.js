// Preloader
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        preloader.classList.add('hidden');
        
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    });
});

// Menú hamburguesa
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const body = document.body;

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
    navbar.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.navbar a').forEach(function(link) {
    link.addEventListener('click', function() {
        menuBtn.classList.remove('open');
        navbar.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

// Header sticky al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Cursor personalizado
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Efecto hover en elementos interactivos
const hoverElements = document.querySelectorAll('a, button, .service-box, .portfolio-box, .btn, .social-media a, .footer-iconTop a');

hoverElements.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
        cursor.classList.add('hovered');
    });
    
    element.addEventListener('mouseleave', function() {
        cursor.classList.remove('hovered');
    });
});

// Animación de las secciones al hacer scroll
const sections = document.querySelectorAll('section');

function animateOnScroll() {
    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animaciones
sections.forEach(function(section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Ejecutar al cargar

// Formulario de contacto
const contactForm = document.querySelector('.contact form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envío del formulario
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Simular retraso de envío
        setTimeout(function() {
            submitBtn.textContent = '¡Mensaje enviado!';
            
            // Resetear después de 3 segundos
            setTimeout(function() {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 3000);
        }, 1500);
    });
}

// Ajustar altura de secciones en móviles
function adjustSectionHeights() {
    const isMobile = window.innerWidth <= 768;
    
    sections.forEach(function(section) {
        if (isMobile) {
            section.style.minHeight = 'auto';
            section.style.padding = '8rem 4%';
        } else {
            section.style.minHeight = '';
            section.style.padding = '';
        }
    });
}

window.addEventListener('resize', adjustSectionHeights);
adjustSectionHeights(); // Ejecutar al cargar