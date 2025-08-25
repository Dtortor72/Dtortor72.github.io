// ---------------------- MENU MÓVIL ----------------------
const mobileMenu = document.querySelector('.mobile-menu');
const navUl = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// ---------------------- DESPLAZAMIENTO SUAVE ----------------------
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
    });
}

// ---------------------- WHATSAPP FLOAT ----------------------
const whatsappFloat = document.querySelector('.whatsapp-float');
whatsappFloat.addEventListener('click', () => {
    console.log('Redirigiendo a WhatsApp...');
});
