
// Accordion function with loop

const accordionList = document.querySelectorAll('.accordion-header');

accordionList.forEach(item => {
    item.onclick = (event) => {
        accordionList.forEach(itemNested => {
            if (itemNested !== event.target) {
                itemNested.nextElementSibling.classList.remove('active');
            } else {
                itemNested.nextElementSibling.classList.toggle('active');
            }
        });
        accordionList.forEach(item => {
            if (item !== event.target) {
                item.classList.remove('active');
            } else {
                item.classList.toggle('active');
            }
        });
    }
});

// Icon toggle function




//    accordionIcon.addEventListener("click", event => {
//        accordionIcon.classList.toggle("active");
 //   });
// });


// Sticky navbar function

const navbar = document.getElementById('navbar');
const navbarOffset = navbar.offsetTop;

window.onscroll = () => {
    if (navbarOffset >= window.pageYOffset) {
         navbar.classList.remove('sticky');
     } else {
         navbar.classList.add('sticky');
     }
 }