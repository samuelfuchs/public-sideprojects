// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div')
  flex.style.display = 'flex'
  flex.style.flexDirection = 'column'
  flex.style.rowGap = '1px'

  flex.appendChild(document.createElement('div'))
  flex.appendChild(document.createElement('div'))

  document.body.appendChild(flex)
  var isSupported = flex.scrollHeight === 1
  flex.parentNode.removeChild(flex)

  if (!isSupported) document.body.classList.add('no-flexbox-gap')
}
checkFlexGap()

// current year
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear

// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link')

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const href = link.getAttribute('href')

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({ behavior: 'smooth' })
    }

    // close mobile navigation
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open')
  })
})

// Sticky nav
const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]
    if (!ent.isIntersecting) {
      document.body.classList.add('sticky')
    }
    if (ent.isIntersecting) {
      document.body.classList.remove('sticky')
    }
  },
  {
    // null means inside the viewport
    root: null,
    // as soon as 0% enters the viewport this fires ob
    threshold: 0,
    rootMargin: '-80px',
  }
)
obs.observe(sectionHeroEl)
