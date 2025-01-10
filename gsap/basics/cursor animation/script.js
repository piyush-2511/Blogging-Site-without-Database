let main = document.querySelector('.main')
let cursor = document.querySelector('.cursor')
let image = document.querySelector('#image')

main.addEventListener('mousemove', (e) => {
  gsap.to(cursor,{
    x : e.x,
    y: e.y,
    duration: 1,
    ease: "back.out(1.7)"
  })
})

image.addEventListener('mouseenter', (event)=>{
  cursor.innerHTML = 'View More'
  gsap.to(cursor,{
    scale : 3
  })
})
image.addEventListener('mouseleave', (event)=>{
  cursor.innerHTML = ''
  gsap.to(cursor,{
    scale : 1
  })
})