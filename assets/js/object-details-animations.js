gsap.registerPlugin(ScrollTrigger);

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
  gsap.from(".breadcrumbs", {
    opacity: 0,
    x: -30,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_details",
      start: "top 85%",
    },
  });

  gsap.from(".object_details_left", {
    opacity: 0,
    x: -50,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_details_wrapper",
      start: "top 80%",
    },
  });

  gsap.from(".object_details_right", {
    opacity: 0,
    x: 50,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_details_wrapper",
      start: "top 80%",
    },
  });

  gsap.from(".object_details_bottom_item", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".object_details_bottom",
      start: "top 85%",
    },
  });

  gsap.from(".object_details_btn", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".object_details_wrapper",
      start: "top 70%",
    },
  });
});
