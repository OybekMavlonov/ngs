if ($(window).width() < 991) {
  $("#fullpage").removeAttr("id");
}

$(document).ready(function () {
  $("#fullpage").fullpage({
    responsiveWidth: 1200,
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
      $("header").css("background", "rgb(0, 0, 0, 0.8)");
    } else {
      $("header").css("background", "transparent");
    }
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(".hamburger-menu").click(function (e) {
  $(".mobile-menu").toggleClass("show-mobile-menu");
});

$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(this).toggleClass("open");
  });
});

(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery
