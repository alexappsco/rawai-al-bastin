

document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // العناصر الأساسية
    // =========================
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');

    const openBtn = document.getElementById('openModalmobile');
    const closeBtn = document.getElementById('closeModal');

    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backToStep1');

    const nextToStep3 = document.getElementById('nextToStep3');
    const backToStep2 = document.getElementById('backToStep2');

    // =========================
    // محتوى الخطوات
    // =========================
    const step1Content = document.getElementById('step1Content');
    const step2Content = document.getElementById('step2Content');
    const step3Content = document.getElementById('step3Content');

    // =========================
    // عناصر الـ Stepper
    // =========================
    const step1Icon = document.getElementById('step1-icon');
    const step2Icon = document.getElementById('step2-icon');
    const step3Icon = document.getElementById('step3-icon');

    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');

    // =========================
    // ألوان النصوص للـ Stepper
    // =========================
    const ACTIVE_TEXT = 'text-[rgba(10,109,102,1)]';
    const INACTIVE_TEXT = 'text-[rgba(107,114,128,1)]';

    // =========================
    // تحديث ألوان النصوص حسب المرحلة
    // =========================
    function updateStepText(step) {

        const steps = [
            { el: step1Icon, index: 1 },
            { el: step2Icon, index: 2 },
            { el: step3Icon, index: 3 }
        ];

        steps.forEach(s => {

            const label = s.el?.nextElementSibling;

            if (!label) return;

            label.classList.remove(ACTIVE_TEXT, INACTIVE_TEXT);

            if (s.index === step) {
                label.classList.add(ACTIVE_TEXT);
            } else {
                label.classList.add(INACTIVE_TEXT);
            }

        });

    }

    // =========================
    // SVG الصح
    // =========================
    const checkIcon = `
        <svg xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">

            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M5 13l4 4L19 7"
            />
        </svg>
    `;

    // =========================
    // فتح المودال
    // =========================
    openBtn.addEventListener('click', () => {

        modalOverlay.classList.remove('hidden');
        modalOverlay.classList.add('flex');

        setTimeout(() => {
            modalContent.classList.replace('scale-95', 'scale-100');
            modalContent.classList.replace('opacity-0', 'opacity-100');
        }, 10);

        updateStepText(1);

    });

    // =========================
    // إغلاق المودال
    // =========================
    const closeModal = () => {

        modalContent.classList.replace('scale-100', 'scale-95');
        modalContent.classList.replace('opacity-100', 'opacity-0');

        setTimeout(() => {

            modalOverlay.classList.replace('flex', 'hidden');

            step1Content.classList.remove('hidden');
            step1Content.classList.add('block');

            step2Content.classList.add('hidden');
            step3Content.classList.add('hidden');

        }, 200);

    };

    closeBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // =========================
    // اختيار العناصر
    // =========================
    const setupSelectable = (selector) => {

        const elements = document.querySelectorAll(selector);

        elements.forEach(el => {

            el.addEventListener('click', () => {

                elements.forEach(btn => {

                    btn.classList.remove(
                        'border-[rgba(10,109,102,1)]',
                        'bg-[rgba(10,109,102,0.05)]'
                    );

                    btn.classList.add('border-gray-100');

                });

                el.classList.add(
                    'border-[rgba(10,109,102,1)]',
                    'bg-[rgba(10,109,102,0.05)]'
                );

                el.classList.remove('border-gray-100');

            });

        });

    };

    setupSelectable('.option-btn');
    setupSelectable('.business-btn');

    // =========================
    // Step 1 → Step 2
    // =========================
    nextBtn.addEventListener('click', () => {

        step1Content.classList.replace('block', 'hidden');
        step2Content.classList.remove('hidden');

        line1.classList.replace(
            'bg-gray-200',
            'bg-[rgba(179,210,52,1)]'
        );

        step1Icon.classList.remove('bg-[rgba(10,109,102,1)]');

        step1Icon.classList.add(
            'bg-[rgba(179,210,52,1)]',
            'border-[rgba(179,210,52,1)]'
        );

        step1Icon.innerHTML = checkIcon;

        step2Icon.classList.remove(
            'bg-[rgba(230,244,244,1)]',
            'text-gray-400',
            'border-gray-200'
        );

        step2Icon.classList.add(
            'bg-[rgba(10,109,102,1)]',
            'text-white',
            'border-[rgba(10,109,102,1)]'
        );

        step2Icon.innerHTML = `
            <span class="text-lg">
                <img width="20" height="20" src="imgs/filewhite.svg" alt="">
            </span>
        `;

        updateStepText(2);

    });

    // =========================
    // Step 2 → Step 1
    // =========================
    if (backBtn) {

        backBtn.addEventListener('click', () => {

            step2Content.classList.add('hidden');
            step1Content.classList.replace('hidden', 'block');

            line1.classList.replace(
                'bg-[rgba(179,210,52,1)]',
                'bg-gray-200'
            );

            step1Icon.classList.remove(
                'bg-[rgba(179,210,52,1)]',
                'border-[rgba(179,210,52,1)]'
            );

            step1Icon.classList.add(
                'bg-[rgba(10,109,102,1)]',
                'border-[rgba(10,109,102,1)]'
            );

            step1Icon.innerHTML = `
                <span class="text-lg">
                    <img width="20" height="20" src="/imgs/company-white.svg" alt="">
                </span>
            `;

            step2Icon.classList.remove(
                'bg-[rgba(10,109,102,1)]',
                'text-white',
                'border-[rgba(10,109,102,1)]'
            );

            step2Icon.classList.add(
                'bg-[rgba(230,244,244,1)]',
                'text-gray-400',
                'border-gray-200'
            );

            step2Icon.innerHTML = `
                <span class="text-lg">
                    <img width="20" height="20" src="imgs/file.svg" alt="">
                </span>
            `;

            updateStepText(1);

        });

    }

    // =========================
    // Step 2 → Step 3
    // =========================
    nextToStep3.addEventListener('click', () => {

        step2Content.classList.add('hidden');
        step3Content.classList.remove('hidden');

        line2.classList.replace(
            'bg-gray-200',
            'bg-[rgba(179,210,52,1)]'
        );

        step2Icon.classList.remove('bg-[rgba(10,109,102,1)]');

        step2Icon.classList.add(
            'bg-[rgba(179,210,52,1)]',
            'border-[rgba(179,210,52,1)]'
        );

        step2Icon.innerHTML = checkIcon;

        step3Icon.classList.remove(
            'bg-[rgba(230,244,244,1)]',
            'text-gray-400',
            'border-gray-200'
        );

        step3Icon.classList.add(
            'bg-[rgba(10,109,102,1)]',
            'text-white',
            'border-[rgba(10,109,102,1)]'
        );

        step3Icon.innerHTML = `
            <span class="text-lg">
                <img width="20" height="20" src="imgs/personwhite.svg" alt="">
            </span>
        `;

        updateStepText(3);

    });

    // =========================
    // Step 3 → Step 2
    // =========================
    backToStep2.addEventListener('click', () => {

        step3Content.classList.add('hidden');
        step2Content.classList.remove('hidden');

        line2.classList.replace(
            'bg-[rgba(179,210,52,1)]',
            'bg-gray-200'
        );

        step2Icon.classList.remove(
            'bg-[rgba(179,210,52,1)]'
        );

        step2Icon.classList.add(
            'bg-[rgba(10,109,102,1)]',
            'text-white',
            'border-[rgba(10,109,102,1)]'
        );

        step2Icon.innerHTML = `
            <span class="text-lg">
                <img width="20" height="20" src="imgs/filewhite.svg" alt="">
            </span>
        `;

        step3Icon.classList.remove(
            'bg-[rgba(10,109,102,1)]',
            'text-white',
            'border-[rgba(10,109,102,1)]'
        );

        step3Icon.classList.add(
            'bg-[rgba(230,244,244,1)]',
            'text-gray-400',
            'border-gray-200'
        );

        step3Icon.innerHTML = `
            <span class="text-lg">
                <img width="20" height="20" src="imgs/person.svg" alt="">
            </span>
        `;

        updateStepText(2);

    });

    // =========================
    // النجاح
    // =========================
    const formModalOverlay = document.getElementById('modalOverlay');
    const successModalOverlay = document.getElementById('successModalOverlay');
    const successModalContent = document.getElementById('successModalContent');

    function openSuccessModal() {

        formModalOverlay.classList.add('hidden');
        formModalOverlay.classList.remove('flex');

        successModalOverlay.classList.remove('hidden');
        successModalOverlay.classList.add('flex');

        setTimeout(() => {

            successModalContent.classList.remove('scale-95', 'opacity-0');
            successModalContent.classList.add('scale-100', 'opacity-100');

        }, 10);

    }

    function closeSuccessModal() {

        successModalOverlay.classList.add('hidden');
        successModalOverlay.classList.remove('flex');

    }

    const finalSubmitBtn = document.querySelector('#step3Content button[type="submit"]');

    if (finalSubmitBtn) {

        finalSubmitBtn.addEventListener('click', (e) => {

            e.preventDefault();
            openSuccessModal();

        });

    }

});