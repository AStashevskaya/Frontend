const menu = document.querySelector('.burger-menu');
menu.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  const menuList = document.querySelector('.menu-list');

  if (menu.classList.contains('open')) {
    if (e.target === menuList) return;

    menu.classList.remove('open');
  }
});

export default menu;
