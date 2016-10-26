chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "loadSettings") {
    var json = {
      auto_play: true,
      play_speed: 1.5
    };
    sendResponse(json);
  } else {
    sendResponse({});
  }
});

function getData() {
  var data = localStorage['settings'];

  if (data) {
    return JSON.parse(data);
  } else {
    return {};
  }
}

function setData(autoPlay, playSpeed) {
  var data = getData();
  if (autoPlay !== null) {
    data.auto_play = autoPlay;
  }
  if (playSpeed !== null) {
    data.play_speed = playSpeed;
  }

  localStorage['settings'] = JSON.stringify(data);
}

function setPlaySpeed(speed) { setData(null, speed); }
function setAutoPlay(autoPlay) { setData(autoPlay, null); }
