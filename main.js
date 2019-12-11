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


// swiper

const slider = document.querySelector('.slider');

let posXstart = 0;
let posXend = 0;

const slideMove = () => {
  const n = posXstart - posXend;
  if (n >= 120) {
    goToSlide(currentSlide + 1);
  } else if (n <= -120) {
    goToSlide(currentSlide - 1);
  }
};

const positionStartHandler = (e) => {
  posXstart = e.targetTouches[0].clientX;
};

const positionEndHandler = (e) => {
  posXend = e.targetTouches[0].clientX;
};


slider.addEventListener('touchstart', positionStartHandler);
slider.addEventListener('touchmove', positionEndHandler);
slider.addEventListener('touchend', slideMove);


//description

const descrBtn = document.querySelector('.slider__show-desc');

descrBtn.addEventListener('click', () => {
  console.log(currentSlide);
  if (currentSlide === 0) {
    document.querySelector('.slider__advantages--yallow').classList.toggle('hide--mobile');
  } else if (currentSlide === 1) {
    document.querySelector('.slider__advantages--repair').classList.toggle('hide--mobile');
  }
});