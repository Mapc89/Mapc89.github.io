window.addEventListener('DOMContentLoaded', () => {
    //Модальное окно
    let content = document.querySelector('.content'),
        priceList = document.querySelector('.price-list'),
        optionServices = document.querySelector('.option-services'),
        order = document.querySelector('.order'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    //Кнопки Заказать услугу
    // order.addEventListener('click', function () {
    //     overlay.style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    //     header.style.right = '9px';
    //     main.style.paddingRight = '17px';
    //     content.style.paddingRight = '17px';
    // });
    priceList.addEventListener('click', (event) => {
        console.log('1');
        let target = event.target;
        if (target.className == 'button-active order') {
            console.log('2');
            for (let i = 0; i < order.length; i++) {
                if (target == order[i]) {
                    console.log('3');
                    overlay.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    // header.style.right = '9px';
                    // content.style.paddingRight = '17px';
                    break;
                }
            }
        }
    });
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        // header.style.right = '';
        // content.style.paddingRight = '';
    });
    
});