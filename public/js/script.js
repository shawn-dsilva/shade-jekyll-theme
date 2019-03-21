document.getElementById("menu").checked = true;

if (document.documentElement.clientWidth < 900) {
  document.getElementById("container").style.paddingTop = "42rem"
  document.addEventListener("scroll", function() {
      if (window.pageYOffset > 550) {
        document.getElementById("menu").checked = false;
        document.getElementById("sidebar").style.position = "fixed";
        document.getElementById("container").style.paddingTop = "40rem";

      }
      else {
        document.getElementById("menu").checked = true;
        document.getElementById("sidebar").style.position = "absolute";
        document.getElementById("container").style.paddingTop = "43rem";

      }
});
}