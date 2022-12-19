const swiper = new Swiper('.swiper',{

    loop: true,
    grabCursor:true,
    speed:800,
    slidesPerView: 1,
    effect:'cube',

    cubeEffect:{
        slideShadows:false,
        shadow:false,
        
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    mousewheel:{
        sensivity: 1,
        eventsTarget:".swiper"
    },
})

const swiperCards = new Swiper('.items__cards',{

    loop: true,
    grabCursor:true,
    speed:800,
    slidesPerView: 3,


    navigation: {
        nextEl: '.items__arrows__right',
        prevEl: '.items__arrows__left',
    },
    
    mousewheel:{
        sensivity: 1,
        
    },
    breakpoints: {
        // when window width is >= 320px
        300: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        700: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1060: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },
})
const burgerMenu = document.querySelector('.header__burger');
if(burgerMenu){
    const menuBody = document.querySelector('.menu__body');
    burgerMenu.addEventListener('click',function(e){
        document.body.classList.toggle('_lock')
        burgerMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    });
}
