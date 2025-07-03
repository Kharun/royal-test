// document.addEventListener("DOMContentLoaded", () => {
//   gsap.from(".header_company h2", {
//     y: 80,
//     opacity: 0,
//     scale: 0.95,
//     duration: 1.5,
//     ease: "power3.out",
//   });

//   gsap.to(".header_company", {
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
  gsap.from(".company_info_top_item h2", {
    opacity: 0,
    x: -50,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".company_info_top_item",
      start: "top 80%",
    },
  });

  gsap.from(".company_info_top_item span", {
    opacity: 0,
    scale: 0.5,
    duration: 1.4,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".company_info_top_item",
      start: "top 80%",
    },
  });

  gsap.from(".company_info_top_item img", {
    opacity: 0,
    x: 60,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".company_info_top_item",
      start: "top 80%",
    },
  });

  gsap.from(".company_info_bottom_item img", {
    opacity: 0,
    x: -60,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".company_info_bottom_item",
      start: "top 85%",
    },
  });

  gsap.from(".company_info_bottom_item p", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".company_info_bottom_item",
      start: "top 85%",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".company_about_title", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".company_about",
      start: "top 80%",
    },
  });

  gsap.from(".company_about_title span", {
    opacity: 0,
    scale: 0.5,
    duration: 1.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".company_about",
      start: "top 80%",
    },
  });

  gsap.from(".company_about_block:first-child", {
    opacity: 0,
    x: -60,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".company_about_wrapper",
      start: "top 80%",
    },
  });

  gsap.from(".company_about_block:last-child", {
    opacity: 0,
    x: 60,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".company_about_wrapper",
      start: "top 80%",
    },
  });

  gsap.from(".company_about_block img", {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".company_about_wrapper",
      start: "top 80%",
    },
  });

  gsap.from(".company_about_item", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".company_about_wrapper",
      start: "top 80%",
    },
  });

  gsap.from(".company_center_title", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".company_center",
      start: "top 70%",
    },
  });

  gsap.from(".partners_title", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".partners_title",
      start: "top 80%",
    },
  });

  gsap.from(".partners_text", {
    opacity: 0,
    x: 50,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".company_info_top_item",
      start: "top 80%",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    ScrollTrigger.create({
      trigger: ".company_center",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    });

    gsap.fromTo(
      ".company_img_right",
      { y: "-150%" },
      {
        y: "190%",
        scrollTrigger: {
          trigger: ".company_center",
          start: "top top",
          end: "+=100%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".company_img_left",
      { y: "150%" },
      {
        y: "-190%",
        scrollTrigger: {
          trigger: ".company_center",
          start: "top top",
          end: "+=100%",
          scrub: true,
        },
      }
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".header_text");
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
    duration: 0.3,
    stagger: {
      each: 0.03,
      from: "random",
    },
    ease: "power2.out",
  });

  gsap.to(".company_team_bg", {
    y: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".company_team",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});

const activeAnimations = new Map();

function splitTextToSpans(element) {
  const text = element.textContent;
  const chars = text.split("");
  element.innerHTML = "";
  chars.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    element.appendChild(span);
  });
}

let swiperTeam = new Swiper(".company_team_swiper", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  navigation: {
    nextEl: ".company_team_right",
    prevEl: ".company_team_left",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  speed: 500,
});

document.querySelectorAll(".company_team_info h2, .company_team_info p").forEach((el) => {
  splitTextToSpans(el);
});

document.querySelectorAll(".company_team_info span").forEach((span) => {
  span.style.opacity = 0;
});

function resetSpans(slide) {
  const chars = slide.querySelectorAll("span");
  gsap.killTweensOf(chars);
  gsap.set(chars, { opacity: 0, y: 20 });
}

function animateIn(slide) {
  const chars = slide.querySelectorAll("span");
  gsap.killTweensOf(chars);
  gsap.set(chars, { opacity: 0, y: 20 });

  const tl = gsap.fromTo(
    chars,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: { each: 0.01, from: "random" },
      duration: 0.1,
      ease: "power2.out",
    }
  );

  activeAnimations.set(slide, tl);
}

function animateOut(slide) {
  const chars = slide.querySelectorAll("span");
  gsap.killTweensOf(chars);

  const tl = gsap.to(chars, {
    opacity: 0,
    y: -20,
    stagger: { each: 0.02, from: "random" },
    duration: 0.4,
    ease: "power2.in",
  });

  activeAnimations.set(slide, tl);
}

animateIn(swiperTeam.slides[swiperTeam.activeIndex]);

swiperTeam.on("slideChangeTransitionStart", function () {
  animateOut(swiperTeam.slides[swiperTeam.previousIndex]);

  resetSpans(swiperTeam.slides[swiperTeam.activeIndex]);
});

swiperTeam.on("slideChangeTransitionEnd", function () {
  animateIn(swiperTeam.slides[swiperTeam.activeIndex]);
});
