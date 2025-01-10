let tl = gsap.timeline()
let full = document.querySelector('#full')
let menu = document.querySelector('#nav i')
let cross = document.querySelector('#full i')

tl.to(full, {
  right: 0,
  duration:0.6
})
tl.from("#full h4", {
  x : 150,
  opacity: 0,
  duration: 1,
  stagger : 0.25
})
tl.from("#full i",{
  opacity: 0
})

tl.pause()

menu.addEventListener('click', (e) => {
  tl.play()
})

cross.addEventListener('click', (e) => {
  tl.reverse()
})



