//parallax-Header-Footer
var parallax = (function () {
    var BuddaBg = document.querySelector('.budda__block__bg'),
    BuddaCloud = document.querySelector('.budda__block__cloud'),
    Budda = document.querySelector('.budda-par'),
    bg = document.querySelector('.hero__block__ballum'),
    cloud = document.querySelector('.hero__block__bg'),
    baloon = document.querySelector('.sky-par');
    
    
    return {
        move: function (block, windowScroll, stafeAmount) {
            var strafe = windowScroll / -stafeAmount + '%';
            var transformString = 'translate3d(0,'+ strafe +',0)'
            var style = block.style;
            
            style.transform = transformString;
            style.webkitTransform = transformString;
            // style.top = strafe;
        },
        init: function (wScroll) {
            this.move(bg, wScroll, 80);
            this.move(cloud, wScroll, 20);
            this.move(baloon, wScroll, 50);
            this.move(BuddaBg, wScroll, 45);
            this.move(BuddaCloud, wScroll, 30);
            this.move(Budda, wScroll, 20);
        }
        
    }
}());
window.onscroll = function(){
    var wScroll = window.pageYOffset;
    // console.log(wScroll);
    parallax.init(wScroll);
    // svgScroll.grow(wScroll);
}

