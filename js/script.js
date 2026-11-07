// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Entrada suave dos elementos durante a rolagem
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

// Formulário: monta uma mensagem e abre o WhatsApp.
// Troque o número abaixo pelo WhatsApp comercial definitivo (DDI + DDD + número).
const WHATSAPP_NUMBER = '+553399201264';

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const company = document.getElementById('company').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  const text = [
    'Olá! Vim pelo site da UPcore Agency e gostaria de conversar sobre um projeto.',
    '',
    `Nome: ${name}`,
    company ? `Empresa: ${company}` : '',
    `Solução de interesse: ${service}`,
    message ? `Sobre o projeto: ${message}` : ''
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
});

document.getElementById('year').textContent = new Date().getFullYear();
