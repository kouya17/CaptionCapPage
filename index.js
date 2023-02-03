$(document).ready(function () {
  hsize = $(window).height();
  $(".scroll-box").css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(window).height();
  $(".scroll-box").css("height", hsize + "px");
});


$(function () {
  $('div.disappear').each(function () {
    var $win = $(window),
        $winH = $win.height(),
        $connect = $(this),
        position = $connect.offset().top,
        current = 0,
        scroll;
    $win.on('load scroll', function () {
      scroll = $win.scrollTop();
      current = (position- scroll) / ($(".scroll-box").height() * 0.5) + 1;
      console.log(scroll);
      if (current > 0.999) {
        current = 1;
      }
      if (scroll > position - $winH) {
        $connect.css({opacity: current});
      }
    });
  });
});