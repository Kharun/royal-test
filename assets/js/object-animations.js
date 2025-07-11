gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".object_subtitle", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object",
      start: "top 75%",
    },
  });

  gsap.from(".object_title", {
    y: 70,
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object",
      start: "top 75%",
    },
  });

  gsap.from(".object_img", {
    y: 60,
    opacity: 0,
    scale: 1.05,
    filter: "blur(8px)",
    duration: 1.4,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object",
      start: "top 75%",
    },
  });

  gsap.from(".object_bg", {
    y: 60,
    opacity: 0,
    scale: 1.05,
    filter: "blur(8px)",
    duration: 1.4,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object",
      start: "top 75%",
    },
  });

  const objectBg = document.querySelector(".object_bg");
  const distance = objectBg.scrollWidth / 2;

  gsap.to(objectBg, {
    x: `-=${distance}`,
    duration: 60,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % distance),
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".object_about_title", {
    y: 80,
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_about",
      start: "top 75%",
    },
  });

  gsap.from(".object_about_text", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_about",
      start: "top 75%",
    },
  });

  gsap.from(".object_about_item", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_about_items",
      start: "top 80%",
    },
  });

  gsap.from(".object_about_right h2", {
    y: 150,
    opacity: 0,
    scale: 0.9,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_about_right",
      start: "top 90%",
    },
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   gsap.from(".header_object h2", {
//     y: 80,
//     opacity: 0,
//     scale: 0.95,
//     duration: 1.5,
//     ease: "power3.out",
//   });

//   gsap.from(".header_object p", {
//     y: 60,
//     opacity: 0,
//     duration: 1.2,
//     delay: 0.5,
//     ease: "power3.out",
//   });

//   gsap.to(".header_object", {
//     backgroundPosition: "center 50%",
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".header_object",
//       start: "top top",
//       end: "bottom top",
//       scrub: true,
//     },
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".object_gallery_title", {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_gallery",
      start: "top 80%",
    },
  });

  gsap.from(".object_gallery_line1", {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_gallery",
      start: "top 80%",
    },
  });

  gsap.from(".object_gallery_line2", {
    scaleY: 0,
    transformOrigin: "center top",
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_gallery",
      start: "top 80%",
    },
  });

  gsap.from(".gallery_swiper", {
    opacity: 0,
    scale: 0.97,
    duration: 1.4,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_gallery",
      start: "top 80%",
    },
  });

  gsap.from([".object_gallery_pag", ".gallery_swiper .swiper-pagination"], {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_gallery",
      start: "top 80%",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".object_location_title", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_location",
      start: "top 80%",
    },
  });

  gsap.from(".object_location_img", {
    x: -50,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_location_content",
      start: "top 75%",
    },
  });

  gsap.from(".object_location_item", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_location_content",
      start: "top 75%",
    },
  });

  gsap.from(".object_location_arrow svg", {
    scale: 0.7,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_location_content",
      start: "top 75%",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".object_sorting_top", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_sorting",
      start: "top 80%",
    },
  });

  gsap.from(".object_sorting_items", {
    opacity: 0,
    y: 50,
    duration: 1.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_sorting",
      start: "top 75%",
    },
  });

  gsap.from(".object_filters_item", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_filters_items",
      start: "top 80%",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".header_object_title");
  const titleLetters = title.textContent.split("");

  title.innerHTML = titleLetters
    .map((letter) =>
      letter === " " ? `<span class="letter-title space"> </span>` : `<span class="letter-title">${letter}</span>`
    )
    .join("");

  gsap.from(".letter-title", {
    opacity: 0,
    y: 20,
    scale: 0.3,
    duration: 0.8,
    stagger: {
      each: 0.3,
      from: "random",
    },
    ease: "power2.out",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".header_object_text");
  const letters = text.textContent.split("");

  text.innerHTML = letters
    .map((letter) => {
      return letter === " " ? `<span class="letter space"> </span>` : `<span class="letter">${letter}</span>`;
    })
    .join("");

  gsap.from(".letter", {
    opacity: 0,
    y: 20,
    scale: 0.3,
    duration: 0.8,
    stagger: {
      each: 0.03,
      from: "random",
    },
    ease: "power2.out",
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   if (window.matchMedia("(min-width: 1024px)").matches) {
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".object",
//           start: "top top",
//           end: "+=250%",
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       })
//       .to(".object_img", {
//         maxWidth: "1000px",
//         ease: "none",
//       });
//   }
// });
