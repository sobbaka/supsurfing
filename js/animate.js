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

const elementToObserve = document.querySelectorAll('.animate__animated');

elementToObserve.forEach((title) => {
  addClassOnFirstAppear(title, 'animate__fadeInLeft');
})

// addClassOnFirstAppear(elementToObserve, 'animate__fadeInDown');
