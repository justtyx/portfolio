let header = document.querySelector('header')

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0)
})

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
  })