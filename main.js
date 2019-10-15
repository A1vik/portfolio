const education = document.querySelector('#education-title');
const educationList = document.querySelector('.education__list');

education.addEventListener('click', () => {
  if (educationList.classList.contains('hide')) {
    educationList.classList.remove('hide');
    education.classList.remove('education__title');
    education.classList.add('education__title--show');
  } else {
    educationList.classList.add('hide');
    education.classList.add('education__title');
    education.classList.remove('education__title--show');
  }
});

const sliderBtnLeft = document.querySelector('.slider__button--left');
const sliderBtnRight = document.querySelector('.slider__button--right');
const sliderItems = document.querySelectorAll('.slider__item');

let currentSlide = 0;

const nexSlide = () => {
  goToSlide(currentSlide + 1);
};

const prevSlide = () => {
  goToSlide(currentSlide - 1);
};

const goToSlide = (n) => {
  sliderItems[currentSlide].classList.remove('active');
  currentSlide = (n + sliderItems.length) % sliderItems.length;
  sliderItems[currentSlide].classList.add('active');
};

sliderBtnLeft.addEventListener('click', prevSlide);
sliderBtnRight.addEventListener('click', nexSlide);