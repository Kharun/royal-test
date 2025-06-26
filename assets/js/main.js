const langBtn = $(".nav_lang_block");
const langContent = $(".nav_lang_content");
const nav = $(".nav_object");
const topObjectsNavs = $(".categories_top_item");

let lastScrollTop = 0;
const threshold = 1000;

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

$(".nav_theme").click(function () {
  document.body.classList.toggle("dark");
});
$(".burger_menu").click(function () {
  $(".menu").toggleClass("active");
});

// Cursor Custom
function setupCustomCursor(targetSelector, cursorSelector) {
  const target = document.querySelector(targetSelector);
  const cursor = document.querySelector(cursorSelector);

  if (!target || !cursor) return;

  target.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
  });

  target.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });

  target.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });
}

setupCustomCursor(".reviews_content", ".custom-cursor");
setupCustomCursor(".ponorama", ".ponorama_cursor");
setupCustomCursor(".news_left", ".news_cursor");

document.querySelectorAll(".news_item").forEach((item) => {
  setupCustomCursorElement(item, ".news_cursor");
});

function setupCustomCursorElement(element, cursorSelector) {
  const cursor = document.querySelector(cursorSelector);

  if (!element || !cursor) return;

  element.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
  });

  element.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });

  element.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });
}

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
  const header = $(".header_main");
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

$(document).ready(function () {
  $(".categories_statuses .categories_status").on("click", function () {
    $(".categories_statuses .categories_status").removeClass("active");
    $(this).addClass("active");
    filterItems();
  });

  $(".categories_sort_status .categories_status").on("click", function () {
    $(this).toggleClass("active");
    filterItems();
  });

  $(".categories_select").on("change", function () {
    filterItems();
  });

  function filterItems() {
    const selectedStatus = $(".categories_statuses .categories_status.active").data("status") || "all";

    const selectedTypes = [];
    $(".categories_sort_status .categories_status.active").each(function () {
      selectedTypes.push($(this).data("type"));
    });

    const selectedLocation = $(".categories_select").val();

    const minFloors = parseInt($("#min").val());
    const maxFloors = parseInt($("#max").val());

    $(".categories_item").each(function () {
      const $item = $(this);
      const itemStatus = $item.data("status");
      const itemType = $item.data("type");
      const itemLocation = $item.data("location");
      const itemFloors = parseInt($item.data("floors"));

      const statusMatch = selectedStatus === "all" || itemStatus === selectedStatus;
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(itemType);
      const locationMatch = !selectedLocation || itemLocation === selectedLocation;
      const floorsMatch = itemFloors >= minFloors && itemFloors <= maxFloors;

      if (statusMatch && typeMatch && locationMatch && floorsMatch) {
        $item.stop(true, true).fadeIn(300);
      } else {
        $item.stop(true, true).fadeOut(300);
      }
    });
  }

  const minSlider = document.getElementById("min");
  const maxSlider = document.getElementById("max");
  const minValue = document.getElementById("min-value");
  const maxValue = document.getElementById("max-value");

  minValue.textContent = minSlider.value;
  maxValue.textContent = maxSlider.value;

  minSlider.addEventListener("input", function () {
    if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
      maxSlider.value = minSlider.value;
      maxValue.textContent = maxSlider.value;
    }
    minValue.textContent = minSlider.value;
    filterItems();
  });

  maxSlider.addEventListener("input", function () {
    if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
      minSlider.value = maxSlider.value;
      minValue.textContent = minSlider.value;
    }
    maxValue.textContent = maxSlider.value;
    filterItems();
  });

  filterItems();
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gsap-fade-in").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  gsap.utils.toArray(".gsap-fade-left").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  gsap.utils.toArray(".gsap-fade-right").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  gsap.utils.toArray(".gsap-fade-down").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  gsap.utils.toArray(".gsap-scale-in").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  gsap.utils.toArray(".categories_item").forEach((element, i) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
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

  const cursor = document.querySelector(".ponorama_cursor");

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power3.out",
    });
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

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".contacts_title", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contacts",
      start: "top 70%",
    },
  });

  gsap.from(".contacts_input", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contacts_form",
      start: "top 75%",
    },
  });

  gsap.from(".contacts_btn .read", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contacts_form",
      start: "top 75%",
    },
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

  gsap.to(".object_bg", {
    xPercent: -50,
    ease: "none",
    repeat: -1,
    duration: 20,
  });
});
