import { blogs } from '../blogs-list/blogs.js';

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




console.log(blogs)
// Recent Blogs 
// Import blogs from the correct relative path
// import { blogs } from '../blogs/blogs.js';

// Function to get first 10-15 words from content
const truncateContent = (content, minWords = 10, maxWords = 15) => {
  const words = content.split(' ');
  // Get a random number between minWords and maxWords
  const wordCount = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
  return words.slice(0, wordCount).join(' ') + '...';
};
const truncateTitle = (content, minWords = 3, maxWords = 8) => {
  const words = content.split(' ');
  // Get a random number between minWords and maxWords
  const wordCount = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
  return words.slice(0, wordCount).join(' ') + '...';
};

// Create blog cards HTML
let blogCardHTML = '';
blogs.forEach((blog) => {
  blogCardHTML += `
    <div class="blogCard" data-blog-id=${blog.blogId}>
      <img src="./assets/featuredImage/${blog.featuredImage}" alt="Blog featured image">
      <div class = "blogText">
        <div class="categories">${blog.categories}</div>
        <div class="blogTitle">${truncateTitle(blog.title)}</div>
        <span>By Priyanshu</span>
        <div class="blogDesc">${truncateContent(blog.content)}</div>
      </div>
    </div>
  `;


});

// Insert the blog cards into the DOM
document.querySelector('.blog-card-container').innerHTML = blogCardHTML;

// Add click event listeners to all blog cards
document.querySelectorAll('.blogCard').forEach((card, index) => {
  const blogId = card.getAttribute('data-blog-id');  // Alternative way to get dataset
  // or use: const blogId = card.dataset.blogId;
  console.log('Blog ID:', blogId);
    // Added string for clarity in console
  card.addEventListener('click', ()=>{
    window.location.href = `../blog/blog-page.html?blogId=${blogId}`;
  })
  
  // Add your click handler logic here
});

// Optional: Add animation with GSAP
gsap.from('.blogCard', {
  duration: 0.8,
  opacity: 0,
  y: 50,
  // stagger: 0.2, // Re-enabled stagger for better visual effect
  ease: 'power2.out'
});



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