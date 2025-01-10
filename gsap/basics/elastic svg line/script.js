let path = "M 10 130 Q 500 10 780 130"
let finalPath = "M 10 130 Q 500 120 780 130"

let string = document.querySelector('#string')

string.addEventListener('mousemove', (dets) => {
  path = `M 10 130 Q ${dets.x} ${dets.y} 780 130`
  gsap.to("svg path", {
    attr : {d: path},
    duration: 0.3,
    ease: "power3.out"
  })
  // console.log(path)
})

string.addEventListener('mouseleave', () => {
  gsap.to("svg path", {
    attr : {d: finalPath},
    duration: 0.5,
    ease: "elastic.out(1,0.1)"
  })
  // console.log(finalPath)
})

