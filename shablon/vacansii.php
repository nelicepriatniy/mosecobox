<?php 

// template Name: vakansii;

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
                    <h4>ВАКАНСИИ</h4>
                    <div class="garb-text">
                        
                        <div class="text-garb">
                            <h5>В компанию "АЛМАЗ" ТРЕБУЮТСЯ НА РАБОТУ:

                            </h5>
                            <ul>
                                <li>водитель грузового автомобиля (мусоровоз);</li>
                                <li>автослесарь;</li>
                                <li>менеджер по продажам услуг;</li>
                                <li>электросварщик;</li>
                                <li>подсобный рабочий.</li>
                            </ul>
                            <h5>Обращаться по тел. : <span>+7 (499) 390-27-33</span> ;</h5>
                            <h5>e-mail: <a href="">uvozim-musor@mail.ru</a></h5>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        </main>

    <?php
get_footer();?>