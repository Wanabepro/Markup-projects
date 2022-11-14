document.querySelector('.Header-MobileNav').addEventListener('click', () => {
    document.querySelector('.Header').classList.toggle('NavOpen')
    document.body.classList.toggle('MenuOpen')
})

document.querySelectorAll('.Header-NavLink').forEach(link => {
    link.addEventListener('click', () => {
        const header = document.querySelector('.Header')

        if (header.classList.contains('NavOpen')) {
            header.classList.toggle('NavOpen')
            document.body.classList.toggle('MenuOpen')
        }
    })
})



const observer = new IntersectionObserver(function (entries) {
    const entry = entries[0]

    entry.isIntersecting
        ? document.body.classList.remove('Sticky')
        : document.body.classList.add('Sticky')
},
    {
        root: null,
        treshold: 0,
        rootMargin: '-80px'
    })
const HeroSection = document.querySelector('.HeroSection')

observer.observe(HeroSection)