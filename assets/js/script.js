import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

new Swiper('.swiper', {
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    effect: "fade",

    autoplay: {
        delay: 5000
    }
});