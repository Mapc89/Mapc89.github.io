window.addEventListener('DOMContentLoaded', () => {
    //Модальное окно
    let priceList = document.querySelector('.price-list'),
        optionServices = document.querySelector('.option-services'),
        order = document.querySelector('button'),
        overlay = document.querySelector('.overlay'),
        more = document.querySelector('.more'),
        close = document.querySelector('.popup-close');
    

    // Раскрыие галереи
    $(function(){
        $('.btnm').click(function(){
            $('.more').slideToggle(1000); //почему происходит двойное нажатие???
            $('.btnm').html($('.btnm').html() == 'скрыть' ? 'смотреть ещё' : 'скрыть'); // меняет надпись в кнопке
            $(".more")[0].scrollIntoView({
                behavior: "smooth", // or "auto" or "instant"
            });
            click.stopPropagation(); //Останавливает второе нажатие!!!
        });
    });
    
    $('.slider-mobile').slick({
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    });   
    $('.slider-portfolio').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
    });  
});

