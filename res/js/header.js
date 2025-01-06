window.onscroll = function() {
    var pos = window.pageYOffset;
    if (pos > 200) {
        document.querySelector('#main-header').style.top = '0';
        document.querySelector('.header-stack').style.width = '100%'
        document.querySelector('.header-stack').style.borderRadius = '0'
        document.querySelector('.header-stack').style.transition = '0.6s';
    } else {
        document.querySelector('#main-header').style.top = '3vh';
        document.querySelector('.header-stack').style.width = '80%'
        document.querySelector('.header-stack').style.borderRadius = '1vw'
        document.querySelector('.header-stack').style.transition = '0.6s';
    }
}
function toggleAudio() {
    var audioElement = document.getElementById('player')
    var soundOn = document.getElementById('play')
    var soundOff = document.getElementById('pause')
    if (audioElement.paused) {
      audioElement.play();
      audioElement.volume = 0.1;
      $(soundOn).show();
      $(soundOff).hide();
    } else {
      audioElement.pause();
      $(soundOn).hide();
      $(soundOff).show();
    }
  } 

  function ResponsiveMenu() {
    var menu = document.getElementById("menu");
    var menuStyle = window.getComputedStyle(menu);

    if (menuStyle.display === "none") {
        menu.classList.add("menu-active");
    } else {
        menu.classList.remove("menu-active");
    }
}
