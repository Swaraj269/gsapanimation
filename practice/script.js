let lastProgress = 0;
let isProgressStopped = true;
let timeout;
var count = 1;
const movediv = () => {
  gsap.to(".differentcategory", {
    duration: 0.4,
    x: `${-100 * count}%`,
    ease: "power3.inOut",
  });
  if (count < 6) {
    count++;
  }
};

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".shopbycategory",
    scroller: "body",
    pin: true,
    start: "top 0%",
    end: "top -600%",
    onUpdate: (self) => {
      clearTimeout(timeout);
      if (self.progress === lastProgress) {
        if (!isProgressStopped) {
          isProgressStopped = true;
          console.log("Progress stopped at", self.progress);
        }
      } else {
        if (isProgressStopped) {
          isProgressStopped = false;
          movediv();
          console.log("Progress started again at", self.progress);
        }
      }
      lastProgress = self.progress;

      timeout = setTimeout(() => {
        if (self.progress === lastProgress) {
          isProgressStopped = true;
          console.log("Progress stopped at", self.progress);
        }
      }, 100);
    },
  },
});
