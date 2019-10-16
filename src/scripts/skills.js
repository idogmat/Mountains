//parallax-header-scroll
var parallax = (function () {
    var bg = document.querySelector('.hero__block__ballum'),
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
        this.move(cloud, wScroll, 30);
        this.move(baloon, wScroll, 60);
    }

    }
}());

//parallax-header-move
//svg show
var svgScroll = (function(){
    var svg = document.getElementById('skills__bar'),
        headerWrr = window.innerHeight;
        svgPath = document.querySelectorAll('.skill__circle--position--above'),
        windowMargin = window.innerHeight / 3,
        svgRect = svg.getBoundingClientRect(),
        svgPos = svgRect.top;

    return {
        grow: function(wScroll) {
            var startAnimate = wScroll - svgPos + windowMargin,
            pixelsElapsed = svgPos - wScroll,
            percentsElapsed = 100 - Math.ceil(pixelsElapsed / windowMargin * 100),
            percentsDraw = headerWrr / 100 * percentsElapsed;
            
            if (startAnimate >= 0) {
                var drawAmout = headerWrr - percentsDraw;

                if (drawAmout > 0) {
                    svgPath.forEach(function (item) {
                        item.style.strokeDashoffset = drawAmout;
                    })
                }
            }
            console.log(startAnimate);
        }
    }
    
}());

window.onscroll = function(){
    var wScroll = window.pageYOffset;
    // console.log(wScroll);
    parallax.init(wScroll);
    svgScroll.grow(wScroll);
}