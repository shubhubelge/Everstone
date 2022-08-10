/**
   * Easy selector helper function
   */
 const select = (el, all = false) => {
  console.log("in el")
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
/**
 * Easy on scroll event listener 
 */
 const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener);
  console.log("scroll")
}
/**
 * Navbar links active state on scroll
 */
let navbarlinks = select('#top-menu .link', true)
const navbarlinksActive = () => {
 let position = window.scrollY + 200;
 console.log(position-100)
 navbarlinks.forEach(navbarlink => {
  //  console.log(navbarlink)
   if (!navbarlink.hash) return
   let section = select(navbarlink.hash)
  //  console.log(section)
   if (!section) return
   if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
     navbarlink.classList.add('active-link')
   } else {
     navbarlink.classList.remove('active-link')
   }
 })
}
const scrollto = (el) => {
let header = select('.about-page-nav');
console.log(header)
if(header == null) return
let offset = header.offsetHeight

let elementPos = select(el).offsetTop;
console.log(elementPos)
console.log(offset)
window.scrollTo({
  top: elementPos - offset,
  behavior: 'smooth'
})
}
window.addEventListener('load', () => {
if (window.location.hash) {
  if (select(window.location.hash)) {
    scrollto(window.location.hash)
  }
}
});


$('#top-menu').on('click', '.link', function(e) {
  if (select(this.hash)) {
    e.preventDefault()
    // console.log("click")
    // let navbar = select('#navbar')
    // if (navbar.classList.contains('navbar-mobile')) {
    //   navbar.classList.remove('navbar-mobile')
    //   let navbarToggle = select('.mobile-nav-toggle')
    //   navbarToggle.classList.toggle('bi-list')
    //   navbarToggle.classList.toggle('bi-x')
    // }
    scrollto(this.hash)
  }
  })
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)