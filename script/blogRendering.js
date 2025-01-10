// Import blogs from the correct relative path
import { blogs } from '../blogs/blogs.js';

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
    <div class="blogCard">
      <img src="${blog.featuredImage}" alt="Blog featured image">
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
document.querySelector('.blogs').innerHTML = blogCardHTML;

// Add click event listeners to all blog cards
document.querySelectorAll('.blogCard').forEach((card, index) => {
  card.addEventListener('click', () => {
    window.location.href = `../blogHTML/${blogs[index].filename}`;
  });
});

// Optional: Add animation with GSAP
gsap.from('.blogCard', {
  duration: 0.8,
  opacity: 0,
  y: 50,
  // stagger: 0.2,
  ease: 'power2.out'
});
// Array of colors
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9B5DE5'];

// Function to get random color
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Usage
const randomColor = getRandomColor();





