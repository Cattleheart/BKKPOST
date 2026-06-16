// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-link.active')?.classList.remove('active');
        this.classList.add('active');
    });
});

const slideIntervalTime = 6000; // 6 seconds
let currentSlideIndex = 0;
let slideInterval;

const slider = document.querySelector('.hero-section .slider');
const bullets = document.querySelectorAll('.hero-section .bullets > a');
const totalSlides = bullets.length;

// Function to update slide position and bullet visual states
function goToSlide(index) {
    currentSlideIndex = index;
    
    // Calculate the percentage shift (Index 1 = -100%)
    const percentageShift = -100 * currentSlideIndex;
    slider.style.transform = `translateX(${percentageShift}%)`;
    
    // Update active class on bullets
    bullets.forEach(bullet => bullet.classList.remove('active'));
    bullets[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    let nextIndex = currentSlideIndex + 1;
    if (nextIndex >= totalSlides) {
        nextIndex = 0; // Loop back
    }
    goToSlide(nextIndex);
}

// Function to start/reset the auto-play timer
function startAutoPlay() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideIntervalTime);
}

bullets.forEach(bullet => {
    bullet.addEventListener('click', function(e) {
        e.preventDefault(); // Stop the page from jumping up due to '#' href
        const targetIndex = parseInt(this.getAttribute('data-index'));

        goToSlide(targetIndex);
        startAutoPlay();
    });
});

startAutoPlay();