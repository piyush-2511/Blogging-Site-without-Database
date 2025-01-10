// function breakingtext(){
//   let splittedText = document.querySelector('h1').textContent.split("")
//   let h1 = document.querySelector('h1')
//   let clutter = ""
  
//   splittedText.forEach((e)=>{
//     if(e === " ") {
//       clutter += `<span>&nbsp;</span>`
//     } else {
//       clutter += `<span>${e}</span>`
//     }
//   })
  
//   h1.innerHTML = clutter
// }

// breakingtext()
// let tl = gsap.timeline()

// tl.from('span',{
//   y: 30,
//   opacity: 0,
//   duration: 0.8,
//   stagger: 0.15,
// })



function breakingtext(){
  let splittedText = document.querySelector('h1').textContent.split("")

  let halfIndex = Math.floor(splittedText.length / 2)
  let h1 = document.querySelector('h1')
  let clutter = ""
  
  splittedText.forEach((e,i)=>{
    if(e === " ") {
      clutter += `<span>&nbsp;</span>`
    } else if(i < halfIndex){
      clutter += `<span class='first'>${e}</span>`
    }else {
      clutter += `<span class='second'>${e}</span>`
    }
  })
  
  h1.innerHTML = clutter

}

breakingtext()

// let tl = gsap.timeline()

gsap.from('.first',{
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
})
gsap.from('.second',{
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: -0.15,
})
