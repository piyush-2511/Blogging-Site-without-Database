// Cursor 
let main = document.querySelector('main')
let cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (e) => {
  console.log(9)
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out(1.7)"
  })
})


// Navigations Animation


function NavigationAnimation() {
  let tl = gsap.timeline()

  tl.from(".logo, .social", {
    // y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 1
  })
  tl.from(".menu li", {
    y: -30,
    opacity: 0,
    delay: 0.2,
    duration: 0.4,
    stagger: 0.18
  })
}

NavigationAnimation()


// Carousel Animation 
let buttons = document.querySelectorAll('[data-carousel-button]')
let slides = document.querySelector('[data-slides]')

function applyScalingAnimation(slide) {
  // First reset the scale
  gsap.set(slide, {
    scale: 1
  });
  
  // Then apply the scaling animation
  gsap.to(slide, {
    scale: 1.5,
    duration: 10, // Slightly less than autoSlide interval to ensure completion
    ease: "none",
    onComplete: () => {
      // Optional: you can add any cleanup or additional actions here
    }
  });
}

function slideChange(offset) {
  let activeSlide = document.querySelector('[data-active]')
  let slidesArray = [...slides.children]
  let newIndex = slidesArray.indexOf(activeSlide) + offset

  if (newIndex < 0) newIndex = slidesArray.length - 1;
  if (newIndex >= slidesArray.length) newIndex = 0;

  // Kill any ongoing animations on all slides
  slidesArray.forEach(slide => {
    slide.removeAttribute('data-active')
    gsap.killTweensOf(slide);
    // Reset scale for all slides
  });

  let newSlide = slidesArray[newIndex];
  newSlide.setAttribute('data-active', 'true');
  
  // Start new scaling animation
  applyScalingAnimation(newSlide);
}

let autoSliding;
function autoSlidingOn() {
  autoSliding = setInterval(() => {
    slideChange(1)
  }, 5000) // 5 seconds interval
}

function autoSlidingOff() {
  clearInterval(autoSliding)
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    slideChange(offset)
    autoSlidingOff()
    autoSlidingOn()
  })
})
// Start autosliding and apply initial animation to first slide
autoSlidingOn()
applyScalingAnimation(document.querySelector('[data-active]'))





// Recent Blogs 
// import { blogs } from '../blogs/blogs.js';

// Function to get first 10-15 words from content
const truncateContent = (content, minWords = 10, maxWords = 15) => {
  const words = content.split(' ');
  const wordCount = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
  return words.slice(0, wordCount).join(' ') + '...';
};

const truncateTitle = (content, minWords = 3, maxWords = 8) => {
  const words = content.split(' ');
  const wordCount = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
  return words.slice(0, wordCount).join(' ') + '...';
};





const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  // Optional: Toggle icon between menu and close
  const icon = mobileMenuIcon.querySelector('i');
  icon.classList.toggle('ri-menu-3-fill');
  icon.classList.toggle('ri-close-fill');
});

// Close menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    const icon = mobileMenuIcon.querySelector('i');
    icon.classList.add('ri-menu-3-fill');
    icon.classList.remove('ri-close-fill');
  });
});