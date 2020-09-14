$(document).ready(function () {
  $(".nav-li").click(function () {
    if ($("body").innerWidth() < 992) {
      $(this).removeClass("hover-navLi");
      $(this).children("ul").removeClass("position-absolute");
      $(this).children("ul").toggleClass("d-none");
    }
  });

  //
});
