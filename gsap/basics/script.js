// gsap.to("#box1", {
//   x : 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   scale:0.5
// }) 
// gsap.from("#box2", {
//   x : 1000,
//   duration: 3,
//   delay: 1,
// }) 

// gsap.from("h1",{
//   opacity: 0,
//   duration: 1,
//   y:30,
//   delay: 1,
//   stagger:0.3//one by one animation and 1 is duration
// }) 


// gsap.to("#box",{
//   x : 1200,
//   duration: 1,
//   delay:1,
//   rotate:360,
//   repeat:-1,//for infinite loop
//   yoyo:true//for reverse animation
// })



//Timeline
// gsap.to("#box1",{
//   x:1000,
//   rotate: 360,
//   duration: 1.5,
//   delay:1
// })
// gsap.to("#box2",{
//   x:1000,
//   backgroundColor: "yellow",
//   duration: 1.5,
//   delay:2.5
// })
// gsap.to("#box3",{
//   x:1000,
//   scale: 0.5,
//   duration: 1.5,
//   delay:4
// })

// let tl = gsap.timeline(); //timeline make the animation in sequence
// tl.to("#box1",{
//   x:1000,
//   rotate:360,
//   duration: 1.5,
//   delay:1
// })
// //delay is not required in rest of the animation
// tl.to("#box2",{
//   x:1000,
//   rotate:360,
//   duration: 1.5,
// })
// tl.to("#box3",{
//   x:1000,
//   rotate:360,
//   duration: 1.5,
// })



let tl = gsap.timeline()
tl.from("h2",{
  y: -20,
  opacity:0,
  duration: .7,
  delay: 0.5
})
tl.from("h4",{
  y: -20,
  opacity:0,
  duration: .7,
  stagger:0.3
})
tl.from("h1",{
  y:20,
  opacity:0,
  duration: .5,
  scale:0.2
})