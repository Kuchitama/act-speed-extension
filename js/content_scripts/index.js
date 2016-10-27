window.onload = function() {
    function applySettings(settings) {
      // TODO: use wistia api
      // var videoId = document.getElementsByClassName("wistia-video")[0].id;
      var video = document.getElementsByTagName("video")[0];
      video.playbackRate = settings.play_speed;

      if (settings.auto_next) {
        video.addEventListener('ended', function(){
          document.getElementsByClassName("js-lecture-finish")[0].click();
        });
      }

      if (settings.auto_play) {
        video.play();
      }
    }

    function loadSettings() {
      var autoPlay = false;
      var playSpeed = 1.0;
      var autoNext = false;

      chrome.runtime.sendMessage({method: "loadSettings"} , function(response) {
        if (response.auto_play) {
          autoPlay = response.auto_play;
        }
        if (response.play_speed) {
          playSpeed = response.play_speed;
        }
        if (response.auto_next) {
          autoNext = response.auto_next;
        }
        var settings = {
          auto_play: autoPlay,
          play_speed: playSpeed,
          auto_next: autoNext
        };

        applySettings(settings);
      });
    }

    function init() {
      loadSettings();
    }

    init();
};
