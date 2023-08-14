// themes
let themeMap = {
  dark: "light",
  light: "solar",
  solar: "grass",
  grass: "dark",
};

let theme = localStorage.getItem("theme") || ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
$("body").addClass(theme);

$("#themeButton").click(function () {
  let current = localStorage.getItem("theme");
  let next = themeMap[current];
  $("body").removeClass(current).addClass(next);
  localStorage.setItem("theme", next);
});
// ===========================================================================
// nav-bar
$(".menu").click(function () {
  if ($(window).width() < 770) {
    $(".menu-items").toggle();
  }
});

$(window).resize(function () {
  if ($(window).width() >= 770) {
    $(".menu-items").show();
  } else {
    $(".menu-items").hide();
  }
});
// ===============================================================================
// project-page
$("button[class*='desc']").click(function () {
  let descId = $(this).attr("class").split(" ")[0];
  let $desc = $("#" + descId);
  let descVisible = $desc.attr("data-visible");

  if (descVisible === "false") {
    $desc.attr("data-visible", "true");
  } else {
    $desc.attr("data-visible", "false");
  }
});

$("[class*='close-btn']").click(function () {
  let descId = $(this).parent().parent().attr("id");
  $("#" + descId).attr("data-visible", "false");
});
// ===============================================================================
// contact-page
$(".needs-validation").submit(function (event) {
  let form = this;
  event.preventDefault();
  event.stopPropagation();
  if (!form.checkValidity()) {
    $(form).addClass("was-validated");
  } else {
    $("input[type='submit']").val("Sending...").css({ background: `rgb(var(--text-secondary))`, color: `rgb(var(--bg-secondary))`, fontSize: "20px" });
    setTimeout(function () {
      $(form).hide();
      $("#success-message").show();
    }, 2000);
  }
});
// ===============================================================================
// footer

// $(document).scroll(function () {
//   if ($("nav").offset().top + $("nav").height() >= $("footer").offset().top) {
//     $("body").css("position", "relative");
//     $("nav").css("position", "absolute");
//   }
//   if ($(document).scrollTop() + window.innerHeight < $("footer").offset().top) {
//     $("nav").css("position", "fixed");
//   }
// });
// ===============================================================================
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease-in", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
