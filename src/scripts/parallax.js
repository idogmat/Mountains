var parallax = (function () {
    var BuddaBg = document.querySelector('.budda__block__bg'),
    BuddaCloud = document.querySelector('.budda__block__cloud'),
    Budda = document.querySelector('.budda-par'),
        baloon = document.querySelector('.hero__block__ballum .baloon-par'),
    cloud = document.querySelector('.hero__block__bg'),
    bg = document.querySelector('.sky-par');
    
    
    return {
        move: function (block, windowScroll, stafeAmount) {
            var strafe = windowScroll / -stafeAmount + '%';
            var transformString = 'translate3d(0,'+ strafe +',0)'
            var style = block.style;
            
            style.top = transformString;
            style.webkitTransform = transformString;
            // style.top = strafe;
        },
        init: function (wScroll) {
            var bottomOffset = getOffsets("wrapper-responses").bottom,
            topOffset = getOffsets("wrapper-header").top;

            if (bottomOffset > 0) {
            this.move(BuddaBg, wScroll, 80);
            this.move(BuddaCloud, wScroll, 90);
            this.move(Budda, wScroll, 80);
            }
            if (topOffset < 0) {
            this.move(bg, wScroll, 80);
            this.move(cloud, wScroll, 60);
            this.move(baloon, wScroll, 10);
            }
        }
        
    }
}());

function getOffsets(block) {
    var element = document.querySelector('.'+block),
        rect = element.getBoundingClientRect();
        return rect;
}

window.onscroll = function(){
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
}
