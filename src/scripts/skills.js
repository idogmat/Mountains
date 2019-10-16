//parallax
var parallax = (function () {
    var bg = document.querySelector('.hero__block__bg'),
    user = document.querySelector('.hero__block__ballum'),
    sectionText = document.querySelector('.tablet');


return {
    move: function (block, windowScroll, stafeAmount) {
        var strafe = windowScroll / -stafeAmount + '%';
        var style = block.style;
        style.top = strafe;
    },
    init: function (wScroll) {
        this.move(bg, wScroll, -50);
    }

    }
}());

window.onscroll = function(){
    var wScroll = window.pageYOffset;
    console.log(wScroll);
    parallax.init(wScroll);
}