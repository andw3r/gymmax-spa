window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.from(".about", { yPercent: -100 });

ScrollTrigger.create({
  animation: tl,
  trigger: ".header",
  start: "top top",
  pin: true,
  pinSpacing: false,
});

var sliderSelector = ".swiper-container",
  options = {
    init: false,
    speed: 1000,

    centeredSlides: true,
    mousewheel: true,
    pagination: {
      el: ".gallery__count",
      clickable: true,
      type: "fraction",
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      567: {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 45,
      },
    },
  };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();

// fullscreen images
const fullscreenImageViewer = () => {
  const galleryImage = document.querySelectorAll(".gallery__item img");
  const fullscreenImage = document.querySelector(".fullscreen-image");

  for (let i = 0; i < galleryImage.length; i++) {
    galleryImage[i].onclick = () => {
      fullscreenImage.classList.add("active");
      fullscreenImage.classList.add("overlay");
      document.querySelector(".fullscreen-image img").src =
        galleryImage[i].getAttribute("src");

      document.body.classList.add("lock");
    };
  }

  // close button
  const closeButton = document.querySelector(".close-btn");

  closeButton.addEventListener("click", () => {
    fullscreenImage.classList.remove("active");
    setTimeout(() => {
      fullscreenImage.classList.remove("overlay");
    }, 350);
    document.body.classList.remove("lock");
  });
};

fullscreenImageViewer();

// parallax effect

const animatedShape = (shape) => {
  window.addEventListener("mousemove", (e) => {
    const xPos = e.clientX / window.innerWidth - 0.5;
    const yPos = e.clientY / window.innerHeight - 0.5;

    TweenLite.to(shape, {
      duration: 1,
      x: xPos * 170,
      y: yPos * 170,
    });
  });
};

animatedShape(".shape");

const nav = document.querySelector(".nav");
const navClose = document.querySelector(".nav-close");

navClose.addEventListener("click", () => {
  nav.classList.remove("active");
  navClose.classList.remove("active");
  document.querySelector(".mobile-menu").classList.add("active");
});

document.querySelector(".mobile-menu").addEventListener("click", () => {
  nav.classList.add("active");
  navClose.classList.add("active");
  document.querySelector(".mobile-menu").classList.remove("active");
});
