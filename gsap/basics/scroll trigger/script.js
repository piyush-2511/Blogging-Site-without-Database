gsap.from("#page1 .box",{
  scale: 0,
  duration:2,
  delay:1,
  rotate:360
})
// gsap.from("#page2 .box",{
//   scale: 0,
//   duration:2,
//   rotate:360,
//   // scrollTrigger: "#page2 .box"
//   scrollTrigger: {
//     trigger:"#page2 .box",
//     scroller: "body",
//     markers: true,
//     start:"top 60%"
//   }
// })
gsap.from("#page2 .box",{
  scale: 0,
  opacity:0,
  duration:1,
  rotate:720,
  // scrollTrigger: "#page2 .box"
  scrollTrigger: {
    trigger:"#page2",//parent
    scroller: "body",
    markers: true,
    start:"top 60%",
    end:"top 30%",
    scrub: 2,
    pin:true// at the time of pin the trigger should be the parent like #page2 (in this case)
  }
})