
// /**
//  * animation finction
//  */
// var tl = new TimelineMax({onUpdate:updatePercentage});
// var tl2 = new TimelineMax();
// const controller = new ScrollMagic.Controller();

// // tl.from('#des', 0.1, {x:-200, opacity: 0});
// tl.from('#des1', 0.1, {x:200, opacity: 0});
// tl.from('.container-fluid1', 0.1, {x:-200, opacity: 0});
// const scene = new ScrollMagic.Scene({
//   triggerElement: "#desc",
//             triggerHook: "onLeave",
//             duration: "100%"
// })
//   .setPin("#des")
//   .setTween(tl)
// 		.addTo(controller);
// function updatePercentage() {
//       tl.progress();
//       console.log(tl.progress());
//     }
/*author bhavesh Function COuntdown Start */
function countDown()
{
    var now = new Date();
    var eventDate = new Date(2019,9,12);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h = h % 24;
    m %= 60;
    s %=60;

    if(h<10){
        h = "0" + h;
    }
    if(m<10){
        m = "0" + m;
    }
    if(s<10){
        s = "0" + s;
    }
    document.getElementById("days").textContent = d;
    document.getElementById("hrs").textContent = h;
    document.getElementById("min").textContent = m;
    document.getElementById("sec").textContent = s;

    setTimeout(countDown,1000)

}
countDown();
/*author bhavesh Function COuntdown End */

/*author bhavesh Timeline start */
/* Check the location of each element */
$('.content').each( function(i){
  
    var bottom_of_object= $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).height();
    
    if( bottom_of_object > bottom_of_window){
      $(this).addClass('hidden');
    }
  });
  
  
  $(window).scroll( function(){
      /* Check the location of each element hidden */
      $('.hidden').each( function(i){
        
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
        
          /* If the object is completely visible in the window, fadeIn it */
          if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},700);
          }
      });
  });
  /*author bhavesh Timeline end */
