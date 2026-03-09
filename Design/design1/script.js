document.addEventListener("DOMContentLoaded", function () {

  if (window.innerWidth <= 768) {

    const slider = document.querySelector(".program-wrapper");
    const cards = document.querySelectorAll(".program-card");

    let current = 0;

    function slideTo(index) {
      const cardWidth = cards[0].offsetWidth + 20;
      slider.scrollTo({
        left: cardWidth * index,
        behavior: "smooth"
      });
    }

    // touch swipe
    let startX = 0;

    slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
      let endX = e.changedTouches[0].clientX;
      let diff = startX - endX;

      if (diff > 50 && current < cards.length - 1) {
        current++;
      } else if (diff < -50 && current > 0) {
        current--;
      }

      slideTo(current);
    });

  }

});



// Edge Section
window.addEventListener("load", function () {
  new Swiper(".edgeSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
});


// How We Teach at ABC
new Swiper(".teachSwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});


// Our Advisory Board
new Swiper(".luminariesSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  pagination: {
    el: ".luminariesSwiper .swiper-pagination",
    clickable: true
  },

  breakpoints: {
    0: { slidesPerView: 1 },     // mobile
    768: { slidesPerView: 2 },   // tablet
    1024: { slidesPerView: 3 }   // desktop
  }
});



// Lectures and Events at ABC
new Swiper(".eventsSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  centeredSlides: false,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }
  }
});