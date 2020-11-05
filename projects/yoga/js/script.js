window.addEventListener('DOMContentLoaded', () => {
    // Табы
    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.querySelector('.info'),
        info_header = document.getElementsByClassName('info-header')[0],
        header = document.getElementsByTagName('header')[0],
        main = document.querySelector('.main'),
        content = document.querySelector('.content');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info_header.addEventListener('click', (event) => {
        let target = event.target;
        if (target.className == 'info-header-tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Таймер

    let deadline = '2020-12-31';


    function getTimeRemining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    //Запуск часов
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');


        function updateClock() {
            let t = getTimeRemining(endtime);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                hours.innerHTML = '0';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
                clearInterval(timeInterval);
            }
        }

        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    }

    setClock('timer', deadline);
    console.log(new Date());

    // Конструктор через контекст вызова this
    // Создание пользователя
    function User(name, id) {
        this.name = name;
        this.id = id;
        this.humen = true;
        this.hello = function () {
            console.log(`Привет, ${name}!`);
        };
    }
    // Добавление к конструктору нового пораметра в виде функции
    User.prototype.exit = function (name) {
        console.log(this.name + ' вышел.');
    };

    let borya = new User('Боря', 30);
    // borya.hello();
    // borya.exit();

    //Модальное окно
    let more = document.querySelector('.more'),
        tab_more = document.getElementsByClassName('description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    //С кнопки под счётчиком
    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        header.style.right = '9px';
        main.style.paddingRight = '17px';
        content.style.paddingRight = '17px';
    });
    //С кнопки на табах
    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target.className == 'description-btn') {
            for (let i = 0; i < tab_more.length; i++) {
                if (target == tab_more[i]) {
                    overlay.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    header.style.right = '9px';
                    content.style.paddingRight = '17px';
                    break;
                }
            }
        }
    });
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        header.style.right = '';
        content.style.paddingRight = '';
    });
    console.log(header);

    // Плавная прокрутка к пунктам меню на чистом JS выдёт ошибку, т.к функция ссылается на переменную вне цикла
    // const anchors = document.querySelectorAll('a[href^="#"]'); // Все ссылки а содержащие* в себе, начинающиеся^ с # 

    // for (let anchor of anchors) {
    //     anchor.addEventListener('click', function (event) {
    //         event.preventDefault(); // Отменяем стандартное действие
    //         const blockId = anchor.getAttribute('href'); // Получаем каждый элемент с присвоенным ему атрибутом
    //         document.querySelector(blockId).scrollIntoView({
    //             behavior: 'smooth', // Плавное перемещение
    //             block: 'start'

    //         });
    //     });
    // }
    // Плавная прокрутка к пунктам на JQuery
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 60
        }, 500);
    });


    // Отправка данных на сервер. Инструкция.
    // 1. Создаём объект запроса
    // let request = new XMLHttpRequest();
    // 2. Настройка запроса(метод(гет или пост), путь к серверу, true, логин, пароль). Основные - первые 2.
    // request.open("GET", 'server.php', true, login, password);
    // 3. Отправка запроса
    // request.send(); 
    // Свойства запросов
    // request.status // код ответа, типа 404
    // request.statusText // текстовое описание ответа сервера
    // request.responseText // ответ сервера для пользователя(например "всё прошло успешно")
    // request.readyState // этапы прохождения запроса на сервер

    // Отправка формы через модальное окно
    let message = {}; // Создаём объект с данными о загрузке
    message.loading = "Загрузка...";
    message.success = "Мы скоро с вами свяжемся!";
    message.failure = "Что-то пошло не так...";

    let form = document.getElementsByClassName('main-form')[0], // Берём форму из всплывающего окна
        input = form.getElementsByTagName('input'); // Внутри формы ищем инпуты
    statusMessage = document.createElement('div'); // Создаём блок для сообщения
    statusMessage.classList.add('status'); // Присваиваем ему класс css

    form.addEventListener('submit', function (event) { // Вешаем событие при нажании кнопки
        event.preventDefault(); // Отменяем перезагрузку браузера
        form.appendChild(statusMessage); // Добавляем в конец Формы наше сообщение о статусе
    });

    // Отправка заявки через нижнюю форму
    let footerForm = document.getElementById('form'),
        footerInput = footerForm.getElementsByTagName('input');
    footerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        footerForm.appendChild(statusMessage);
    });

    //AJAX
    let request = new XMLHttpRequest(); // Создаём объект запроса
    request.open("POST", 'server.php'); // Настраиваем запрос
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Указываем кодировку

    let formData = new FormData(form), //Все данные из инпутов формы подготавливаем к отправке на сервер
        footerFormData = new FormData(footerForm);

    request.send(formData); // Отправляем на сервер данные в модальном окне
    // request.send(footerFormData); // Отправляем данные нижней формы

    request.onreadystatechange = function () { // Начинаем проверку отправки, статус 4 - запрос полностью ушёл.
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading; // Меньше 4? Значит ещё грузится.
        } else if (request.readyState === 4) { // Дошёл до 4 - значит успешно
            if (request.status == 200 && request.status < 300) {
                statusMessage.innerHTML = message.success;
                //Тут можно добавлять контент на страницу
            } else {
                statusMessage.innerHTML = message.failure; // Если не прошло - ошибка.
            }

        }
    };
    for (let i = 0; i < input.length; i++) { // Очищаем поля ввода.
        input[i].value = '';
    }

    // Слайдер

    let slideIndex = 1, // слайд который показывается сейчас
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

    showSlides(slideIndex);
    console.log(dotsWrap);


    // Слайдер в сборе

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1; // Если номер слайда больше последнего, то переходим к первому
        }
        if (n < 1) {
            slideIndex = slides.length; // Если от первого идём назад - к последнему
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    //Включаем перелистывание
    function currentSlide(n) {
        showSlides(slideIndex = n); // Какой слайд сейчас активен
    }

    function plusSliders(n) {
        showSlides(slideIndex += n); // В n передаётся значение в единицах перелистываемых слайдов
    }
    prev.addEventListener('click', function () {
        plusSliders(-1);
    });
    next.addEventListener('click', function () {
        plusSliders(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    // Калькулятор
    let persons = document.getElementsByClassName('counter-block-input')[0],
        days = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        placeIndex, // Сюда запишем что выбрано из выплывающего списка
        price = 5000,
        sum = 0,
        total = document.getElementById('total');


    total.textContent = sum + "p";

    persons.addEventListener('change', function () {
        placeIndex = place.options[place.selectedIndex].value;
        sum = persons.value * days.value * price * placeIndex;
        total.textContent = sum + "p";
    });

    days.addEventListener('change', function () {
        placeIndex = place.options[place.selectedIndex].value;
        sum = persons.value * days.value * price * placeIndex;
        total.textContent = sum + "p";
    });

    place.addEventListener('change', function () {
        placeIndex = place.options[place.selectedIndex].value;
        sum = persons.value * days.value * price * placeIndex;
        total.textContent = sum + "p";
    });








});