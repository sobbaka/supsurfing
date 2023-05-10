document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const subtitle = document.querySelector('.hero__subtitle');
  const subscribe = document.querySelector('.subscribe');

  subscribe.style.left = header.offsetLeft + 'px';
  subscribe.style.top = subtitle.offsetTop + subtitle.offsetHeight + 100 + 'px';



  const about = document.querySelector('.about');

  window.addEventListener('scroll', () => {
    const aboutPosition = about.getBoundingClientRect().top + window.scrollY;
    const headerPosition = header.getBoundingClientRect().top + window.scrollY;

    if (headerPosition >= aboutPosition - 78) {
      header.style.backgroundColor = 'rgba(54, 53, 53, 0.418)';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
});
