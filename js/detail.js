document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const containerId = entry.target.closest('.image-container').id;
        document
          .querySelectorAll('.text-content')
          .forEach((el) => el.classList.remove('active'));
        document
          .querySelector(`#text${containerId.slice(-1)}`)
          .classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.image-section img').forEach((image) => {
    observer.observe(image);
  });
});

// 초기 상태 설정
document.getElementById('text1').classList.add('active');

//
// 넘버링 클릭하면 페이지이동
//
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 해당하는 아이콘의 색상을 빨간색으로 변경
        const containerId = entry.target.id;
        const iconIndex = parseInt(containerId.replace('container', '')) - 1;
        const currentIcon = document.querySelector(
          `.detail-numbering a:nth-child(${iconIndex + 1}) i`
        );

        // 이전에 선택된 아이콘의 색상을 기본값으로 변경
        const previousSelectedIcon = document.querySelector(
          '.detail-numbering a i.red'
        );
        if (previousSelectedIcon) {
          previousSelectedIcon.classList.remove('red');
          previousSelectedIcon.style.color = 'black';
        }

        // 현재 아이콘의 색상을 빨간색으로 변경
        currentIcon.classList.add('red');
        currentIcon.style.color = 'red';
      }
    });
  });

  // 이미지 컨테이너의 관찰
  document.querySelectorAll('.image-container').forEach((container) => {
    observer.observe(container);
  });

  // 아이콘 클릭 이벤트 처리
  document.querySelectorAll('.detail-numbering a').forEach((icon, index) => {
    icon.addEventListener('click', () => {
      // 클릭된 아이콘에 해당하는 이미지 컨테이너 스크롤하여 뷰포트에 보이도록 이동
      const containerToShow = document.getElementById(`container${index + 1}`);
      if (containerToShow) {
        containerToShow.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // 이전에 선택된 아이콘의 색상을 기본값으로 변경
        const previousSelectedIcon = document.querySelector(
          '.detail-numbering a i.red'
        );
        if (previousSelectedIcon) {
          previousSelectedIcon.classList.remove('red');
          previousSelectedIcon.style.color = 'black';
        }

        // 현재 클릭된 아이콘의 색상을 빨간색으로 변경
        icon.querySelector('i').classList.add('red');
        icon.querySelector('i').style.color = 'var(--primary-color)';
      }
    });
  });
});
