function loadSettings(){
  return chrome.extension.getBackgroundPage().getData();
}

function setHandler(settings) {
  var autoPlay = document.getElementById("auto_play");
  if (settings.auto_play) {
    autoPlay.checked = true;
  }
  autoPlay.addEventListener('change', function(){
    chrome.extension.getBackgroundPage().setAutoPlay(autoPlay.checked);
  });

  var playSpeeds = document.getElementsByClassName("js-play-speed");
  for (var i =0 ; i < playSpeeds.length; i++) {
    if (settings.play_speed && settings.play_speed == playSpeeds[i].value) {
      playSpeeds[i].checked = true;
    }
    playSpeeds[i].addEventListener('change', function(){
      var self = this;
      if (self.checked) {
        chrome.extension.getBackgroundPage().setPlaySpeed(self.value);
      }
    });
  }

  var autoNext = document.getElementById("auto_next");
  if (settings.auto_next) {
    autoNext.checked = true;
  }
  autoNext.addEventListener('change', function(){
    chrome.extension.getBackgroundPage().setAutoNext(autoNext.checked);
  });
}

function init() {
  var settings = loadSettings();
  setHandler(settings);
}

init();