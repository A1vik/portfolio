const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.show-mobile');
const iframe = document.querySelector('.iframe__wrap');

const buttonMobile = document.createElement('button');
buttonMobile.classList.add('show-mobile');
document.querySelector('body').append(buttonMobile);

buttonMobile.addEventListener('click', () => {
  // button.classList.add('hidden');
  iframe.classList.remove('hidden');

  wrapper.classList.add('hidden');
});