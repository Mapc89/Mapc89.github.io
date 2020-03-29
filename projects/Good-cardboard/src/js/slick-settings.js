// Слайдер продукции
$('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-nav',
 variableWidth: false
});
$('.slider-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: false,
 arrows: true,
 centerMode: true,
 focusOnSelect: true,
 responsive: [
   {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      centerMode: false,
      focusOnSelect: true,
      infinite: true
    }
   }
 ],
 prevArrow: '<div class="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="19" viewBox="0 0 6 19"><g><g><path id="l-ar" fill="#ff9d00" d="M5.829 1.66l-4.61 7.964 4.492 7.757c.213.368.213.966 0 1.334-.213.368-.56.368-.772 0l-4.631-8a1.383 1.383 0 0 1-.16-.722c-.199-.388-.19-.982.024-1.353L5.02.265c.223-.385.585-.385.808 0 .223.385.223 1.01 0 1.395z"/></g></g></svg></div>',
 nextArrow: '<div class="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="19" viewBox="0 0 6 19"><g><g><path id="r-ar" fill="#ff9d00" d="M.172.265C.395-.12.757-.12.98.265L5.83 8.64c.215.371.223.965.023 1.353.01.26-.044.524-.158.722l-4.632 8c-.213.368-.559.368-.772 0-.213-.368-.213-.966 0-1.334l4.492-7.758L.172 1.66C-.051 1.276-.051.65.172.265z"/></g></g></svg></div>'
});

// Слайдер для отзывов
$('.multiple-items').slick({
 infinite: true,
 slidesToShow: 3,
 slidesToScroll: 3,
 arrows: true,
 prevArrow: '<div class="rew-left-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="47" viewBox="0 0 10 47"><g><g><path fill="#ff9d00" d="M.067 23.052l9-22.685C9.205.019 9.51-.1 9.75.1c.239.2.321.645.183.994L1.018 23.566 9.933 45.91c.138.346.056.789-.183.988-.24.2-.545.082-.683-.264l-9-22.557a1.006 1.006 0 0 1-.056-.511 1.017 1.017 0 0 1 .056-.514z"/></g></g></svg></div>',
 nextArrow: '<div class="rew-right-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="47" viewBox="0 0 10 47"><g><g><path fill="#ff9d00" d="M.067 1.095C-.071.746.01.3.25.1.489-.1.795.019.933.367l9 22.685c.064.162.08.344.056.514.025.168.008.35-.056.51l-9 22.558c-.138.346-.444.464-.683.264-.24-.2-.321-.642-.183-.988l8.915-22.344z"/></g></g></svg></div>',
 responsive: [
  {
  breakpoint: 576,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<div class="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="19" viewBox="0 0 6 19"><g><g><path id="l-ar" fill="#ff9d00" d="M5.829 1.66l-4.61 7.964 4.492 7.757c.213.368.213.966 0 1.334-.213.368-.56.368-.772 0l-4.631-8a1.383 1.383 0 0 1-.16-.722c-.199-.388-.19-.982.024-1.353L5.02.265c.223-.385.585-.385.808 0 .223.385.223 1.01 0 1.395z"/></g></g></svg></div>',
    nextArrow: '<div class="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="19" viewBox="0 0 6 19"><g><g><path id="r-ar" fill="#ff9d00" d="M.172.265C.395-.12.757-.12.98.265L5.83 8.64c.215.371.223.965.023 1.353.01.26-.044.524-.158.722l-4.632 8c-.213.368-.559.368-.772 0-.213-.368-.213-.966 0-1.334l4.492-7.758L.172 1.66C-.051 1.276-.051.65.172.265z"/></g></g></svg></div>'
   }
  }
 ]
});