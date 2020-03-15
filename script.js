const MENU = document.getElementById('header-navigation-list-JS');



MENU.addEventListener('click', (element) => {
  MENU.querySelectorAll('.header-navigation-list__item .header-navigation-list__link').forEach(element => element.classList.remove('header-navigation-list__link-active')); // пробежаться по списку и поудалять
  

  if(~event.target.className.indexOf('header-navigation-list__link', 0)) // если таргет был именно на ссылку (~ = -1)
  event.target.classList.add('header-navigation-list__link-active');  // добавить класс
});



