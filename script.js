var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('#des', 0.1, {x:-200, opacity: 0});
tl.from('#des1', 0.1, {x:200, opacity: 0});
tl.from('.container-fluid1', 0.1, {x:-200, opacity: 0});
const scene = new ScrollMagic.Scene({
  triggerElement: "#desc",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin("#des")
  .setTween(tl)
		.addTo(controller);
function updatePercentage() {
//percent.innerHTML = (tl.progress() *100 ).toFixed();
      tl.progress();
      console.log(tl.progress());
    }