window.onload = function() {
    var videoWrapper = document.getElementsByClassName("video-wrapper")[0];
    var video = document.getElementsByTagName("video")[0];

    var div = document.createElement('div');

    var rates = [1.0, 1.5, 2.0, 3.0];

    for (var i = 0; i < rates.length; i++) {
        var rate = rates[i];

        var button = document.createElement('button');
        button.textContent = "x" + rate;
        button.setAttribute("data-rate", rate);

        button.classList.add("btn", "btn-default");

        button.addEventListener("click", function(){
            var self = this;
            var rate = self.getAttribute("data-rate");
            video.playbackRate = rate;
        }, false);

        div.appendChild(button);
    }

    // divを videoの後に追加
    videoWrapper.parentNode.insertBefore(div, videoWrapper.nextElementSibling);

    console.log("hgoe");
};
