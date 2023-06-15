function addClassOnFirstAppear(element, className) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        entry.target.classList.add(className);
        entry.target.classList.remove('animate__visiable-custom');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }); // Adjust the threshold as needed (0.1 means 10% of the element is visible)

  observer.observe(element);
}

const elementsLeft = document.querySelectorAll('.animate__animated');

elementsLeft.forEach((element) => {
  if (element.classList.contains('fade__in')) addClassOnFirstAppear(element, 'animate__fadeIn');

  if (element.classList.contains('fade__right')) addClassOnFirstAppear(element, 'animate__fadeInRight');

  if (element.classList.contains('fade__left')) addClassOnFirstAppear(element, 'animate__fadeInLeft');

});


