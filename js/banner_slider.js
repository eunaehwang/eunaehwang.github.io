let currentSlide = 0;
let startX;
let isDragging = false;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const banner = document.querySelector('.banner');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  banner.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// For swipe functionality
document.querySelector('.banner').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

document.querySelector('.banner').addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diffX = startX - currentX;

  // Dragging threshold
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    isDragging = false;
  }
});

document.querySelector('.banner').addEventListener('touchend', () => {
  isDragging = false;
});

// For mouse swipe functionality
document.querySelector('.banner').addEventListener('mousedown', (e) => {
  startX = e.clientX;
  isDragging = true;
});

document.querySelector('.banner').addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentX = e.clientX;
  const diffX = startX - currentX;

  // Dragging threshold
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    isDragging = false;
  }
});

document.querySelector('.banner').addEventListener('mouseup', () => {
  isDragging = false;
});

document.querySelector('.banner').addEventListener('mouseleave', () => {
  isDragging = false;
});

// Show buttons when mouse is over banner
document
  .querySelector('.banner-container')
  .addEventListener('mouseover', () => {
    document.querySelector('.prev').style.display = 'block';
    document.querySelector('.next').style.display = 'block';
  });

// Hide buttons when mouse leaves banner
document.querySelector('.banner-container').addEventListener('mouseout', () => {
  document.querySelector('.prev').style.display = 'none';
  document.querySelector('.next').style.display = 'none';
});

// Initial display
showSlide(currentSlide);
