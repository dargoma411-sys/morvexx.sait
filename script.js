// Плавное появление секций при скролле
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('active');
      }, i * 120);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

reveals.forEach(el => observer.observe(el));

// Изменение навбара при скролле
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '14px 6%';
    navbar.style.background = 'rgba(10, 10, 21, 0.85)';
  } else {
    navbar.style.padding = '20px 6%';
    navbar.style.background = 'rgba(10, 10, 21, 0.6)';
  }
});

// Плавный скролл для якорей (на случай если браузер не поддерживает)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
