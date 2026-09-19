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

  // Случайная позиция по горизонтали
  petal.style.left = Math.random() * 100 + '%';

  // Случайный размер
  const size = 0.8 + Math.random() * 1.2;
  petal.style.fontSize = size + 'rem';

  // Случайная длительность падения
  const duration = 10 + Math.random() * 12;
  petal.style.animationDuration = duration + 's';

  // Случайная задержка старта
  petal.style.animationDelay = Math.random() * 8 + 's';

  // Случайная прозрачность
  petal.style.opacity = 0.4 + Math.random() * 0.5;

  // Случайное смещение по горизонтали при падении
  const drift = (Math.random() - 0.5) * 200;
  petal.style.setProperty('--drift', drift + 'px');

  sakuraContainer.appendChild(petal);

  // Удаляем лепесток после завершения анимации
  setTimeout(() => {
    petal.remove();
  }, (duration + 8) * 1000);
}

// Создаём лепестки постоянно
setInterval(createPetal, 600);

// Первая партия сразу при загрузке
for (let i = 0; i < 8; i++) {
  setTimeout(createPetal, i * 400);
}
