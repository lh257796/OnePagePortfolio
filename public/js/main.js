
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*============== NAVBAR ==================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    const navLink = document.querySelectorAll('.nav__link')

    function linkAction() {
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SKILLS ===============*/
let skillsContent = document.getElementsByClassName('skills__content')
    let skillsHeader = document.querySelectorAll('.skills__header')


    function toggleSkills() {

        let itemClass = this.parentNode.className

        for (i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close'
        }
        if (itemClass === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open'
        }

    }

    skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))

/*=============== EXPERIENCE ==================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
                tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
        })
    })


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== CONTACT FORM SUBMITION ===============*/

//deprecated

// const contactForm = document.querySelector('.contact__form')

// let fullname = document.getElementById('fullname')
// let email = document.getElementById('email')
// let subject = document.getElementById('subject')
// let message = document.getElementById('message')

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let formData = {
//         fullname: fullname.value,
//         email: email.value,
//         subject: subject.value,
//         message: message.value
//     }

//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://lh257796.github.io/');
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.onload = function(){
//         console.log(xhr.responseText)
//         if (xhr.responseText == 'success') {
//             alert('Email sent');
//             fullname.value = ''
//             email.value = ''
//             subject.value = ''
//             message.value = ''
//         } else {
//             alert('This feature is currently in dev. Please use the contact info on the left!')
//         }
//     }

//     xhr.send(JSON.stringify(formData));

// });


const contactForm = document.querySelector('.contact__form')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Email sent');
            fullname.value = ''
            email.value = ''
            subject.value = ''
            message.value = ''
        } else {
            alert('Error sending email');
        }
    });
});



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`)
sr.reveal(`.home__socials, .home__scroll`, {origin: 'bottom'})
