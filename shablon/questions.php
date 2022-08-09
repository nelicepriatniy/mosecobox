<?php 

// template Name: faQ;

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
                    <h4>Вопрос-Ответ</h4>
                    
                </div>
            </div>
        </div>
        <div class="questions">
            <div class="container">
                <div class="questions__text">
                    <h4>Ответы на часто задаваемые  <br><span>вопросы</span></h4>
                </div>
                <div class="question" id="q1" >
                    <div class="question__text">
                        <div class="question__namber">
                            <p>01</p>
                            
                        </div>
                        <h4>Возможно ли заказать у вас грузчиков?</h4>
                    </div>
                    <div class="question__arrow" data-el="answer1" data-q="q1">
                        <img src="meida/icons/quest/Group 81.svg" alt="">
                    </div>
                </div>
                <div class="answer" id="answer1">
                    <h4>Ответ:</h4>
                    <p>Да, мы предоставляем услуги грузчиков. В процессе заказа, необходимо предупредить диспетчера, что на объект необходимы грузчики. Цена за грузчиков не входит в стандартную цену вывоза мусора и оговаривается индивидуально.</p>
                </div>
                <div class="question" id="q2">
                    <div class="question__text">
                        <div class="question__namber">
                            <p>02</p>
                            
                        </div>
                        <h4>Можно ли оставить контейнер у себя на сутки для загрузки мусора?</h4>
                    </div>
                    <div class="question__arrow" data-el="answer2" data-q="q2">
                        <img src="meida/icons/quest/Group 81.svg" alt="">
                    </div>
                </div>
                <div class="answer" id="answer2">
                    <h4>Ответ:</h4>
                    <p>Да, мы предоставляем услуги грузчиков. В процессе заказа, необходимо предупредить диспетчера, что на объект необходимы грузчики. Цена за грузчиков не входит в стандартную цену вывоза мусора и оговаривается индивидуально.</p>
                </div>
                <div class="question" id="q3">
                    <div class="question__text">
                        <div class="question__namber">
                            <p>03</p>
                            
                        </div>
                        <h4>Почему изменяется цена на вывоз мусора?</h4>
                    </div>
                    <div class="question__arrow" data-el="answer3" data-q="q3">
                        <img src="meida/icons/quest/Group 81.svg" alt="">
                    </div>
                </div>
                <div class="answer" id="answer3">
                    <h4>Ответ:</h4>
                    <p>Да, мы предоставляем услуги грузчиков. В процессе заказа, необходимо предупредить диспетчера, что на объект необходимы грузчики. Цена за грузчиков не входит в стандартную цену вывоза мусора и оговаривается индивидуально.</p>
                </div>
                <div class="question" id="q4" >
                    <div class="question__text">
                        <div class="question__namber">
                            <p>04</p>
                            
                        </div>
                        <h4>Возможно ли заказать у вас грузчиков?</h4>
                    </div>
                    <div class="question__arrow" data-el="answer4" data-q="q4">
                        <img src="meida/icons/quest/Group 81.svg" alt="">
                    </div>
                </div>
                <div class="answer" id="answer4">
                    <h4>Ответ:</h4>
                    <p>Да, мы предоставляем услуги грузчиков. В процессе заказа, необходимо предупредить диспетчера, что на объект необходимы грузчики. Цена за грузчиков не входит в стандартную цену вывоза мусора и оговаривается индивидуально.</p>
                </div>
                <div class="next-question">
                    <p>Показать все</p>
                    <img src="meida/icons/quest/grin.svg" alt="">
                </div>

                <div class="question__btn">
                    <button class="grin-btn">Задать вопрос</button>
                </div>
            </div>
            
        </div>
        </main>

    <?php
get_footer();?>