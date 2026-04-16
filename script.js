document.addEventListener("DOMContentLoaded", () => {
    
    // 1. إعداد العدادات (Counters)
    const startCounter = (counterElement) => {
        const target = +counterElement.getAttribute('data-target');
        const duration = 2000; // مدة العداد (2 ثانية)
        const frameRate = 16; // تقريباً 60 إطار في الثانية
        const totalFrames = duration / frameRate;
        const increment = target / totalFrames;
        
        let currentCount = 0;
        
        const updateCounter = () => {
            currentCount += increment;
            if (currentCount < target) {
                counterElement.innerText = Math.ceil(currentCount);
                requestAnimationFrame(updateCounter);
            } else {
                counterElement.innerText = target; // التأكد من الوصول للرقم النهائي
            }
        };
        
        updateCounter();
    };

    // 2. إعداد مراقب العناصر (Intersection Observer)
    const observerOptions = {
        root: null,
        threshold: 0.1, // يبدأ الأنيميشن عندما يظهر 10% من العنصر
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

                // تشغيل العدادات الموجودة داخل القسم
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    // التأكد من تشغيل العداد مرة واحدة فقط
                    if (!counter.classList.contains('counted')) {
                        startCounter(counter);
                        counter.classList.add('counted');
                    }
                });

                // إيقاف المراقبة بعد ظهور العنصر لتخفيف الحمل
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // مراقبة الحاوية الرئيسية التي تحتوي على العناصر المراد تحريكها
    const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

});

//section 4
document.addEventListener('DOMContentLoaded', () => {
    const methodItems = document.querySelectorAll('.method-item');
    const displayImg = document.getElementById('method-display-img');
    const stepCounter = document.getElementById('step-counter');
    const stepTitle = document.getElementById('step-title');
    const stepProgress = document.getElementById('step-progress');
    const currentStepNum = document.getElementById('current-step-num');

    methodItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            methodItems.forEach(i => i.classList.remove('active'));
            
            // Add to clicked
            item.classList.add('active');

            // Update Image & Data
            const step = item.getAttribute('data-step');
            const imgSrc = item.getAttribute('data-img');
            const title = item.querySelector('h3').innerText;

            // Animate transition
            displayImg.style.opacity = '0.4';
            setTimeout(() => {
                displayImg.src = imgSrc;
                stepCounter.innerText = step.padStart(2, '0');
                currentStepNum.innerText = step.padStart(2, '0');
                stepTitle.innerText = title;
                stepProgress.style.width = `${(step / 5) * 100}%`;
                displayImg.style.opacity = '1';
            }, 500);
        });
    });
});
