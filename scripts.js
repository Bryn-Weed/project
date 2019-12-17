
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-list").style.opacity = "1";
    document.getElementById("navbar").style.background = "white";
    document.getElementById("navbar").style.color = "black";
    document.getElementById("logo-text").style.opacity = "1";
  } else {
    document.getElementById("nav-list").style.opacity = "0";
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("navbar").style.color = "white";
    document.getElementById("logo-text").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}
