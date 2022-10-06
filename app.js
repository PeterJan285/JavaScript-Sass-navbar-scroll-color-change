
// hamburger menu
const toggleBtn = document.getElementsByClassName('navbar__toggle__btn')[0]
const navbarLinks = document.getElementsByClassName('navbar__links')[0]

toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


// nav changing colors when scrolling
const nav = document.querySelector('.navbar')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    }   else {
        nav.classList.remove('active')
    }
}

// reduce or increase the number '150' 
// to modify when the nav changes color 

