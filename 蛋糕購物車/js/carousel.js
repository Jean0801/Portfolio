const swiper = new Swiper("#myswiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    effect: "cube",

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});