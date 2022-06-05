var start = new Date;
$(document).ready(function () {
  setInterval(function () {
    $('.main-page_clock').text((new Date - start) / 1000 + " Seconds");
  });
});


$(document).ready(function () {
  $("button").click( function () {
    $("#thing").toggle();
    $(".main-page_header").css("color", "red");
    $(".main-page_header").css("text-align", "center");
  });
});