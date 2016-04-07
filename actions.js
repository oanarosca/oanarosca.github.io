var a = ["We really like The Beatles.",
"One of the prettiest libraries, Cluj-Napoca.",
"Awarded by the County Council for great results at the olympiads! Yay!",
"Cluj-Napoca, as seen from our hotel's 8th floor.",
"August 15th - National Navy Day!"];

$(".pics li").hover(function() {
  var id = $(this).attr("id");
  document.getElementById("display").innerHTML = a[id];
}, function() {
  document.getElementById("display").innerHTML = "Hover over the images for details!";
});
