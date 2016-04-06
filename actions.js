var a = ["Me and my friends really like The Beatles.",
"One of the prettiest libraries, Cluj-Napoca.",
"We've been awarded by the County Council for the olympiads!",
"Cluj-Napoca, as seen from a hotel's 8th floor.",
"August 15th - National Navy Day!"];

$(".pics li").hover(function() {
  var id = $(this).attr("id");
  document.getElementById("display").innerHTML = a[id];
}, function() {
  document.getElementById("display").innerHTML = "";
});
