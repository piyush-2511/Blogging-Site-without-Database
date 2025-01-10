import { blogs } from '../blogs/blogs.js';

// Cursor 
let main = document.querySelector('main')
let cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (e) => {
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

// Get the last 3 blogs
const recentBlogs = blogs.slice(-3).reverse(); // Get last 3 blogs and reverse to show newest first

// Create blog cards HTML
let blogCardHTML = recentBlogs.map(blog => `
  <div class="blogCard">
      <img src="${blog.featuredImage}" alt="Blog featured image">
      <div class = "blogText">
        <div class="categories">${blog.categories}</div>
        <div class="blogTitle">${truncateTitle(blog.title)}</div>
        <span>By Priyanshu</span>
        <div class="blogDesc">${truncateContent(blog.content)}</div>
      </div>
    </div>
`).join('');

// Insert the blog cards into the DOM
document.querySelector('.blog-card-container').innerHTML = blogCardHTML;

// Add click event listeners to all blog cards
document.querySelectorAll('.blogCard').forEach((card, index) => {
  card.addEventListener('click', () => {
    // Use recentBlogs array instead of blogs for correct indexing
    window.location.href = `../blogHTML/${recentBlogs[index].filename}`;
  });
});

// Optional: Add animation with GSAP
gsap.from('.blogCard', {
  duration: 0.8,
  opacity: 0,
  y: 50,
  // stagger: 0.2, // Re-enabled stagger for better visual effect
  ease: 'power2.out'
});