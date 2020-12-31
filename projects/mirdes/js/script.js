window.addEventListener('DOMContentLoaded', () => {
    //Модальное окно
    let priceList = document.querySelector('.price-list'),
        optionServices = document.querySelector('.option-services'),
        order = document.querySelector('button'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    //Кнопки Заказать проект
    priceList.addEventListener('click', (event) => {
        console.log('1');
        let target = event.target;
        if (target.className == 'button-active order') {
            console.log('2');
            console.log(order);
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            priceList.style.paddingRight = '17px';
            optionServices.style.paddingRight = '17px';
        } else {
            console.log('0');            
        }
    });
    //Заказать услугу
    optionServices.addEventListener('click', (event) => {
        console.log('1');
        let target = event.target;
        if (target.className == 'button-active order') {
            console.log('2');
            console.log(order);
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            priceList.style.paddingRight = '17px';
            optionServices.style.paddingRight = '17px';
        } else {
            console.log('0');            
        }
    });
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        priceList.style.paddingRight = '';
        optionServices.style.paddingRight = '';
    });
    
});