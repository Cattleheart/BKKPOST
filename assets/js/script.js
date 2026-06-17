const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.querySelector('.nav-toggle');
const navElement = document.querySelector('.nav');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-link.active')?.classList.remove('active');
        this.classList.add('active');
        if (navElement?.classList.contains('open')) {
            navElement.classList.remove('open');
            navToggle?.setAttribute('aria-expanded', 'false');
        }
    });
});

navToggle?.addEventListener('click', () => {
    const isOpen = navElement?.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 767 && navElement?.classList.contains('open')) {
        navElement.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
    }
});

function Slideshow(wrapperSelector, intervalTime = 6000, axis = 'X') {
const wrapper = document.querySelector(wrapperSelector);
    if (!wrapper) return;

    const slider = wrapper.querySelector('.slider');
    const bullets = wrapper.querySelectorAll('.bullets > a');
    const prevBtn = wrapper.querySelector('.prev-btn');
    const nextBtn = wrapper.querySelector('.next-btn');
    const totalSlides = bullets.length;
    
    let currentSlideIndex = 0;
    let slideInterval;

    function goToSlide(index) {
        currentSlideIndex = index;
        const percentageShift = -100 * currentSlideIndex;
        
        // CHECK AXIS ENVIRONMENT DYNAMICALLY ON EVERY TICK
        // Matches the CSS Media Query configuration parameters
        const isMobile = window.innerWidth < 769; 
        const currentAxis = isMobile ? 'X' : axis.toUpperCase();
    
        slider.style.transform = `translate${currentAxis}(${percentageShift}%)`;

        bullets.forEach(b => b.classList.remove('active'));
        if (bullets[currentSlideIndex]) {
            bullets[currentSlideIndex].classList.add('active');
        }
    }

    function nextSlide() {
        let nextIndex = (currentSlideIndex + 1 >= totalSlides) ? 0 : currentSlideIndex + 1;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = (currentSlideIndex - 1 < 0) ? totalSlides - 1 : currentSlideIndex - 1;
        goToSlide(prevIndex);
    }

    function startAutoPlay() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    // Bind Button Click Interactions Safely
    bullets.forEach(bullet => {
        bullet.addEventListener('click', function(e) {
            e.preventDefault();
            const targetIndex = parseInt(this.getAttribute('data-index'));
            goToSlide(targetIndex);
            startAutoPlay();
        });
    });

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });

    // Window resize structural calculation update handler tracking routine
    window.addEventListener('resize', () => {
        goToSlide(currentSlideIndex); // Keeps slider aligned during screen rotations
    });

    startAutoPlay();
}

Slideshow('.hero-slider', 6000, 'X');
Slideshow('.content-slider', 6000, 'Y');