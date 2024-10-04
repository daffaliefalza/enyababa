var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// scroll reveals
ScrollReveal().reveal(".testimoni", {
  delay: 700,
  origin: "top",
  distance: "80px",
});

ScrollReveal().reveal(".about__img-profile", {
  delay: 700,
  origin: "left",
  distance: "80px",
});

ScrollReveal().reveal(".about__description", {
  delay: 500,
  origin: "right",
  distance: "80px",
});

ScrollReveal().reveal(".skills__title", {
  delay: 700,
  origin: "top",
  distance: "80px",
});

ScrollReveal().reveal(".skills-list", {
  delay: 700,
  origin: "bottom",
  distance: "80px",
});

ScrollReveal().reveal(".projects__title", {
  delay: 700,
  origin: "top",
  distance: "80px",
});

ScrollReveal().reveal(".projects .grid-container", {
  delay: 700,
  origin: "bottom",
  distance: "80px",
});
