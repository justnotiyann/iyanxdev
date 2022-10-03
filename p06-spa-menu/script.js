$(document).ready(function () {
  $("#content").hide();
  $("#about").hide();
  $("#projects").hide();
  $("#contacts").hide();
  $("li").click(function () {
    $("#content").slideToggle("fast");
  });
});

// $(document).ready(function () {
//   $(".button").click(function () {
//     $(".button_content").slideToggle("slow");
//   });
// });

// if ($('body').hasClass('mobile-nav-active')) {
//     $('body').removeClass('mobile-nav-active');
//     $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//     $('.mobile-nav-overly').fadeOut()};

// $(document).ready(function () {
//   $("#AddCity").hide();
//   var AddCityVar = 0;
//   $("#AddCityA").click(function () {
//     if (AddCityVar == 1) {
//       $("#AddCity").hide();
//       AddCityVar = 0;
//     } else {
//       $("#AddCity").slideDown("slow");
//       AddCityVar = 1;
//     }
//   });
// });
