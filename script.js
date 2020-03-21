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

// слайдер 
let items = document.querySelectorAll('.slider__item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slider__item-active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('slider__item-next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slider__item-next', direction);
		this.classList.add('slider__item-active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.slider__btn-left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.slider__btn-right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
						previousItem(currentItem);
					}
				} else {
					if (isEnabled) {
						nextItem(currentItem);
					}
				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
			if (e.target.classList.contains('slider__btn-left')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}

var el = document.querySelector('.slider-container');
swipedetect(el);


/* телефоны */

const PHONE_VERTICAL = document.getElementById('slider__phone-vertical-JS');
const PHONE_VERTICAL_DISPLAY = document.getElementById('slider__phone-vertical-display-JS');
const PHONE_HORIZONTAL = document.getElementById('slider__phone-horizontal-JS');
const PHONE_HORIZONTAL_DISPLAY = document.getElementById('slider__phone-horizontal-display-JS');


PHONE_VERTICAL.addEventListener('click', () => {
    	PHONE_VERTICAL_DISPLAY.classList.toggle('slider__phone-horizontal-display_zindex');
});

PHONE_VERTICAL_DISPLAY.addEventListener('click', () => {
	PHONE_VERTICAL_DISPLAY.classList.toggle('slider__phone-horizontal-display_zindex');
});

PHONE_HORIZONTAL.addEventListener('click', () => {
	PHONE_HORIZONTAL_DISPLAY.classList.toggle('slider__phone-horizontal-display_zindex');
});

PHONE_HORIZONTAL_DISPLAY.addEventListener('click', () => {
  PHONE_HORIZONTAL_DISPLAY.classList.toggle('slider__phone-horizontal-display_zindex');
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



// портфолио
const PORTFOLIO_BUTTON_ALL = document.getElementById('portfolio-button-all-JS'); // айдиш аник кнопки ALL
const PORTFOLIO_BUTTON_WEB = document.getElementById('portfolio-button-web-design-JS');
const PORTFOLIO_BUTTON_GRAPHIC = document.getElementById('portfolio-button-graphic-design-JS');
const PORTFOLIO_BUTTON_ARTWORK = document.getElementById('portfolio-button-artwork-JS');
const PORTFOLIO_SWITCH = document.getElementById('portfolio-illustration-switch-JS');




// portfolio-illustration__web
// portfolio-illustration__graphic
// portfolio-illustration__artwork
// portfolio-illustration-switch__item_active
// portfolio-illustration-switch-JS
// replacedNode = parentNode.replaceChild(newChild, oldChild);


const PORTFOLIO_ILLUSTRATION = document.getElementById('portfolio-illustration-JS'); // айдишник контейнера моих ли
let PORTFOLIO_ILLUSTRATION_LI = PORTFOLIO_ILLUSTRATION.querySelectorAll('li');
const ELEMENTS_SAVE = [...PORTFOLIO_ILLUSTRATION.querySelectorAll('li')];
let liElements_time = [...PORTFOLIO_ILLUSTRATION.querySelectorAll('li')];
let flag = 'All';
	


function mix(saved_tags) {
	const last = liElements_time.pop(); // последний элемент убрать и запомнить
	liElements_time.unshift(last);
	while(saved_tags.firstChild) {
			saved_tags.firstChild.remove();
	}
	saved_tags.append(...liElements_time); // добавить наш массив
}



PORTFOLIO_BUTTON_ALL.addEventListener('click', (event) => {

	PORTFOLIO_SWITCH.querySelectorAll('.portfolio-illustration-switch__item').forEach(element => element.classList.remove('portfolio-illustration-switch__item_active'));

	if(~event.target.className.indexOf('portfolio-illustration-switch__item', 0)) // если таргет был именно на ссылку (~ = -1)
			event.target.classList.add('portfolio-illustration-switch__item_active');  // добавить класс



	if(flag != 'All') { // если была нажата другая кнопка то выполняем вот это
		liElements_time.length = 0;		// убираем всё из массива который запишет своё содержимое в узел
		liElements_time = [...ELEMENTS_SAVE]; // кладём в этот массив исходное состояние узла
		flag = 'All'; // ставим флаг в позицию текущей кнопки, что б при следующем заходе не откатывало обратно
    return  (f => {  // немедленно выполняем эту функцию - возвращаем узел в исходное состояние и завершаем функцию кнопки
			while(PORTFOLIO_ILLUSTRATION.firstChild) { // удалить всё из узла
				PORTFOLIO_ILLUSTRATION.firstChild.remove();
			}
				PORTFOLIO_ILLUSTRATION.append(...ELEMENTS_SAVE); // вернуть ему исходное состояние
		})();
	}
	mix(PORTFOLIO_ILLUSTRATION); // функция mix передвигает мои элементы на позицию вперёд
});





PORTFOLIO_BUTTON_WEB.addEventListener('click', (event) => {

	PORTFOLIO_SWITCH.querySelectorAll('.portfolio-illustration-switch__item').forEach(element => element.classList.remove('portfolio-illustration-switch__item_active'));

	if(~event.target.className.indexOf('portfolio-illustration-switch__item', 0)) // если таргет был именно на ссылку (~ = -1)
			event.target.classList.add('portfolio-illustration-switch__item_active');  // добавить класс




	if(flag != 'WEB') { // если была нажата другая кнопка то выполняем вот это
		liElements_time.length = 0;		// убираем всё из массива который запишет своё содержимое в узел
		flag = 'WEB'; // ставим флаг в позицию текущей кнопки, что б при следующем заходе не откатывало обратно
    return  (f => {  // немедленно выполняем эту функцию - возвращаем узел в исходное состояние и завершаем функцию кнопки
			while(PORTFOLIO_ILLUSTRATION.firstChild) {
				PORTFOLIO_ILLUSTRATION.firstChild.remove();
			}

			[...ELEMENTS_SAVE].forEach(element => { // взять исходное состояние детей родителя и добавить их в узел отфильтровав нужные
				if(~element.className.indexOf('portfolio-illustration__web', 0)){ // если класс элементо именно тот
					PORTFOLIO_ILLUSTRATION.append(element); // добавить в узел
					liElements_time.push(element); // добавить в временный массив
				}
			});

		})();
	}
	mix(PORTFOLIO_ILLUSTRATION); // функция mix передвигает мои элементы на позицию вперёд
}); 






PORTFOLIO_BUTTON_GRAPHIC.addEventListener('click', (event) => {

	PORTFOLIO_SWITCH.querySelectorAll('.portfolio-illustration-switch__item').forEach(element => element.classList.remove('portfolio-illustration-switch__item_active'));

	if(~event.target.className.indexOf('portfolio-illustration-switch__item', 0)) // если таргет был именно на ссылку (~ = -1)
			event.target.classList.add('portfolio-illustration-switch__item_active');  // добавить класс



	if(flag != 'GRAPHIC') { // если была нажата другая кнопка то выполняем вот это
		liElements_time.length = 0;		// убираем всё из массива который запишет своё содержимое в узел
		flag = 'GRAPHIC'; // ставим флаг в позицию текущей кнопки, что б при следующем заходе не откатывало обратно
    return  (f => {  // немедленно выполняем эту функцию - возвращаем узел в исходное состояние и завершаем функцию кнопки
			while(PORTFOLIO_ILLUSTRATION.firstChild) {
				PORTFOLIO_ILLUSTRATION.firstChild.remove();
			}

				[...ELEMENTS_SAVE].forEach(element => { // взять исходное состояние детей родителя и добавить их в узел отфильтровав нужные
					if(~element.className.indexOf('portfolio-illustration__graphic', 0)){ // если класс элементо именно тот
						PORTFOLIO_ILLUSTRATION.append(element); // добавить в узел
						liElements_time.push(element);// добавить в временный массив
					}
				});

		})();
	}
	mix(PORTFOLIO_ILLUSTRATION); // функция mix передвигает мои элементы на позицию вперёд
	});


PORTFOLIO_BUTTON_ARTWORK.addEventListener('click', (event) => {

	PORTFOLIO_SWITCH.querySelectorAll('.portfolio-illustration-switch__item').forEach(element => element.classList.remove('portfolio-illustration-switch__item_active'));

	if(~event.target.className.indexOf('portfolio-illustration-switch__item', 0)) // если таргет был именно на ссылку (~ = -1)
			event.target.classList.add('portfolio-illustration-switch__item_active');  // добавить класс
	
	
	



	if(flag != 'ARTWORK') { // если была нажата другая кнопка то выполняем вот это
		liElements_time.length = 0;		// убираем всё из массива который запишет своё содержимое в узел
		flag = 'ARTWORK'; // ставим флаг в позицию текущей кнопки, что б при следующем заходе не откатывало обратно
    return  (f => {  // немедленно выполняем эту функцию - возвращаем узел в исходное состояние и завершаем функцию кнопки
			while(PORTFOLIO_ILLUSTRATION.firstChild) { 
				PORTFOLIO_ILLUSTRATION.firstChild.remove();
			}

			[...ELEMENTS_SAVE].forEach(element => {  // взять исходное состояние детей родителя и добавить их в узел отфильтровав нужные
			  if(~element.className.indexOf('portfolio-illustration__artwork', 0)){ // если класс элементо именно тот
				  PORTFOLIO_ILLUSTRATION.append(element); // добавить в узел
				  liElements_time.push(element); // добавить в временный массив
			  }
			});

		})();
	}
	mix(PORTFOLIO_ILLUSTRATION); // функция mix передвигает мои элементы на позицию вперёд
});	





PORTFOLIO_ILLUSTRATION.addEventListener('click', (event) => {		
  PORTFOLIO_ILLUSTRATION.querySelectorAll('#portfolio-illustration-JS  .portfolio-illustration__item').forEach(element => element.classList.remove('portfolio-illustration__item-active')); // пробежаться по списку и поудалять
  if(~event.target.className.indexOf('portfolio-illustration__item', 0)) // если таргет был именно на картинку (~ = -1)
   event.target.classList.add('portfolio-illustration__item-active');  // добавить класс
});


const BODY = document.body;

BODY.addEventListener('click', (event) => {		
  
  if(!(~event.target.className.indexOf('portfolio-illustration__item', 0))) // если таргет был не на картинку(~ = -1)
	PORTFOLIO_ILLUSTRATION.querySelectorAll('#portfolio-illustration-JS  .portfolio-illustration__item').forEach(element => element.classList.remove('portfolio-illustration__item-active')); // пробежаться по списку и поудалять у всех рамку
});