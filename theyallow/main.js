const wrapper = document.querySelector('.wrapper-mobile');
const button = document.querySelector('.show-mobile');
const iframe = document.querySelector('.iframe__wrap');


button.addEventListener('click', () => {
  if (button.textContent === 'Mobile') {
    button.textContent = 'Desktop';
    iframe.classList.remove('hidden');
    wrapper.classList.add('hidden');
    document.body.classList.add('no-background');
  } else if(button.textContent === 'Desktop') {
    button.textContent = 'Mobile';
    iframe.classList.add('hidden');
    wrapper.classList.remove('hidden');
    document.body.classList.remove('no-background');
  }
});