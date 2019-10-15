var parallax = (function () {
    var bg = document.querySelector('.block__bg'),
    user = document.querySelector('.block__ballum'),
    sectionText = document.querySelector('.tablet');


return {
    move: function (block, windowScroll, stafeAmount) {
        var strafe = windowScroll / -stafeAmount + '%';
        var style = block.style;
        style.top = strafe;
    },
    init: function (wScroll) {
        this.move(bg, wSccroll, 2);
    }

    }
}());

window.onscroll = function(){
    var wScroll = window.pageYOffset;
    console.log(wScroll);
    parallax.init(wScroll);
}