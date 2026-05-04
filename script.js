//header scroll behavior
const header = document.getElementById('main-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // التمرير للأسفل - إخفاء الهيدر
    header.classList.add('scroll-down');
    header.classList.remove('scroll-up');
  } else {
    // التمرير للأعلى - إظهار الهيدر
    header.classList.add('scroll-up');
    header.classList.remove('scroll-down');
  }
  
  // في حال كان المستخدم في أعلى الصفحة تماماً
  if (window.scrollY <= 0) {
    header.classList.remove('scroll-down', 'scroll-up');
  }
  
  lastScrollY = window.scrollY;
});






document.addEventListener("DOMContentLoaded", () => {
    
    const startCounter = (counterElement) => {
        const target = +counterElement.getAttribute('data-target');
        const duration = 2000; 
        const frameRate = 16; 
        const totalFrames = duration / frameRate;
        const increment = target / totalFrames;
        
        let currentCount = 0;
        
        const updateCounter = () => {
            currentCount += increment;
            if (currentCount < target) {
                counterElement.innerText = Math.ceil(currentCount);
                requestAnimationFrame(updateCounter);
            } else {
                counterElement.innerText = target; 
            }
        };
        
        updateCounter();
    };

    const observerOptions = {
        root: null,
        threshold: 0.1,  
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // تفعيل حركة الظهور (CSS)
                const animElements = entry.target.querySelectorAll('.hidden-anim');
                animElements.forEach(el => el.classList.add('show-anim'));
                
                // إذا كان العنصر نفسه يملك كلاس hidden-anim
                if(entry.target.classList.contains('hidden-anim')){
                    entry.target.classList.add('show-anim');
                }

                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    if (!counter.classList.contains('counted')) {
                        startCounter(counter);
                        counter.classList.add('counted');
                    }
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    const methodItems = document.querySelectorAll('.method-item');

    const displayImg = document.getElementById('method-display-img');
    const stepCounter = document.getElementById('step-counter');
    const stepTitle = document.getElementById('step-title');
    const stepProgress = document.getElementById('step-progress');
    const currentStepNum = document.getElementById('current-step-num');

    methodItems.forEach(item => {

        const button = item.querySelector('button');
        const content = item.querySelector('.method-content');

        button.addEventListener('click', () => {

            const isActive = item.classList.contains('active');

            // close all
            methodItems.forEach(i => {
                i.classList.remove('active');
                const c = i.querySelector('.method-content');
                if (c) c.style.maxHeight = null;
            });

            // open current
            if (!isActive) {
                item.classList.add('active');

                if (content) {
                    content.style.maxHeight = content.scrollHeight + "px";
                }

                const step = item.dataset.step;
                const img = item.dataset.img;
                const title = item.querySelector('h3')?.innerText || '';

                displayImg.src = img;
                stepCounter.innerText = step.padStart(2, '0');
                currentStepNum.innerText = step.padStart(2, '0');
                stepTitle.innerText = title;
                stepProgress.style.width = `${(step / 5) * 100}%`;
            }

        });

    });

});



















const btn = document.getElementById("scrollTopBtn");
const circle = document.getElementById("progressCircle");

const radius = 16;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    let progress = scrollTop / docHeight;

    if (progress > 1) progress = 1;
    if (progress < 0) progress = 0;

    const offset = circumference - (progress * circumference);
    circle.style.strokeDashoffset = offset;
});

btn.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});






document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.cert-section-trigger');
    const cards = document.querySelectorAll(".cert-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    if(section) observer.observe(section);

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.stopPropagation(); 
            
            const isZoomed = card.classList.contains("active-zoom");
            
            cards.forEach(c => c.classList.remove("active-zoom"));
            
            if (!isZoomed) {
                card.classList.add("active-zoom");
            }
        });
    });

    document.addEventListener("click", () => {
        cards.forEach(c => {
            c.classList.remove("active-zoom");
        });
    });
});