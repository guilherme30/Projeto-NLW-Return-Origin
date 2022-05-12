
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll () {
    showNavOnScroll()
    showBackToTopBtnOnScroll()  
    activateMenuAtCurrentSection(home) 
    activateMenuAtCurrentSection(services) 
    activateMenuAtCurrentSection(about) 
    activateMenuAtCurrentSection(contacts) 
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')

    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }

}

function showNavOnScroll () {
    if (scrollY == 0) {
        navegacao.classList.remove('scroll')
    }
    else {
        navegacao.classList.add('scroll')
    }
}

function showBackToTopBtnOnScroll () {
    if (scrollY > 420) {
        backToTopBtn.classList.add('show')
    }
    else {
        backToTopBtn.classList.remove('show')
    }
}

function openMenu () {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img,
#home .estatisticas, 
#services, 
#services header, 
#services .card, 
#about, 
#about header, 
#about .content,
#about img`)