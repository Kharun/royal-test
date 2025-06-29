document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".header_company h2", {
    y: 80,
    opacity: 0,
    scale: 0.95,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.to(".header_company", {
    backgroundPosition: "center 50%",
    ease: "none",
    scrollTrigger: {
      trigger: ".header_object",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});

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

  gsap.to(".company_center img:first-child", {
    y: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".company_center",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".company_center img:last-child", {
    y: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".company_center",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
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
