window.addEventListener('wheel', (e)=>{
  if (e.deltaY > 0) {
    console.log('scroll down', e.deltaY);
    
    gsap.to(".marque", {
      transform : 'translateX(-200%)',
      duration: 2,
      repeat: -1,
      ease: 'none'
    })

    gsap.to('.marque img', {
      rotate : 180
    }) 
  } else {
    gsap.to(".marque", {
      transform : 'translateX(0%)',
      duration: 2,
      repeat: -1,
      ease: 'none'
    })
    gsap.to('.marque img', {
      rotate : 0
    }) 
    console.log('scroll up');
  }
})