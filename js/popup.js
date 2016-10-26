console.log("loaded popup.js");

function loadSettings(){
  console.log("load settings");
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
      console.log(self.checked);
      if (self.checked) {
        console.log(self.value);
        chrome.extension.getBackgroundPage().setPlaySpeed(self.value);
      }
    });
  }
}

function init() {
  var settings = loadSettings();
  setHandler(settings);
}

init();