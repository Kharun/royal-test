const langBtn = $(".nav_lang_block");
const langContent = $(".nav_lang_content");
const nav = $(".nav_object");
const topObjectsNavs = $(".categories_top_item");

const lenis = new Lenis({
  duration: 1.9,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let lastScrollTop = 0;
const threshold = 700;

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

$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 1000) {
    $(".nav_main").addClass("active");
  } else {
    $(".nav_main").removeClass("active");
  }
});

$(".nav_theme").click(function () {
  document.body.classList.toggle("dark");
  $(this).toggleClass("active");
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

$(document).ready(function () {
  gsap.utils.toArray(".menu_link").forEach((link) => {
    const text = link.querySelector("span");

    link.addEventListener("mousemove", () => {
      gsap.to(text, { y: "-100%", duration: 0.4, ease: "power2.out" });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(text, { y: "0%", duration: 0.4, ease: "power2.in" });
    });
  });
});

// setupCustomCursor(".reviews_content", ".custom-cursor");
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
});

$(document).ready(function () {
  let selectedFloors = [];
  let selectedRooms = [];
  let minArea = 10;
  let maxArea = 300;

  function filterObjects() {
    $(".object_filters_item")
      .hide()
      .filter(function () {
        let floor = parseInt($(this).data("floor"));
        let rooms = parseInt($(this).data("rooms"));
        let area = parseFloat($(this).data("area"));

        let floorMatch = selectedFloors.length ? selectedFloors.includes(floor) : true;
        let roomsMatch = selectedRooms.length ? selectedRooms.includes(rooms) : true;
        let areaMatch = area >= minArea && area <= maxArea;

        return floorMatch && roomsMatch && areaMatch;
      })
      .show();
  }

  $(".object_sorting_item_floor .object_floor_item").on("click", function () {
    let value = parseInt($(this).text());
    $(this).toggleClass("active");

    if ($(this).closest(".object_sorting_item").find("p").text().includes("Этаж")) {
      if (selectedFloors.includes(value)) {
        selectedFloors = selectedFloors.filter((v) => v !== value);
      } else {
        selectedFloors.push(value);
      }
    } else if (
      $(this).closest(".object_sorting_item").find("p").text().includes("Кол-во комнат") ||
      $(this).closest(".object_sorting_item").find("p").text().includes("Кол-во комнат")
    ) {
      if (selectedRooms.includes(value)) {
        selectedRooms = selectedRooms.filter((v) => v !== value);
      } else {
        selectedRooms.push(value);
      }
    }

    filterObjects();
  });

  $(".object_sorting_range input[type='range']").on("input", function () {
    let parent = $(this).closest(".object_sorting_range");
    let minInput = parent.find("input#min").val();
    let maxInput = parent.find("input#max").val();

    if (parseInt(minInput) > parseInt(maxInput)) {
      [minInput, maxInput] = [maxInput, minInput];
    }

    parent.find("#min-value-object").text(minInput);
    parent.find("#max-value-object").text(maxInput);

    minArea = parseInt(minInput);
    maxArea = parseInt(maxInput);

    filterObjects();
  });

  $(".object_sorting_clear").on("click", function () {
    selectedFloors = [];
    selectedRooms = [];
    minArea = 1;
    maxArea = 300;

    $(".object_floor_item").removeClass("active");
    $(".object_sorting_range input#min").val(1);
    $(".object_sorting_range input#max").val(300);
    $(".object_sorting_range #min-value-object").text(1);
    $(".object_sorting_range #max-value-object").text(300);

    filterObjects();
  });

  filterObjects();
});

// $(document).ready(function () {
//   const initialText = $(".object_about_right p").text();
//   const initialTitle = $(".object_about_right h2").text();

//   $(".object_about_item").hover(
//     function () {
//       const h2Text = $(this).find("h2").text();
//       const pText = $(this).find("p").text();

//       $(".object_about_right h2").text(h2Text);
//       $(".object_about_right p").text(pText);
//     },
//     function () {
//       $(".object_about_right h2").text(initialTitle);
//       $(".object_about_right p").text(initialText);
//     }
//   );
// });
