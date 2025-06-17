const langBtn = $(".nav_lang_block");
const langContent = $(".nav_lang_content");
const nav = $(".nav");
const topObjectsNavs = $(".categories_top_item");

let lastScrollTop = 0;
const threshold = 1600;

langBtn.click(function () {
  $(this).toggleClass("active");
  langContent.slideToggle(400);
});

topObjectsNavs.click(function () {
  topObjectsNavs.removeClass("active");

  $(this).toggleClass("active");
});

$(window).on("scroll", function () {
  const currentScroll = $(this).scrollTop();

  if (currentScroll > threshold) {
    nav.toggleClass("active", currentScroll < lastScrollTop);
    nav.toggleClass("hide", currentScroll > lastScrollTop);
  } else {
    nav.removeClass("active hide");
  }

  lastScrollTop = currentScroll;
});

const minRange = $("#min");
const maxRange = $("#max");
const minValue = $("#min-value");
const maxValue = $("#max-value");

minRange.on("input", () => {
  if (parseInt(minRange.val()) > parseInt(maxRange.val())) {
    minRange.val(maxRange.val());
  }
  minValue.text(minRange.val());
});

maxRange.on("input", () => {
  if (parseInt(maxRange.val()) < parseInt(minRange.val())) {
    maxRange.val(minRange.val());
  }
  maxValue.text(maxRange.val());
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const header = $(".header");
  const headerRoyal = $(".header_royal");
  const headerSwiperContent = $(".header_swiper_content");
  const headerPagination = $(".header_pagination");
  const headerPag = $(".header_pag");
  const headerBg = $(".header_swiper_bg");

  gsap.set([headerSwiperContent, headerPagination, headerPag], { opacity: 0 });
  gsap.set(headerBg, { scale: 1.4 });
  gsap.set(headerRoyal, {
    width: "100%",
    top: "50%",
  });

  ScrollTrigger.create({
    trigger: header,
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      gsap.to(headerRoyal, {
        scale: 1 - progress * 0.5,
        maxWidth: `${100 - (100 - 6) * progress}%`,
        top: `${50 - 43 * progress}%`,
        ease: "power2.out",
      });

      if (progress > 0.7) {
        gsap.to([headerSwiperContent, headerPagination, headerPag], {
          opacity: 1,
          duration: 0.5,
        });
      } else {
        gsap.to([headerSwiperContent, headerPagination, headerPag], {
          opacity: 0,
          duration: 0.5,
        });
      }

      gsap.to(headerBg, {
        scale: 1.4 - progress * 0.4,
        ease: "power2.out",
      });
    },
    onLeave: () => {
      gsap.to(header, { position: "relative" });
    },
  });
});
