window.onload = function() {
    function applySettings(settings) {
      // TODO: use wistia api
      // var videoId = document.getElementsByClassName("wistia-video")[0].id;
      var video = document.getElementsByTagName("video")[0];
      video.playbackRate = settings.play_speed;

      if (settings.auto_play) {
        video.play();
      }
    }

    function loadSettings() {
      var autoPlay = false;
      var playSpeed = 1.0;

      chrome.runtime.sendMessage({method: "loadSettings"} , function(response) {
        if (response.auto_play) {
          autoPlay = response.auto_play;
        }
        if (response.play_speed) {
          playSpeed = response.play_speed
        }
        var settings = {
          auto_play: autoPlay,
          play_speed: playSpeed
        };

        applySettings(settings);
      });
    }

    function init() {
      loadSettings();
    }

    init();
};
