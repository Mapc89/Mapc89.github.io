// вывод оверлея при назатии на "Заказать звонок"
$(document).ready(function(){
 $('.header-contacts_button').on("click", function(){
  $('.overlay').show();
 });

 $('.popup-close').on("click", function(){
  $('.overlay').hide();
 })

})

// "Липкое" меню
$(window).scroll(function(){
 if ($(this).scrollTop() > 50) {
  $('.header-menu').addClass('fixed-menu');
 } else {
  $('.header-menu').removeClass('fixed-menu');
 }
});





