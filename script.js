const MENU = document.getElementById('header-navigation-list-JS');
const FORM = document.getElementById("main-form-JS");
const BUTTON = document.getElementById('main-form__button-JS'); // кнопка отправки формы
const MESSAGE_BLOCK = document.getElementById('form-message-block-background-JS'); // модальное окно
const BUTTON_OK = document.getElementById('form-message-block-ok-JS'); // кнопка ок   
const BUTTON_CLOSE = document.getElementById('form-message-block-close-JS'); // кнопка крестик


// Header
MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('.header-navigation-list__item .header-navigation-list__link').forEach(element => element.classList.remove('header-navigation-list__link-active')); // пробежаться по списку и поудалять

  if(~event.target.className.indexOf('header-navigation-list__link', 0)) // если таргет был именно на ссылку (~ = -1)
  event.target.classList.add('header-navigation-list__link-active');  // добавить класс
});


// Get a quote
// событие отправки формы и нажатия клавиши отправить
FORM.addEventListener('submit', function(){
  
  event.preventDefault();
  document.getElementById('form-message-block-JS').classList.remove('hidden'); // убрать класс hidden у всплывашки
  document.getElementById('form-message-block-background-JS').classList.remove('hidden'); // убрать класс hidden у всплывашки
  
  const SUBJECT = document.getElementById('main-form__input-subject-JS').value.toString(); // текст который ввёл в инпут с id subject
  const DESCRIBE = document.getElementById('main-form__textarea-describe-JS').value.toString(); // текст который ввёл в инпут с id subject
  
  if (SUBJECT)
  document.getElementById('form-message-block-topic-JS').innerText = `Тема: ${SUBJECT}`; // добавить текст из перемен. subject в id-ишник result
  else 
  document.getElementById('form-message-block-topic-JS').innerText = 'Без темы';
   
  if (DESCRIBE)
  document.getElementById('form-message-block-description-JS').innerText = `Описание: ${DESCRIBE}`; // добавить текст из перемен. subject в id-ишник result
  else
  document.getElementById('form-message-block-description-JS').innerText = 'Без описания';

  document.getElementById('main-form-JS').reset(); // сбросить все поля формы в исходное состояние
});


// клик по модальному окну
MESSAGE_BLOCK.addEventListener('click', () => {
  document.getElementById('form-message-block-JS').classList.add('hidden'); // добавить класс hidden у всплывашки
  document.getElementById('form-message-block-background-JS').classList.add('hidden'); // убрать класс hidden у всплывашки
  document.getElementById('form-message-block-topic-JS').innerText = ''; // убрать текст из перемен. id-ишник result
  document.getElementById('form-message-block-description-JS').innerText = ''; // убрать текст из перемен. id-ишник result
});


// событие нажатия клавиши esc
document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') 
    document.getElementById('form-message-block-JS').classList.add('hidden'); // добавить класс hidden у всплывашки
    document.getElementById('form-message-block-background-JS').classList.add('hidden'); // убрать класс hidden у всплывашки
    document.getElementById('form-message-block-topic-JS').innerText = ''; // убрать текст из перемен. id-ишник result
    document.getElementById('form-message-block-description-JS').innerText = ''; // убрать текст из перемен. id-ишник result
});


// нажатие кнопки ok
BUTTON_OK.addEventListener('click', () => {
  document.getElementById('form-message-block-JS').classList.add('hidden'); // добавить класс hidden у всплывашки
  document.getElementById('form-message-block-background-JS').classList.add('hidden'); // убрать класс hidden у всплывашки
  document.getElementById('form-message-block-topic-JS').innerText = ''; // убрать текст из перемен. id-ишник result
  document.getElementById('form-message-block-description-JS').innerText = ''; // убрать текст из перемен. id-ишник result
});


// нажатие кнопки close
BUTTON_CLOSE.addEventListener('click', () => {
  document.getElementById('form-message-block-JS').classList.add('hidden'); // добавить класс hidden у всплывашки
  document.getElementById('form-message-block-background-JS').classList.add('hidden'); // убрать класс hidden у всплывашки
  document.getElementById('form-message-block-topic-JS').innerText = ''; // убрать текст из перемен. id-ишник result
  document.getElementById('form-message-block-description-JS').innerText = ''; // убрать текст из перемен. id-ишник result
});
