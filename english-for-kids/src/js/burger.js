const menu = document.querySelector('.burger-menu');
menu.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('open');
});

document.addEventListener('click', () => {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  }
});

export default menu;
