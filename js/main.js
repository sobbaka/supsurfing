document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const subtitle = document.querySelector('.hero__subtitle');
  const subscribe = document.querySelector('.subscribe');

  subscribe.style.left = header.offsetLeft + 'px';
  subscribe.style.top = subtitle.offsetTop + subtitle.offsetHeight + 100 + 'px';
});
