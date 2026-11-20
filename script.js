document.addEventListener("DOMContentLoaded", function () {

    const swiper = new Swiper(".slider-wrapper", {

        loop: true,

        grabCursor: true,

        centeredSlides: false,

        spaceBetween: 25,

        slidesPerView: 3,

        speed: 800,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },

            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 25,
            }
        }

    });

});