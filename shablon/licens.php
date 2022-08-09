<?php 

// template Name: licens;

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
                    <div class="popap__text">
                        <div class="text__row">
                            <p>Вывоз мусора: </p> <h4>Бой бетона, бой кирпича, скол асфальта</h4>
                        </div>
                        <div class="text__row">
                            <p>Регион: </p> <h4>ЦАО</h4>
                        </div>
                        <div class="text__row">
                            <p>Контейнер:</p> <h4> 8 м3 - 1 шт.</h4>
                        </div>
                        <div class="text__row">
                            <p>Цена: </p> <h4>5500 руб.</h4>
                        </div>
                        <p>Не требуется прогрузка</p>
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
                    <a href="../index.html">Главная</a>
                    <p>Вывоз мусора</p>
                </div>
            </div>
        </div>
        <div class="garb-wraper">
            <div class="container">
                <div class="garb__info">
                    <h4>ДОГОВОРЫ И ЛИЦЕНЗИИ</h4>
                    <div class="garb-text">
                        <img src="../meida/img/logo-garb.png" alt="">
                        <div class="text-garb">
                            <p>Оформление договора на вывоз мусора гарантирует защиту прав клиента и определяет объем и режим выполнения нами взятых на себя обязательств. Мы можем заключить типовой договор или составить новый документ для заказчика с учетом персональных условий.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="licens">
            <div class="container">
                <div class="licens__text">
                    <h4>Наши лицензии</h4>
                    <button class="grin-btn">Наша лицензия</button>
                </div>
                <p>Мы предоставлем услуги по вывозу мусора в соответствии с лицензией </p>
                
                <div class="licens__info">
                    <img src="../meida/img/licens.png" alt="">
                    <div class="info__text">
                    <p>Компания “МОСЭКОБОКС” проводит, сборку, погрузку, уборку и вывоз мусора любого объема и класса опасности. Мы работаем в Москве и Московской области с 2005 года.</p>
                    <p>Обращайтесь, если вам нужно быстро, недорогои качественно очистить территорию любой площадиот строительных, бытовых или других отходов. Мы работаем с физическими и юридическими лицами по договору.</p>
                    <p>По запросу мы предоставляем образ договора предоставления услуг.Для этого вам необоходимо связаться с нами и мы вышлем договор вам на почту.</p>
                    </div>
                </div>
                
            </div>
        </div>
        </main>

    <?php
get_footer();?>