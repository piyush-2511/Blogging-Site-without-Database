import {blogs} from '../blogs-list/blogs.js'
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

const url = new URL(window.location.href);
const blogId = Number(url.searchParams.get('blogId'));
console.log('blogId from URL:', blogId);

let clickedBlog;
blogs.forEach(blog => {
  console.log(typeof blog.blogId)
  console.log(typeof blogId)
  
  if (blog.blogId === blogId) {
    // console.log('Match found!');
    clickedBlog = blog;
  }
});

console.log(clickedBlog)
// Generate HTML only if blog is found
if (clickedBlog) {
  const blogBodyHTML = `
    <section class="featured-image">
      <div class="image-container">
        <h1>BLOGS</h1>
        <img src="../assets/featuredImage/${clickedBlog.featuredImage}" alt="">
      </div>
    </section>
    
    <section class="title">
      <div class="title-container">
        <h1>${clickedBlog.title}</h1>
      </div>
    </section>
    
    <section class="body">
      <div class="container">
        ${clickedBlog.content}
      </div>
    </section>
  `;
  
  document.querySelector('.blog-body').innerHTML = blogBodyHTML;
} else {
  // Handle case when blog is not found
  document.querySelector('.blog-body').innerHTML = `
    <section class="error">
      <div class="container">
        <h1>Blog not found</h1>
        <p>The requested blog could not be found.</p>
      </div>
    </section>
  `;
}