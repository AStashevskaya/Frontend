const menu = document.querySelector('.burger-menu');
menu.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('open');
});

export default menu;
