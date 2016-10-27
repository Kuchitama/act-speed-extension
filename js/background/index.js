function getData() {
  var data = localStorage['settings'];
  if (data) {
    return JSON.parse(data);
  } else {
    return {};
  }
}

function setData(autoPlay, playSpeed, autoNext) {
  var data = getData();
  if (autoPlay !== null) {
    data.auto_play = autoPlay;
  }
  if (playSpeed !== null) {
    data.play_speed = playSpeed;
  }
  if (autoNext !== null) {
    data.auto_next = autoNext;
  }

  localStorage['settings'] = JSON.stringify(data);
}

function setPlaySpeed(speed) { setData(null, speed, null); }
function setAutoPlay(autoPlay) { setData(autoPlay, null, null); }
function setAutoNext(autoNext) { setData(null, null, autoNext); }

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "loadSettings") {
    sendResponse(getData());
  } else {
    sendResponse({});
  }
});
