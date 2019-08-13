
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
