var swiper = new Swiper(".mySwiper", {
    speed: 1500,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
        delay: 1500,
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
