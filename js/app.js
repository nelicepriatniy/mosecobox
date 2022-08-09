$(document).ready(function () {
    
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        dots: true,
        initialSlide: .5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                arrows: false,
                initialSlide: .5,
              }
            },
            {
                breakpoint: 834,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows: false,
                  initialSlide: 0,
                }
              },
            
          ]
      });

      $('.img__slider').slick({
        infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
    })

})
jQuery('.slick-slide').bind('touchstart', function(){ console.log('touchstart') });

if (window.innerWidth < 1024) {
    console.log(12);
    $('.cont__row').slick({
        responsive: [
            
            
            
            {
                
                breakpoint: 1024,
                settings: {
                    
                    arrows: false,
                    infinite: true,
                    slidesToScroll: 1,
                }
            }
        ]
    
    })
    $('.prise__slider').slick({
        responsive: [
            
            
            
            {
                
                breakpoint: 1024,
                settings: {
                    
                    arrows: false,
                    infinite: true,
                    slidesToScroll: 1,
                }
            }
        ]
    
    })
}




$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone").mask("+7(999) 999-99 99");
    $("#phone1").mask("+7(999) 999-99 99");
    $("#phone2").mask("+7(999) 999-99 99");
    $("#phone3").mask("+7(999) 999-99 99");
});
let mapImg = document.querySelectorAll('.mapImage');

let q = document.querySelector('.uslugi');

q.addEventListener('click', function(){

    document.querySelector('.menumotmob').classList.toggle('active')
})

let q1 = document.querySelector('.uslugi1');
let menum = document.querySelectorAll('.menumotmob1');
let menuclosebtn = document.querySelector('.menu-closebtn');
let contMenu = document.querySelector('.kontainersmenu');
let contActiv = document.querySelector('.container-activator');

let aboutMenu = document.querySelector('.about');
let aboutActiv = document.querySelector('.about__activator');

q1.addEventListener('mouseover', function(){
    document.querySelector('.menumotmob1').classList.add('active')
})
q1.addEventListener('mouseout', function(){
    document.querySelector('.menumotmob1').classList.remove('active')
})


contActiv.addEventListener('mouseover', function(){
    contMenu.classList.add('active')
})
contActiv.addEventListener('mouseout', function(){
    contMenu.classList.remove('active')
})


aboutActiv.addEventListener('mouseover', function(){
    aboutMenu.classList.add('active')
})
aboutActiv.addEventListener('mouseout', function(){
    aboutMenu.classList.remove('active')
})

//footer

let q1f = document.querySelector('.footer__uslugi');
let menumf = document.querySelectorAll('.footer__motmob');
let contMenuf = document.querySelector('.kontainerf');
let contActivf = document.querySelector('.container__activf');

let aboutMenuf = document.querySelector('.about__footer');
let aboutActivf = document.querySelector('.about__activatorf');

q1f.addEventListener('mouseover', function(){
    document.querySelector('.footer__motmob').classList.add('active')
})
q1f.addEventListener('mouseout', function(){
    document.querySelector('.footer__motmob').classList.remove('active')
})


contActivf.addEventListener('mouseover', function(){
    contMenuf.classList.add('active')
})
contActivf.addEventListener('mouseout', function(){
    contMenuf.classList.remove('active')
})


aboutActivf.addEventListener('mouseover', function(){
    aboutMenuf.classList.add('active')
})
aboutActivf.addEventListener('mouseout', function(){
    aboutMenuf.classList.remove('active')
})

//


//

// отзывы






document.querySelector('.mob-menu-burger').addEventListener('click', function(){
    document.querySelector('.mob-menu-burger').classList.toggle('active');
    document.querySelector('.mob-menu').classList.toggle('active');
})
document.addEventListener('click', function(){
    if (document.querySelector('.mob-menu').classList.contains('active')) {
        document.querySelector('main').style.height = '0px';
    } else if (!document.querySelector('.mob-menu').classList.contains('active')) {
        document.querySelector('main').style.height = 'auto';
    }
})


mapImg.forEach(element => {
    let el = element;
    el.addEventListener('click', function() {

        mapImg.forEach(element => {
            let el = element;
            
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            }
        });
        
            el.classList.add('active');

    })
});

let calcBtn = document.querySelectorAll('.calc__btn');

calcBtn.forEach(element => {
    let el = element;
    el.addEventListener('click', function() {

        calcBtn.forEach(element => {
            let el = element;
            
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            }
        });
        
            el.classList.add('active');

    })
});

let servise = document.querySelectorAll('.services__item');

servise.forEach(element => {
    let el = element;

    el.addEventListener('mouseover', function(){
        el.classList.add('active')
    })

    el.addEventListener('mouseout', function(){
        el.classList.remove('active')
    })
});

let questions = document.querySelectorAll('.question__arrow');

questions.forEach(element => {
    let el = element;

    let blockId = el.getAttribute('data-el');
    let block = document.getElementById(blockId);
    let questBlockId = el.getAttribute('data-q');
    let qestBlock = document.getElementById(questBlockId);

    el.addEventListener('click', function(){
        block.classList.toggle('active');
        qestBlock.classList.toggle('active');
    })
});

let list = document.querySelectorAll('.list__item')
list
list.forEach(element => {
    let el = element;
    el.addEventListener('click', function() {

        list.forEach(element => {
            let el = element;
            
            if (el.classList.contains('active__item')) {
                el.classList.remove('active__item');
            }
        });
        
            el.classList.add('active__item');

    })
});

const color = document.querySelectorAll('.colored');
const color1 = document.querySelectorAll('.colored1');
const color2 = document.querySelectorAll('.colored2');
const color3 = document.querySelectorAll('.colored3');
const color4 = document.querySelectorAll('.colored4');


color.forEach(element => {
    let el = element;

    el.addEventListener('mouseover', function() {
        color.forEach(element => {
            let el = element;
            el.classList.add('color-active')
        });
    })
    el.addEventListener('mouseout', function() {
        color.forEach(element => {
            let el = element;
            el.classList.remove('color-active')
        });
    })
});

color1.forEach(element => {
    let el = element;

    el.addEventListener('mouseover', function() {
        color1.forEach(element => {
            let el = element;
            el.classList.add('color-active')
        });
    })
    el.addEventListener('mouseout', function() {
        color1.forEach(element => {
            let el = element;
            el.classList.remove('color-active')
        });
    })
});
color2.forEach(element => {
    let el = element;

    el.addEventListener('mouseover', function() {
        color2.forEach(element => {
            let el = element;
            el.classList.add('color-active')
        });
    })
    el.addEventListener('mouseout', function() {
        color2.forEach(element => {
            let el = element;
            el.classList.remove('color-active')
        });
    })
});
color3.forEach(element => {
    let el = element;

    el.addEventListener('mouseover', function() {
        color3.forEach(element => {
            let el = element;
            el.classList.add('color-active')
        });
    })
    el.addEventListener('mouseout', function() {
        color3.forEach(element => {
            let el = element;
            el.classList.remove('color-active')
        });
    })
});
color4.forEach(element => {
    let el = element;

    el.addEventListener('mouseover', function() {
        color4.forEach(element => {
            let el = element;
            el.classList.add('color-active')
        });
    })
    el.addEventListener('mouseout', function() {
        color4.forEach(element => {
            let el = element;
            el.classList.remove('color-active')
        });
    })
});

//попап окно 

let grinBtn = document.querySelectorAll('.popap');
let popapclose = document.querySelector('.popap__close');
let popapCloseBtn = document.querySelector('.close__popap');
let popapCloseBtnlocation = document.querySelector('.local__close');
grinBtn.forEach(element => {
    let el = element;
    el.addEventListener('click', function(){
        document.querySelector('.popap__block').classList.add('active');
        popapclose.classList.add('active');
    })
});
popapCloseBtn.addEventListener('click', function(){
    document.querySelector('.popap__block').classList.remove('active');
        popapclose.classList.remove('active');
})

//попап с хуйнями

popapCloseBtnlocation.addEventListener('click', function(){
    document.querySelector('.location__popap-wraper').classList.remove('active');
    popapclose.classList.remove('active');
})

// контейнеры в мобилке 

let contActivator = document.querySelector('.mob-cont');
contActivator.addEventListener('click', function(){
    document.querySelector('.mob-containers').classList.toggle('active')
})


// другой попап 

let locPopap = document.querySelectorAll('.location__activator');
locPopap.forEach(element => {
    element.addEventListener('click', function(){
        document.querySelector('.location__popap-wraper').classList.add('active');
        popapclose.classList.add('active');
    })
})

// закрытие попапов
popapclose.addEventListener('click', function(){
    document.querySelector('.popap__block').classList.remove('active');
        popapclose.classList.remove('active');
        document.querySelector('.location__popap-wraper').classList.remove('active')
})
popapCloseBtn.addEventListener('click', function(){
    document.querySelector('.popap__block').classList.remove('active');
        popapclose.classList.remove('active');
        document.querySelector('.location__popap-wraper').classList.remove('active')
})


//большой калькулятор 

let typep = document.querySelector('.popap__close').getAttribute('data-m');

console.log(typep);

if (typep == 3) {
    let po = document.querySelector('.po');
    let priseCont8 = Number(po.getAttribute('data-kont8'));
    let priseCont20 = Number(po.getAttribute('data-kont20'));
    let priseCont27 = Number(po.getAttribute('data-kont27'));

    let bigbtn = document.querySelectorAll('.big-konts');
bigbtn.forEach(element => {
    let el = element;
    el.addEventListener('click', function (){
        bigbtn.forEach(element => {
            let el = element;
            el.classList.remove('active');
        })
        el.classList.add('active');
        
    })
})
let kontainer = 0;
let prise = document.querySelector('.big-prisep');
let prise1 = document.querySelector('.big-prisep1');
let bigcon = document.querySelector('.big-container');
document.addEventListener('mouseover', function(){
    let bigConts = document.querySelectorAll('.big-konts');
    bigConts.forEach(element => {
        if (element.classList.contains('active')) {
            kontainer = element.getAttribute('data-k');
        }
    });
    let select = document.getElementById("musor"); //какой контейнер выбран

    let value = select.value; //какой вид мусора
    let bigPrise = document.querySelector('.big-prisep1');
    let bigPrise1 = document.querySelector('.big-prisep');
    let big8 = document.querySelector('.big8');
    let big20 = document.querySelector('.big20');
    let big27 = document.querySelector('.big27');

    if (value == 1) {
        big8.classList.remove('reomve')
        big20.classList.remove('remove')
        big27.classList.add('remove');
        if (kontainer == 1) {
            bigPrise.innerHTML = priseCont8 + " руб";
            bigPrise1.innerHTML = priseCont8 + " руб";
        } else if (kontainer == 2) {
            bigPrise.innerHTML = priseCont20 + " руб";
            bigPrise1.innerHTML = priseCont20 + " руб";

        } else if (kontainer == 3) {
            
        }
    } else if (value == 2) {
        big8.classList.remove('reomve')
        big20.classList.remove('remove')
        big27.classList.add('remove');
        if (kontainer == 1) {
            bigPrise.innerHTML = priseCont8 + " руб";
            bigPrise1.innerHTML = priseCont8 + " руб";

        } else if (kontainer == 2) {
            bigPrise.innerHTML = priseCont20 + " руб";
            bigPrise1.innerHTML = priseCont20 + " руб";
        } else if (kontainer == 3) {
            
        }
    } else if (value == 3) {
        big8.classList.remove('reomve')
        big20.classList.remove('remove')
        big27.classList.remove('remove');
        if (kontainer == 1) {
            bigPrise.innerHTML = priseCont8 + " руб";
            bigPrise1.innerHTML = priseCont8 + " руб";
        } else if (kontainer == 2) {
            bigPrise.innerHTML = priseCont20 + " руб";
            bigPrise1.innerHTML = priseCont20 + " руб";
        } else if (kontainer == 3) {
            bigPrise.innerHTML = priseCont27 + " руб";
            bigPrise1.innerHTML = priseCont27 + " руб";
        }
    } else if (value == 4) {
        big8.classList.remove('reomve')
        big20.classList.remove('remove')
        big27.classList.remove('remove');
        if (kontainer == 1) {
            bigPrise.innerHTML = priseCont8 + " руб";
            bigPrise1.innerHTML = priseCont8 + " руб";
        } else if (kontainer == 2) {
            bigPrise.innerHTML = priseCont20 + " руб";
            bigPrise1.innerHTML = priseCont20 + " руб";
        } else if (kontainer == 3) {
            bigPrise.innerHTML = priseCont27 + " руб";
            bigPrise1.innerHTML = priseCont27 + " руб";
        }
    } else if (value == 5) {
        big8.classList.remove('reomve')
        big20.classList.remove('remove')
        big27.classList.remove('remove');
        if (kontainer == 1) {
            bigPrise.innerHTML = priseCont8 + " руб";
            bigPrise1.innerHTML = priseCont8 + " руб";
        } else if (kontainer == 2) { 
            bigPrise.innerHTML = priseCont20 + " руб";
            bigPrise1.innerHTML = priseCont20 + " руб";
        } else if (kontainer == 3) {
            bigPrise.innerHTML = priseCont27 + " руб";
            bigPrise1.innerHTML = priseCont27 + " руб";
        }
    } else if (value == 6) {
        big8.classList.remove('reomve')
        big20.classList.remove('remove')
        big27.classList.add('remove');
        if (kontainer == 1) {
            bigPrise.innerHTML = priseCont8 + " руб";
            bigPrise1.innerHTML = priseCont8 + " руб";
        } else if (kontainer == 2) {
            bigPrise.innerHTML = priseCont20 + " руб";
            bigPrise1.innerHTML = priseCont20 + " руб";
        } else if (kontainer == 3) {
            bigPrise.innerHTML = 0 + " руб";
            bigPrise1.innerHTML = 0 + " руб";
        }
    }
    

})
}

if (document.querySelector('.popap__close').classList.contains('gl-page1')) {
    function offsetPosition(element) {
        var offsetTop = 0;
        do {
            offsetTop  += element.offsetTop;
        } while (element = element.offsetParent);
        return offsetTop;
    }
    
    
    let quest1 = document.querySelector('.reviews');
    let questh1 = offsetPosition(quest1);
    
    let rev1 = document.querySelector('.rev');
    rev1.addEventListener('click', function(){
        window.scrollBy(0, questh1);
        console.log(questh1);
    })
    let quest = document.querySelector('.reviews');
let questh = offsetPosition(quest);

let rev = document.querySelector('.rev');
rev.addEventListener('click', function(){
    window.scrollBy(0, questh);
    console.log(questh);
})
}



//калькулятор

if (typep == 1 && document.querySelector('.popap__close').classList.contains('gl-page')) {

    
    let po = document.querySelector('.po');
    let priseCont8 = Number(po.getAttribute('data-kont8'));
    let priseCont20 = Number(po.getAttribute('data-kont20'));
    let priseCont27 = Number(po.getAttribute('data-kont27'));
    const calcPlace = document.querySelector('.mos-no');
    let select = document.querySelector('select');
    let btn = document.querySelector('.equal-btn');
    const calcPrise = document.querySelector('.price__price');
    let checbox = document.querySelector('#checkbox_check');
    let checboxp = 0;
    let pogruz = 0;
    checbox.addEventListener('click', function(){
        this.classList.toggle('true');
    })
    if (checbox.classList.contains('true')) {
        checboxp = 2;
        
    } else {
        checboxp = 1;
    }
    let checbox1 = document.querySelector('#checkbox_check1');
    let checboxp1 = 0;
    let pogruz1 = 0;
    checbox1.addEventListener('click', function(){
        this.classList.toggle('true');
    })
    




    if (window.innerWidth > 1024) {
        document.addEventListener('click', function(){
            if (checbox.classList.contains('true')) {
                checboxp = 1;
                
            } else {
                checboxp = 2;
            }
            console.log(checboxp);
            if (checboxp == 1) {
                pogruz = 3000;
            } else if (checboxp == 2) {
                pogruz = 0;
            }

            let calkItemActive = document.querySelector('.active__item').getAttribute('data-val'); //значение вида доставки
            
            var indexSelected = select.selectedIndex,
                option = select.querySelectorAll('option')[indexSelected];
            let selectV = option.getAttribute('value'); //значение вида мусора
            let umn = document.querySelector('.calk-umn');
            let umnV = umn.value ;
            let numN = Number(umnV) + 1;
            if (selectV == 1) {
    
                document.querySelector('.gaz').classList.add('item_none');
                document.querySelector('.cont27').classList.add('item_none');
                
                if (calkItemActive == 1) {
    
                    
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    
                    
                }
    
            }
    
            else if (selectV == 2) {
    
                document.querySelector('.gaz').classList.add('item_none');
                document.querySelector('.cont27').classList.add('item_none');
                
                if (calkItemActive == 1) {
    
                    document.querySelector('.gaz').classList.add('item_none');
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz  + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    document.querySelector('.cont27').classList.add('item_none');
                    
                }
    
            }
    
            else if (selectV == 3) {
                document.querySelector('.gaz').classList.remove('item_none');
                document.querySelector('.cont27').classList.remove('item_none');
                
                if (calkItemActive == 1) {
    
                    calcPrise.innerText = (5000 * numN) + pogruz  + "₽";
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz  + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    calcPrise.innerText = (priseCont27 * numN) + pogruz  + "₽";
                    
                }
    
            }
    
            else if (selectV == 4) {
                document.querySelector('.gaz').classList.remove('item_none');
                document.querySelector('.cont27').classList.remove('item_none');
                
                if (calkItemActive == 1) {
    
                    calcPrise.innerText = (5500 * numN) + pogruz  + "₽";
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz  + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    calcPrise.innerText = (priseCont27 * numN) + pogruz  + "₽";
                    
                }
    
            }
    
            else if (selectV == 5) {
                document.querySelector('.gaz').classList.remove('item_none');
                document.querySelector('.cont27').classList.remove('item_none');
                
                if (calkItemActive == 1) {
    
                    calcPrise.innerText = (5000 * numN) + pogruz  + "₽";
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz  + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    calcPrise.innerText = (priseCont27 * numN) + pogruz  + "₽";
                    
                }
    
            }
    
            else if (selectV == 6) {
    
                document.querySelector('.gaz').classList.add('item_none');
                document.querySelector('.cont27').classList.add('item_none');
                
                if (calkItemActive == 1) {
    
     
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz  + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    
                    
                }
    
            }
    
            else {
                calcPrise.innerText = 'error';
            }
            
        })
        let sel = document.querySelector('.selector');
        let gaz = document.querySelector('.gaz');
        console.log(sel);
        sel.addEventListener('change', function(){
            var indexSelected = select.selectedIndex,
            option = select.querySelectorAll('option')[indexSelected];
        let selectV = option.getAttribute('value'); //значение вида мусора
            
            if (selectV == 1) {
                gaz.classList.add('item_none');
                document.querySelector('.cont27').classList.add('item_none');
                
            } else if (selectV == 2) {
                document.querySelector('.gaz').classList.add('item_none');
                document.querySelector('.cont27').classList.add('item_none');
                
            }else if (selectV == 3) {
                document.querySelector('.gaz').classList.remove('item_none');
                document.querySelector('.cont27').classList.remove('item_none');
                
            }else if (selectV == 4) {
                document.querySelector('.gaz').classList.remove('item_none');
                document.querySelector('.cont27').classList.remove('item_none');
                
            }else if (selectV == 5) {
                document.querySelector('.gaz').classList.remove('item_none');
                document.querySelector('.cont27').classList.remove('item_none');
                
            }else if (selectV == 6) {
                document.querySelector('.gaz').classList.add('item_none');
                document.querySelector('.cont27').classList.add('item_none');
                
            }
            
        })
        
    } else if (window.innerWidth < 1024) {
        
        

        document.addEventListener('click', function(){
            let calkItemActive = document.querySelector('.active__item').getAttribute('data-val'); //значение вида доставки
            let select = document.querySelector('select');
            var indexSelected = select.selectedIndex,
                option = select.querySelectorAll('option')[indexSelected];
            let selectV = option.getAttribute('value'); //значение вида мусора
            let umn = document.querySelector('.input-num');
            let umnV = umn.value;
            let numN = Number(umnV);

            let btnNext = document.querySelector('.counter__btn--plus')
            let btnPrev = document.querySelector('.counter__btn--minus')
            if (checbox1.classList.contains('true')) {
                checboxp1 = 1;
                
            } else {
                checboxp1 = 2;
            }
            console.log(checboxp1);
            if (checboxp1 == 1) {
                pogruz1 = 3000;
            } else if (checboxp1 == 2) {
                pogruz1 = 0;
            }

            btnNext.addEventListener('click', function(){
                numN = numN +1;
                umn.setAttribute("value", numN );
                return numN;

                
            })

            btnPrev.addEventListener('click', function(){
                numN = numN -1;
                umn.setAttribute("value", numN );
                return numN;
            })
    
            if (selectV == 1) {

                
                
                if (calkItemActive == 1) {
    
                    
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz1 + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    
                    
                }
    
            }
    
            else if (selectV == 2) {
    
                
                
                if (calkItemActive == 1) {
    
                    document.querySelector('.gaz').classList.add('item_none');
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    document.querySelector('.cont27').classList.add('item_none');
                    
                }
    
            }
    
            else if (selectV == 3) {
                
                
                if (calkItemActive == 1) {
    
                    calcPrise.innerText = (5000 * numN) + pogruz1  + "₽";
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    calcPrise.innerText = (priseCont27 * numN) + pogruz1  + "₽";
                    
                }
    
            }
    
            else if (selectV == 4) {
                
                
                if (calkItemActive == 1) {
    
                    calcPrise.innerText = (5500 * numN) + pogruz1  + "₽";
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    calcPrise.innerText = (priseCont27 * numN) + pogruz1  + "₽";
                    
                }
    
            }
    
            else if (selectV == 5) {
                
                
                if (calkItemActive == 1) {
    
                    calcPrise.innerText = (5000 * numN) + pogruz1  + "₽";
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    calcPrise.innerText = (priseCont27 * numN) + pogruz1  + "₽";
                    
                }
    
            }
    
            else if (selectV == 6) {
    
                
                
                if (calkItemActive == 1) {
    
     
                    
                }
    
                if (calkItemActive == 2) {
    
                    calcPrise.innerText = (priseCont8 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 3) {
    
                    calcPrise.innerText = (priseCont20 * numN) + pogruz1  + "₽";
                    
                }
                if (calkItemActive == 4) {
    
                    
                    
                }
    
            }
    
            else {
                calcPrise.innerText = 'error';
            }

            let buttonF = document.querySelector('.btnF')
            buttonF.innerText = 'заказать';
            
            
        })
        let sel = document.querySelector('.selector');
        let gaz = document.querySelector('.gaz');
        console.log(sel);
        sel.addEventListener('change', function(){
            var indexSelected = select.selectedIndex,
            option = select.querySelectorAll('option')[indexSelected];
        let selectV = option.getAttribute('value'); //значение вида мусора
            
            if (selectV == 1) {
                gaz.classList.add('item_none');
                document.querySelector('.cont27').classList.add('item_none');
                
            } else if (selectV == 2) {
                document.querySelector('.gaz').classList.add('item_none');
                document.querySelector('.cont27').classList.add('item_none');
                
            }else if (selectV == 3) {
                document.querySelector('.gaz').classList.remove('item_none');
                document.querySelector('.cont27').classList.remove('item_none');
                
            }else if (selectV == 4) {
                document.querySelector('.gaz').classList.remove('item_none');
                document.querySelector('.cont27').classList.remove('item_none');
                
            }else if (selectV == 5) {
                document.querySelector('.gaz').classList.remove('item_none');
                document.querySelector('.cont27').classList.remove('item_none');
                
            }else if (selectV == 6) {
                document.querySelector('.gaz').classList.add('item_none');
                document.querySelector('.cont27').classList.add('item_none');
                
            }
            
        })

}

let mosBtn = document.querySelector('.mos');
let nomosBtn = document.querySelector('.mos-no');
let mapItem = document.querySelectorAll('.map__item');

mosBtn.addEventListener('click', function(){
    document.querySelector('.map__svg').classList.add('active')
    document.querySelector('.map__list').classList.remove('active')
})

nomosBtn.addEventListener('click', function(){
    document.querySelector('.map__svg').classList.remove('active')
    document.querySelector('.map__list').classList.add('active')
})

mapItem.forEach(element => {
    element.addEventListener('click', function(){

        mapItem.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active')
            }
        });
        this.classList.add('active')
    })
});
let buttonF = document.querySelector('.btnF');
if (window.innerWidth < 1024) {
    buttonF.innerText = 'заказать';
} else if (window.innerHeight > 1024) {
    buttonF.innerText = 'Расчитать стоимость';
}




}

//все вопросы 

document.querySelectorAll('.next-question').forEach(element => {
    element.addEventListener('click', function(){
        document.querySelectorAll('.question').forEach(element => {
            let el = element;
            el.classList.toggle('activev');
        })
        document.querySelector('.next-question').classList.toggle('active');
    
    })
})

document.querySelectorAll('.next-se').forEach(element => {
    element.addEventListener('click', function(){
        document.querySelectorAll('.services__item').forEach(element => {
            element.classList.toggle('activev');
        })
    })
})
document.querySelectorAll('.next-se1').forEach(element => {
    element.addEventListener('click', function(){
        console.log(1);
        document.querySelectorAll('.services__item1').forEach(element => {
            element.classList.toggle('activev');
        })
    })
})

