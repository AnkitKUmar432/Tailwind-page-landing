// const navDialog = document.getElementById('nav-dialog')
// function handleMenu() {
//     navDialog.classList.toggle('hidden')

// }
// const line1 = document.getElementById('line1')
// const line2 = document.getElementById('line2')
// const line3 = document.getElementById('line3')
// const initalTranslateLTR = -48 * 4;
// const initalTranslateRTL = 36 * 4;

// function changeDirectionofLineGroup(elment, isLTR, speed) {
//     const intersectionCallback = (entries) => {
//         const isIntersecting = entries[0].isIntersecting;
//         if (isIntersecting) {
//             document.addEventListener('scroll', scrollHandler);
//         } else {
//             document.removeEventListener('scroll', scrollHandler)
//         }
//     }

//     const intersectionObserver = new IntersectionObserver(intersectionCallback);
//     intersectionObserver.observe(elment);
//     function scrollHandler() {
//         const translatex = (window.innerHeight - Element.getBoundingClientReact().top) * speed;
//         let totalTranslate = 0;
//         if (isLTR) {
//             totalTranslate = translatex + initalTranslateLTR;

//         } else {
//             totalTranslate = -(translatex + initalTranslateRTL)
//         }
//         elment.style.transform = `translatex(${totalTranslate}px)`
//     }
// }

// changeDirectionofLineGroup(line1, true, 0.15)
// changeDirectionofLineGroup(line2, false, 0.15)
// changeDirectionofLineGroup(line3, true, 0.15)

const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
    navDialog.classList.toggle('hidden');
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

const initialTranslateLTR = -48 * 4;  // Corrected typo in the variable name
const initialTranslateRTL = 36 * 4;

function changeDirectionofLineGroup(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    };

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    function scrollHandler() {
        const rect = element.getBoundingClientRect();  // Correct method name
        const translateX = (window.innerHeight - rect.top) * speed;
        let totalTranslate = 0;

        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        // Apply the transformation
        element.style.transform = `translateX(${totalTranslate}px)`;  // Correct CSS property (uppercase X)
    }
}

// Applying the function to the elements
changeDirectionofLineGroup(line1, true, 0.15);
changeDirectionofLineGroup(line2, false, 0.15);
changeDirectionofLineGroup(line3, true, 0.15);
changeDirectionofLineGroup(line4, true, 0.8);

const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})