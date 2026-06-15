// ======================
// GSAP
// ======================

gsap.registerPlugin(ScrollTrigger);

// ======================
// HERO
// ======================

gsap.to(".hero img", {

    scale: 1.35,

    y: 250,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});

gsap.to(".hero-title", {

    opacity: 0,

    y: -100,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "40% top",

        scrub: true

    }

});

// ======================
// SOBREPOSIÇÕES PREMIUM
// ======================

gsap.set(".card-2", {
    yPercent: 120,
    rotate: -4,
    scale: 0.92
});

gsap.set(".card-3", {
    yPercent: 120,
    rotate: 4,
    scale: 0.88
});

gsap.to(".card-2", {

    yPercent: 0,
    rotate: 0,
    scale: 1,

    scrollTrigger: {

        trigger: ".stack-section",

        start: "top top",

        end: "45% top",

        scrub: true

    }

});

gsap.to(".card-3", {

    yPercent: 0,
    rotate: 0,
    scale: 1,

    scrollTrigger: {

        trigger: ".stack-section",

        start: "45% top",

        end: "85% top",

        scrub: true

    }

});

// ======================
// FADE SEÇÕES
// ======================

gsap.utils.toArray(
    ".carousel-section, .video-section, .gallery-grid, .ending"
).forEach(section => {

    gsap.from(section, {

        opacity: 0,

        y: 100,

        duration: 1,

        scrollTrigger: {

            trigger: section,

            start: "top 85%"

        }

    });

});

// ======================
// VÍDEO
// ======================

const video = document.getElementById("mainVideo");
const muteBtn = document.getElementById("muteBtn");

if(video && muteBtn){

    muteBtn.addEventListener("click", () => {

        video.muted = !video.muted;

        muteBtn.innerHTML =
            video.muted ? "🔇" : "🔊";

    });

}

// ======================
// SWIPER PREMIUM
// ======================

new Swiper(".mySwiper", {

    effect: "coverflow",

    centeredSlides: true,

    grabCursor: true,

    loop: true,

    speed: 1000,

    slidesPerView: 1.3,

    coverflowEffect: {

        rotate: 0,

        stretch: 0,

        depth: 400,

        modifier: 1.5,

        scale: 0.8,

        slideShadows: false

    },

    breakpoints: {

        768: {

            slidesPerView: 2.2

        },

        1200: {

            slidesPerView: 3

        }

    }

});

// ======================
// GRADE FINAL
// ======================

gsap.utils.toArray(".gallery-grid img").forEach((img, i) => {

    gsap.from(img, {

        opacity: 0,

        y: 120,

        duration: 1,

        delay: i * 0.05,

        scrollTrigger: {

            trigger: img,

            start: "top 90%"

        }

    });

});