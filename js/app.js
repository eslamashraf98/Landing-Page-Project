// The Global Variables
const ul = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();


// Building The Nav Bar & Menu link using the available class
// Scroll to Anchor ID using scrollTO event 
// click on link to go to section smoothly
sections.forEach(function (section) {
    const idSection = section.id;
    const sectionTitle = section.getAttribute('data-nav');
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${idSection}`;
    link.classList = 'menu__link';
    link.textContent = sectionTitle;
    link.addEventListener('click', (eve) => {
        eve.preventDefault();
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
    li.appendChild(link);
    fragment.appendChild(li);
    ul.appendChild(fragment);
});
    


// Set sections as active
// Set link as active
window.addEventListener('scroll', function () {
    let maxTop = 270;
    let minTop = -270;
    for (const section of sections) {
        const navActive = ul.querySelector(`a[href="#${section.id}"]`);
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop >= minTop && sectionTop <= maxTop) {
            section.classList.add('your-active-class');
            navActive.classList.add('nav-active-class');
        } else {
            section.classList.remove('your-active-class');
            navActive.classList.remove('nav-active-class');
        }
    };
});