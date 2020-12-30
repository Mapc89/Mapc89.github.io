window.addEventListener('DOMContentLoaded', () => {
    //Модальное окно
    let content = document.querySelector('.content'),
        priceList = document.querySelector('.price-list'),
        optionServices = document.querySelector('.option-services'),
        order = document.querySelector('button'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    //Кнопки Заказать услугу
    priceList.addEventListener('click', (event) => {
        console.log('1');
        let target = event.target;
        if (target.className == 'button-active order') {
            console.log('2');
            console.log(order);
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            // header.style.right = '9px';
            // content.style.paddingRight = '17px';
        } else {
            console.log('0');            
        }
    });
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        // header.style.right = '';
        // content.style.paddingRight = '';
    });
    
});