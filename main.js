var start = new Date;
$(document).ready(function () {
  setInterval(function () {
    $('.main-page_clock').text((new Date - start) / 1000 + " Seconds");
  });
});


$(document).ready(function () {
  $("button").on("click", function () {
    $(thing).text("See! You did a thing NOW!");
  });
});