function pageAnimation1(){
  let tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button",{
  y : -10,
  opacity : 0,
  delay: 0.3,
  duration: 0.7,
  stagger: 0.09
})

tl.from(".center-part1 h1",{
  x:-300,
  opacity:0,
  duration: 0.7
})
tl.from(".center-part1 p",{
  x:-100,
  opacity:0,
  duration: 0.7
})
tl.from(".center-part1 button",{
  opacity:0,
  duration: 0.7
})
tl.from(".center-part2 img",{
  x:200,
  opacity:0,
  duration: 0.7
},"-=2")

tl.from(".brand-carousel img",{
  y:30,
  opacity:0,
  duration: 0.7,
  stagger:0.1
})

}

pageAnimation1()

let tl = gsap.timeline({
  scrollTrigger : {
    trigger : ".page2",
    scroller:"body",
    // markers: true,
    start : "top 50%",
    end : "top 0",
    scrub: 2
  }
})

tl.from(".services",{
  x:-300,
  opacity:0,
  duration: 0.7,
})

tl.from(".elem.line1.left",{
  x:-300,
  opacity:0,
  duration: 0.7,
}, "piyush")
tl.from(".elem.line1.right",{
  x:300,
  opacity:0,
  duration: 0.7,
}, "piyush")
tl.from(".elem.line2.left",{
  x:-300,
  opacity:0,
  duration: 0.7,
})
tl.from(".elem.line2.right",{
  x:300,
  opacity:0,
  duration: 0.7,
})
// tl.from(".right",{
//   x:300,
//   opacity:0,
//   duration: 0.7,
// })