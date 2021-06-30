const hamburger = document.querySelector(".hamburger");
const lineOne = hamburger.querySelector(".line-one");
const lineTwo = hamburger.querySelector(".line-two");
const lineThree = hamburger.querySelector(".line-three");

const lines = [lineOne, lineTwo, lineThree];
const tlm = new TimelineMax({});

const toggleMenu = new TimelineMax({ paused: true, reversed: true });

hamburger.addEventListener("mouseenter", (_) => {
  if (hamburger.classList.contains("js-x")) {
    return;
  }
  tlm.staggerTo(
    lines,
    0.25,
    { scaleX: 1.5, repeat: 1, yoyo: true, ease: "power2.inOut" },
    0.1
  );
});

toggleMenu
  .to(lineTwo, 0.125, { scaleX: 0 }, 0)
  .to(
    lineOne,
    0.25,
    { transformOrigin: "50% 50%", y: 66, ease: "power2.inOut" },
    "slide"
  )
  .to(
    lineThree,
    0.25,
    { transformOrigin: "50% 50%", y: -66, ease: "power2.inOut" },
    "slide"
  )
  .to(hamburger, 0.5, { rotation: 360, ease: "power2.inOut" })
  .to(lineOne, 0.25, { rotation: 45, ease: "power2.inOut" }, "cross")
  .to(lineThree, 0.25, { rotation: -45, ease: "power2.inOut" }, "cross");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("js-x");
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
});
