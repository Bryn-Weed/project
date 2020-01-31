import './index.css';
import $ from 'jquery';


window.onload = function () {

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

  var $win = $(window);

    $win.scroll(function () {
        if ($win.scrollTop() === 0)
            document.getElementById('navbar').classList.toggle('black');
        else if ($win.height() + $win.scrollTop()
                       === $(document).height()) {
        }
    });

    document.getElementById('burger').addEventListener('click',function() {
      document.getElementById('mobile-menu').classList.toggle('active');
      document.getElementById('overlay').classList.toggle('on');
      document.getElementById('navbar').classList.toggle('white');
    })

    document.getElementById('overlay').addEventListener('click',function() {
      document.getElementById('mobile-menu').classList.remove('active');
      document.getElementById('overlay').classList.remove('on');
      document.getElementById('navbar').classList.toggle('white');
    })

}
