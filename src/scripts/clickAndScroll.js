var navTag = document.querySelectorAll('.header-nav__link');
// navTag.preventDefault();
console.log(navTag.length);

// function checkClick(){
  navTag.onclick = function (evt){
    // for(let i = 0;i<navTag.length;i++){
    //   let tag = navTag[i];
      evt.preventDefault();
      
      console.log(evt);

    // }
    // navTag[i].addEventListener('onclick',function(evt){
    //   console.log(evt);
    // window.location.href = navTag[i];
    // })
  }
// };
// checkClick();
