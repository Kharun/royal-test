 const langBtn = $(".nav_lang_block")
 const langContent = $(".nav_lang_content")
const nav = $(".nav");

let lastScrollTop = 0;
const threshold = 200;

langBtn.click(function () {
  $(this).toggleClass("active");
  langContent.slideToggle(400);
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