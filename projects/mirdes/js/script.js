window.addEventListener('DOMContentLoaded', () => {
    // Раскрыие галереи
    $(function(){
        $('.btnm').click(function(){
            let id = this.id; // Берём ID кнопки
            let test = document.getElementsByClassName(id); //Находим more с классом идентичным ID этой кнопики
            $(test).slideToggle(1000); 
            $(this).html($(this).html() == 'скрыть' ? 'смотреть проект' : 'скрыть'); // меняет надпись в кнопке
            $(test)[0].scrollIntoView({
            behavior: "smooth", // or "auto" or "instant"
            });

            
            // $('.more').slideToggle(1000); 
            // $('.btnm').html($('.btnm').html() == 'скрыть' ? 'смотреть проект' : 'скрыть'); // меняет надпись в кнопке
            // $(".more")[0].scrollIntoView({
            //     behavior: "smooth", // or "auto" or "instant"
            // });
            // click.stopPropagation(); //Останавливает второе нажатие!!!(но может оно и не надо)
        });
    });











    $('.slider-mobile').slick({
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    });   
    $('.slider-portfolio').slick();  
});

