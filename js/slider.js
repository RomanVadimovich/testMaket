const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    freeMode: true,




    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 2,
        },
        627: {
            slidesPerView: 4,
        },
    },


});