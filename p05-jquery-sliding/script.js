$(document).ready(function () {
  $(".button_content").hide();
  $(".button").click(function () {
    $(".button_content").slideToggle(300);
  });
});
