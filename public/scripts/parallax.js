var sectionElement1 = document.getElementById("snowboard");
new simpleParallax(sectionElement1, {
  scale: 1.9,
  delay: 0.1,
  orientation: "right",
});

var sectionElement2 = document.getElementById("gift");
new simpleParallax(sectionElement2, {
  scale: 1.9,
  delay: 0.1,
  orientation: "up",
  
});

var sectionElement3 = document.getElementsByClassName("update");
new simpleParallax(sectionElement3, {
  scale: 1.9,
  delay: 0.1,
  orientation: "down right"
});
