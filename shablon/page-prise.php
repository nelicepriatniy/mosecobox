<?php 

// template Name: prise;

?>

<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cleanTheme
 */

get_header();
?>

<main>
        <div class="popap__close" data-m="1"></div>
        <div class="popap__block">
            <div class="container ">
                <div class="popap__wraper">
                    <div class="popap__top">
                        <h4>Ваш заказ</h4>
                    </div>
                    
                    <div class="popap__tel">
                        <input type="text" id="phone3" placeholder="телефон">
                        <button class="grin-btn">Оформить заявку</button>
                    </div>
                    <p class="popap__under">Нажимая кнопку, я принимаю <span> соглашение о конфиденциальности </span> и соглашаюсь с обработкой персональных данных.</p>
                </div>
                
            </div>
            
        </div>
        <div class="contacts">
            <div class="container">
                <div class="history">
                    <img src="../meida/icons/contacts/home.svg" alt="">
                    <a href="https://mosecobox.ru/">Главная</a>
                    <p>цены</p>
                </div>
            </div>
        </div>
        <div class="garb-wraper">
            <div class="container">
                <div class="garb__info">
                    <h4>ЦЕНЫ НА ВЫВОЗ МУСОРА В МОСКВЕ</h4>
                    <div class="garb-text">
                        <img src="../meida/img/logo-garb.png" alt="">
                        <div class="text-garb">
                            <p>Услуги по вывозу мусора предоставляет компания "АЛМАЗ". Комфортные условия нашей работы обеспечиваются благодаря индивидуальному подходу к каждому из клиентов. В компании присутствует большой арсенал техники и инструментов, а наши специалисты готовы справиться с любой задачей. Для качественной работы в компании имеются специально оборудованные машины таких марок: КАМАЗ, УРАЛ, МАЗ, ЗИЛ. На вывоз строительного мусора Москвы цена будет зависеть от вида работы, времени на выполнение и марки автомобиля.</p>
                        </div>
                    </div>
                    
                </div>
                <div class="down-btn">
                    <button class="grin-btn">скачать</button>
                    <p>(.xlsx 72 kB) в формате Excel.</p>
                </div>
            </div>
        </div>
        <!-- таблица с ценами -->
        <div class="garb-wraper">
            <div class="container">
                <div class="garb__info">
                    <div class="garb-text">
                        <div class="text-garb">
                            <p>Услуги по вывозу мусора предоставляет компания "АЛМАЗ". Комфортные условия нашей работы обеспечиваются благодаря индивидуальному подходу к каждому из клиентов. В компании присутствует большой арсенал техники и инструментов, а наши специалисты готовы справиться с любой задачей. Для качественной работы в компании имеются специально оборудованные машины таких марок: КАМАЗ, УРАЛ, МАЗ, ЗИЛ. На вывоз строительного мусора Москвы цена будет зависеть от вида работы, времени на выполнение и марки автомобиля.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- контейнеры -->
        </main>

    <?php
get_footer();?>