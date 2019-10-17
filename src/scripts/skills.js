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
//svg show pureJS
// var svgScroll = (function(){
//     var svg = document.getElementById('skills__bar'),
//         windowEnd = document.querySelector('.wrapper-header'),
//         svgPath = document.querySelectorAll('.skill__circle--position--above'),
//         windowMargin = window.innerHeight / 3,
//         svgRect = svg.getBoundingClientRect(),
//         svgPos = svgRect.top;

//     return {
//         grow: function(wScroll) {
//             var startAnimate = wScroll - svgPos + windowMargin,
//             windowEndPerx = windowEnd.getBoundingClientRect().height,
//             pixelsElapsed = svgPos - wScroll,
//             percentsElapsed = 100 - Math.ceil(pixelsElapsed / windowMargin * 100),
//             percentsDraw = (windowEndPerx * 1.5) / 100 * percentsElapsed;

//             if (startAnimate >= 0) {
//                 var drawAmout = windowEndPerx - percentsDraw;

//                 if (drawAmout > 0) {
//                     svgPath.forEach(function (item) {
//                         item.style.strokeDashoffset = drawAmout;
//                     })
//                 }
//             }
//             console.log(startAnimate);
//             // console.log(windowEndPerx);

//         }
//     }
// display: block;
//     width: 101px;
//     height: 101px;
//     z-index: 10000;
//     background: firebrick;
//     color: green;

// }());

//svg vue
                        