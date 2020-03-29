
  <?php include "header.php"; ?>
  <!-- Блок с коробками -->
  <section class="main dark-bg">
    <div class="container wow fadeIn" data-wow-duration="2s">
      <div class="row align-items-center">
        <!-- Картинка с коробками -->
        <div class="col-0 col-lg-5">
          <div class="main-img mobile-hide"><img src="img/main/boxes.png" alt="Коробки"></div>
        </div>
        <!-- /.col-5 -->
        <div class="col-12 col-lg-7">
          <!-- Текст и форма заявки -->
          <div class="main-text">
            <h1 class="main-text__title">Производство упаковки из гофрокартона</h1>
            <div class="main-text__subtitle">с доставкой по всей России</div>
            <!-- Форма заявки на бесплатные образцы -->
            <div class="main-text__form">
              <div class="form-title">
                Получите индивидуальное предложение
                на производство и поставку гофропродукции
                <span class="form-title_uppercase">Образцы упаковки бесплатно!</span>
              </div>
              <form action="#" class="form">
                <input type="tel" class="form__input" placeholder="Введите номер телефона">
                <input type="submit" class="form__button button" value="Оставить заявку!">
              </form>
              <div class="form-small">*Минимальный заказ 500шт</div>
            </div>
            <!-- /.main-text__form -->
          </div>
        </div>
        <!-- /.col-7 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.main -->
  <!-- Преимущества -->
  <div class="advantage">
    <div class="advantage-wrapper__top">
      <div class="advantage-top wow fadeInUp" data-wow-delay="0.2s">
        <div class="advantage-top__title sup-fix">5 лет</div>
        <div class="advantage-top__subtitle">На рынке изделий из гофрокартона</div>
      </div>
      <div class="advantage-top wow fadeInUp" data-wow-delay="0.4s">
        <div class="advantage-top__title">до 5 000 000 м<sup>2</sup></div>
        <div class="advantage-top__subtitle">Ежемесячный объем производства гофрокартона</div>
      </div>
      <div class="advantage-top wow fadeInUp" data-wow-delay="0.6s">
        <div class="advantage-top__title">4 000 м<sup>2</sup></div>
        <div class="advantage-top__subtitle">Площадь склада</div>
      </div>
    </div>
    <div class="advantage-wrapper__item">
      <div class="advantage-item wow fadeInUp" data-wow-delay="0.2s">
        <div class="advantage-item__img"><img src="img/advantages/ico-industry.png" alt=""></div>
        <div class="advantage-item_text">
          <div class="advantage-item_text__title">Производство</div>
          <div class="advantage-item_text__subtitle">4 технологические линии спо- собны выполнить любой заказ любой
            сложности</div>
        </div>
      </div>
      <div class="advantage-item wow fadeInUp" data-wow-delay="0.4s">
        <div class="advantage-item__img"><img src="img/advantages/ico-free-samples.png" alt=""></div>
        <div class="advantage-item_text">
          <div class="advantage-item_text__title">Бесплатные образцы</div>
          <div class="advantage-item_text__subtitle">Бесплатно делаем образцы гофроупаковки - это помогает заранее
            увидеть упаковку</div>
        </div>
      </div>
      <div class="advantage-item wow fadeInUp" data-wow-delay="0.6s">
        <div class="advantage-item__img"><img src="img/advantages/ico-quality.png" alt=""></div>
        <div class="advantage-item_text">
          <div class="advantage-item_text__title">Стабильное качество</div>
          <div class="advantage-item_text__subtitle">Собственная лаборатория кон- тролирует качество на каждом
            этапе производства</div>
        </div>
      </div>
      <div class="advantage-item wow fadeInUp" data-wow-delay="0.8s">
        <div class="advantage-item__img"><img src="img/advantages/ico-insurence.png" alt=""></div>
        <div class="advantage-item_text">
          <div class="advantage-item_text__title">Страховой запас</div>
          <div class="advantage-item_text__subtitle">Можем хранить запас гофро- продукции на своих складах и
            поставлять его партиями</div>
        </div>
      </div>
      <div class="advantage-item wow fadeInUp" data-wow-delay="1s">
        <div class="advantage-item__img"><img src="img/advantages/ico-flexprint.png" alt=""></div>
        <div class="advantage-item_text">
          <div class="advantage-item_text__title">Флексопечать</div>
          <div class="advantage-item_text__subtitle">Возможно нанесение вашего логотипа, текста или мани-
            пуляционных знаков</div>
        </div>
      </div>
      <div class="advantage-item wow fadeInUp" data-wow-delay="1.2s">
        <div class="advantage-item__img"><img src="img/advantages/ico-hidrophobic.png" alt=""></div>
        <div class="advantage-item_text">
          <div class="advantage-item_text__title">Гидрофобные добавки</div>
          <div class="advantage-item_text__subtitle">На производстве реализована технология, которая позволяет
            гофрокартону стать прочнее</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Всплывающее окно -->
  <div class="overlay" id="overlay">
    <div class="popup">
      <div class="popup-title">Форма обратной связи</div>
      <!-- /.popup-title -->
      <div class="popup-close" id="close">&times;</div>
      <!-- /.popup-close -->
      <div class="popup-form">
        <div class="popup-form__title">Получите индивидуальное предложение
          <span>на производство и поставку изделий</span></div>
        <!-- <div class="popup-form__subtitle">Введите ваш номер телефона:</div> -->
        <form action="#" class="form">
          <label for="phone" class="popup-form__subtitle">
            Введите ваш номер телефона:
          </label>
          <input type="tel" class="form__input popup-form__input" name="phone" placeholder="+7 (XXX) XXX XXXX" equired>
          <input type="submit" class="form__button button" value="Оставить заявку!">
        </form>
        <div class="popup-form__small">*Минимальный заказ 500шт</div>
      </div>
      <!-- /.popup-form -->
    </div>
    <!-- /.popup -->
  </div>
  <!-- /.overlay -->
  <!-- Наша продукция -->
  <section class="products">
    <div class="section-title">наша продукция</div>
    <!-- /.products-title -->

    <div class="products-item_wrapper">
      <div class="products-item wow fadeInLeft">
        <div class="products-item__img">
          <img src="img/products/products_box.png" alt="">
        </div>
        <!-- /.products-item__img -->
        <div class="products-item__title">Гофрокороб 4-х клапанный
        </div>
        <!-- /.products-item__title -->
        <div class="products-item__buttons">
          <button class="button-o">Подробнее</button>
          <button class="button">Получить расчет</button>
        </div>
      </div>
      <!-- /.products-item -->

      <div class="products-item wow fadeInRight">
        <div class="products-item__img">
          <img src="img/products/products_emptyBox.png" alt="">
        </div>
        <!-- /.products-item__img -->
        <div class="products-item__title">Гофролоток
        </div>
        <!-- /.products-item__title -->
        <div class="products-item__buttons">
          <button class="button-o">Подробнее</button>
          <button class="button">Получить расчет</button>
        </div>
      </div>
      <!-- /.products-item -->

      <div class="products-item wow fadeInLeft">
        <div class="products-item__img">
          <img src="img/products/products_openBox.png" alt="">
        </div>
        <!-- /.products-item__img -->
        <div class="products-item__title">Гофрокороб самосборный (сложная высечка)
        </div>
        <!-- /.products-item__title -->
        <div class="products-item__buttons">
          <button class="button-o">Подробнее</button>
          <button class="button">Получить расчет</button>
        </div>
      </div>
      <!-- /.products-item -->

      <div class="products-item wow fadeInRight">
        <div class="products-item__img">
          <img src="img/products/products_cardboard.png" alt="">
        </div>
        <!-- /.products-item__img -->
        <div class="products-item__title">Листовой гофрокартон</div>
        <!-- /.products-item__title -->
        <div class="products-item__buttons">
          <button class="button-o">Подробнее</button>
          <button class="button">Получить расчет</button>
        </div>
      </div>
      <!-- /.products-item -->
    </div>
    <!-- /.products-item_wrapper -->
  </section>
  <!-- /.products -->
  <!-- Индивидуальное предложение -->
  <section class="offering dark-bg">
    <div class="container wow fadeIn" data-wow-duration="2s">
      <div class="offering__title">Получите индивидуальное предложение
        <span>на производство и поставку изделий</span></div>
      <span class="offering__subtitle">Введите ваш номер телефона:</span>
      <form action="" class="form">
        <input type="tel" class="form__input offering__input" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ">
        <input type="submit" class="form__button button offering__button" value="Оставить заявку!">
      </form>
      <div class="form-small offering-small">*Минимальный заказ 500шт</div>
    </div>
  </section>
  <!-- Производство -->
  <section class="production">
    <div class="production-slider">
      <div class="slider-for mobile-hide">
        <div class="slider-for__img"><img src="img/production/production-1.jpg" alt=""></div>
        <div class="slider-for__img"><img src="img/production/production-2.jpg" alt=""></div>
        <div class="slider-for__img"><img src="img/production/production-4.jpg" alt=""></div>
        <div class="slider-for__img"><img src="img/production/production-3.jpg" alt=""></div>
      </div>
      <div class="slider-nav">
        <div class="slider-nav__img"><img src="img/production/production-1.jpg" alt=""></div>
        <div class="slider-nav__img"><img src="img/production/production-2.jpg" alt=""></div>
        <div class="slider-nav__img"><img src="img/production/production-4.jpg" alt=""></div>
        <div class="slider-nav__img"><img src="img/production/production-3.jpg" alt=""></div>
      </div>
    </div>
    <!-- /.production-slider -->
    <div class="production-description">
      <div class="production-description__title">Производство</div>
      <!-- /.production-description__title -->
      <div class="production-description__subtitle">
        <p>Современное оборудование позволяет производить до 5 миллионов квадратных метров гофрокартона ежемесячно.
          Гофрокороба и лотки производятся по ГОСТу или чертежам заказчика.</p>
        <p>Досконально прорабатываем конструкции коробов и составы сырья, учитывая условия хранения, транспортировки и
          производства вашей продукции.</p>
        <p>Возможно нанесение цветной флексопечати на поверхность коробов.</p>
      </div>
    </div>
  </section>
  <!-- /.Производство -->
  <!-- Логотипы партнёров -->
  <section class="clients">
    <div class="section-title">Наши клиенты</div>
    <div class="clients-wrapper">
      <div class="container">
        <div class="row">
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico1.png" alt=""></div>
          </div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico2.png" alt=""></div>
          </div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico3.png" alt=""></div>
          </div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico4.png" alt=""></div>
          </div>
          <div class="w-100"></div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico5.png" alt=""></div>
          </div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico6.png" alt=""></div>
          </div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico7.png" alt=""></div>
          </div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico8.png" alt=""></div>
          </div>
          <div class="w-100"></div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico9.png" alt=""></div>
          </div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico10.png" alt=""></div>
          </div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico11.png" alt=""></div>
          </div>
          <div class="p-2 p-lg-4 col-6 col-lg-3">
            <div class="clients-img"><img src="img/clients/ico12.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /.clients -->
  <!-- Слайдер с отзывами -->
  <section class="reviews">
    <div class="section-title">Отзывы о сотрудничестве</div>
    <div class="multiple-items">
      <div class="multiple-items__img"><img src="img/other/review1.jpg" alt=""></div>
      <div class="multiple-items__img"><img src="img/other/review2.jpg" alt=""></div>
      <div class="multiple-items__img"><img src="img/other/review3.jpg" alt=""></div>
      <div class="multiple-items__img"><img src="img/other/review1.jpg" alt=""></div>
      <div class="multiple-items__img"><img src="img/other/review2.jpg" alt=""></div>
      <div class="multiple-items__img"><img src="img/other/review3.jpg" alt=""></div>
    </div>
  </section>
  <!-- Карта с контактами -->

  <?php include "footer.php"; ?>