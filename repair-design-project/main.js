const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.show-mobile');
const iframe = document.querySelector('.iframe__wrap');


button.addEventListener('click', () => {
  if (button.textContent === 'Mobile') {
    button.textContent = 'Desktop';
    iframe.classList.remove('hidden');
    wrapper.classList.add('hidden');
  } else if(button.textContent === 'Desktop') {
    button.textContent = 'Mobile';
    iframe.classList.add('hidden');
    wrapper.classList.remove('hidden');
  }
});