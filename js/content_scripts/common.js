
window.onload = function() {
    var rates = ["1.0", "1.5", "2.0", "3.0"];

    var Toggle = {
        buttons: [],
        "selected" : "btn-flat-blue-act",
        "default"  : "btn-flat-white-act",
        "select" : function(target) {
            for(var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].classList.remove(Toggle.selected);
                this.buttons[i].classList.add(Toggle.default);
            }
            target.classList.remove(Toggle.default);
            target.classList.add(Toggle.selected);
        },
        "init" : function(buttons) {
            this.buttons = buttons;
            this.select(this.buttons[0]);
        }
    };

    function createButton(rate) {
        var button = document.createElement('button');
        button.textContent = "x" + rate;
        button.setAttribute("data-rate", rate);

        button.classList.add("btn", Toggle.default, "btn-video-speed");
        return button;
    }

    function init() {
        var video = document.getElementsByTagName("video")[0];
        var videoWrapper = document.getElementsByClassName("video-wrapper")[0];

        var div = document.createElement('div');
        var buttons = [];

        for (var i = 0; i < rates.length; i++) {
            var rate = rates[i];

            var button = createButton(rate);

            button.addEventListener("click", function () {
                var self = this;

                var rate = self.getAttribute("data-rate");
                video.playbackRate = rate;

                Toggle.select(self);
            }, false);

            div.appendChild(button);
            buttons.push(button);
        }

        // divを videoの後に追加
        Toggle.init(buttons);
        videoWrapper.parentNode.insertBefore(div, videoWrapper.nextElementSibling);
    }

    init();
};
