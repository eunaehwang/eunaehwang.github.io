document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.detail-numbering a');
  const containers = document.querySelectorAll('.ad-container');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1, // 10% 이상 보이면 발생하도록 수정
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const button = document.querySelector(
        `.detail-numbering a i[data-target="${entry.target.id}"]`
      );
      if (entry.isIntersecting) {
        button.parentElement.classList.add('active');
      } else {
        button.parentElement.classList.remove('active');
      }
    });
  }, observerOptions);

  containers.forEach((container) => observer.observe(container));

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.querySelector('i').getAttribute('data-target');
      const target = document.getElementById(targetId);

      target.scrollIntoView({ behavior: 'smooth' });

      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});
