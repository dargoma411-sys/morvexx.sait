// ===== Плавное появление секций при скролле / свайпе =====
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px'
});

reveals.forEach(el => observer.observe(el));

// ===== Изменение навбара при скролле =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '14px 32px';
    navbar.style.background = 'rgba(10, 10, 21, 0.85)';
  } else {
    navbar.style.padding = '20px 32px';
    navbar.style.background = 'rgba(10, 10, 21, 0.6)';
  }
});

// ===== Плавный скролл для якорей =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Генерация падающих лепестков сакуры =====
const sakuraContainer = document.getElementById('sakura');

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.textContent = '✿';

  petal.style.left = Math.random() * 100 + '%';

  const size = 0.8 + Math.random() * 1.2;
  petal.style.fontSize = size + 'rem';

  const duration = 10 + Math.random() * 12;
  petal.style.animationDuration = duration + 's';

  petal.style.animationDelay = Math.random() * 8 + 's';
  petal.style.opacity = 0.4 + Math.random() * 0.5;

  const drift = (Math.random() - 0.5) * 200;
  petal.style.setProperty('--drift', drift + 'px');

  sakuraContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, (duration + 8) * 1000);
}

setInterval(createPetal, 600);

for (let i = 0; i < 8; i++) {
  setTimeout(createPetal, i * 400);
}

// ===== Печатающийся текст в hero =====
const phrases = [
  'Создаю современные сайты и Telegram Mini Apps.',
  'Красиво, быстро, с вниманием к деталям.',
  'Учусь сам, через ИИ и свои проекты.',
  'Делаю то, что приятно использовать.'
];

const typedEl = document.getElementById('typed-text');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--;
    typedEl.textContent = current.substring(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 40);
  } else {
    charIndex++;
    typedEl.textContent = current.substring(0, charIndex);

    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 2000);
      return;
    }
    setTimeout(type, 80);
  }
}

setTimeout(type, 1000);
