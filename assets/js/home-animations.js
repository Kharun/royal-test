gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const header = $(".header_main");
  const headerRoyal = $(".header_royal");
  const headerSwiperContent = $(".header_swiper_content");
  const headerPagination = $(".header_pagination");
  const headerPag = $(".header_pag");
  const headerBg = $(".header_swiper_bg");

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const targetMaxWidth = isMobile ? "25%" : "6%";

  gsap.set([headerSwiperContent, headerPagination, headerPag], { opacity: 0 });
  gsap.set(headerBg, { scale: 1.4 });
  gsap.set(headerRoyal, {
    width: "100%",
    top: "50%",
  });

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(headerRoyal, {
    scale: 0.5,
    maxWidth: targetMaxWidth,
    top: "7%",
    duration: 2,
  })
    .to(
      headerBg,
      {
        scale: 1,
        duration: 2,
      },
      "<"
    )
    .to(
      [headerSwiperContent, headerPagination, headerPag],
      {
        opacity: 1,
        duration: 1,
      },
      "-=1"
    );
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".about_top_text", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about_top_text",
      start: "top 80%",
    },
  });

  gsap.from(".about_left", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about_top_text",
      start: "top 80%",
    },
  });

  gsap.from(".about_right", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about_top_text",
      start: "top 80%",
    },
  });

  gsap.from(".about_left img, .about_right_img", {
    scale: 1.1,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about_top_text",
      start: "top 80%",
    },
  });

  gsap.from(".read", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 1.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about_top_text",
      start: "top 80%",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".abous_us_number",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });

  tl.from(".abous_us_number_texts p", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  tl.from(
    ".abous_us_number_item",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    },
    "-=0.5"
  );

  const numberItems = document.querySelectorAll(".abous_us_number_item h2");
  numberItems.forEach((item) => {
    const endValue = parseInt(item.textContent.replace(/\D/g, "")) || 0;
    const plus = item.textContent.includes("+") ? "+" : "";

    gsap.fromTo(
      item,
      { innerText: 0 },
      {
        innerText: endValue,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          item.innerText = Math.floor(this.targets()[0].innerText) + plus;
        },
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
        },
      }
    );
  });

  gsap.to(".abous_us_number", {
    backgroundPosition: "center 40%",
    ease: "none",
    scrollTrigger: {
      trigger: ".abous_us_number",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".ponorama_content h2", {
    y: 80,
    opacity: 0,
    duration: 1.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".ponorama",
      start: "top 70%",
    },
  });

  gsap.from(".ponorama_cursor", {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".ponorama",
      start: "top 90%",
    },
  });

  gsap.to(".ring1", {
    scale: 1.2,
    opacity: 0,
    duration: 1.5,
    repeat: -1,
    ease: "power1.out",
    delay: 0,
  });

  gsap.to(".ring2", {
    scale: 1.2,
    opacity: 0,
    duration: 1.5,
    repeat: -1,
    ease: "power1.out",
    delay: 0.5,
  });

  gsap.to(".ring3", {
    scale: 1.2,
    opacity: 0,
    duration: 1.5,
    repeat: -1,
    ease: "power1.out",
    delay: 1,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".news_top_title h2", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".news",
      start: "top 70%",
    },
  });

  gsap.from(".news_top_title p", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".news",
      start: "top 70%",
    },
  });

  gsap.from(".news_top_text p", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".news",
      start: "top 60%",
    },
  });

  gsap.from(".news_left", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".news_block",
      start: "top 75%",
    },
  });

  gsap.from(".news_item", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".news_block",
      start: "top 75%",
    },
  });

  gsap.from(".news_bottom .read", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".news_bottom",
      start: "top 85%",
    },
  });
});

document.querySelectorAll(".menu_link").forEach((link) => {
  const textTop = link.querySelector(".text-top");
  const textBottom = link.querySelector(".text-bottom");

  link.addEventListener("mouseenter", () => {
    gsap.to(textTop, { y: "-100%", duration: 0.3, ease: "power2.out" });
    gsap.fromTo(textBottom, { y: "100%" }, { y: "0%", duration: 0.3, ease: "power2.out" });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(textTop, { y: "0%", duration: 0.3, ease: "power2.out" });
    gsap.to(textBottom, { y: "100%", duration: 0.3, ease: "power2.out" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".about_us_img img", {
    y: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // gsap.to(".about_right_img", {
  //   y: -100,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".about",
  //     start: "top bottom",
  //     end: "bottom top",
  //     scrub: true,
  //   },
  // });

  gsap.to(".reviews_item_image img", {
    y: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".reviews",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".reviews_item_info", {
    y: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".reviews",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".ponorama_bg", {
    y: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".ponorama",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".about_texts", {
    y: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".categories_title, .categories_name ", {
    y: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".categories",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".abous_us_number_texts p", {
    y: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".abous_us_number",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".abous_us_number_items", {
    y: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".abous_us_number",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".news_top_title", {
    y: -70,
    ease: "none",
    scrollTrigger: {
      trigger: ".news",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to("..news_top_text p", {
    y: -80,
    ease: "none",
    scrollTrigger: {
      trigger: ".news",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});
