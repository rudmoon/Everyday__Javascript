const gotoTop = document.querySelector('.button');
const docHeight = document.documentElement.offsetHeight;

window.addEventListener('scroll', () => {
    if(window.scrollY>(docHeight/4)) {
        gotoTop.classList.add('active');
    } else {
        gotoTop.classList.remove('active');
    }
    
})

gotoTop.addEventListener('click', () => {
    window.scrollTo({
        top :0,
        left: 0,
        behavior: 'smooth',
    })
})