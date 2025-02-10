
const sobreMim = document.getElementById('sobre-mim')
const title = document.getElementById('title-sobre-mim')
const p1 = document.getElementById('p1-sobre-mim')
const p2 = document.getElementById('p2-sobre-mim')
const p3 = document.getElementById('p3-sobre-mim')
const p4 = document.getElementById('p4-sobre-mim')
const p5 = document.getElementById('p5-sobre-mim')
const capa = document.getElementById('capa')
const linkPf = document.getElementById('linkPf')

window.addEventListener('scroll', function() {

  const valueCapaTop = capa ? capa.offsetTop : 0;
  const valueWindowPf = window.scrollY;
  const valueWindow = window.scrollY + (window.innerHeight / 2);
  const valueSobreMimTop = sobreMim ? sobreMim.offsetTop : 0;

  if (linkPf) {
    if (valueWindowPf > valueCapaTop) {
        linkPf.classList.remove('d-none');
    } else {
        linkPf.classList.add('d-none');
    }
  }
    if (valueWindow < valueSobreMimTop) {

      title.classList.remove('opct-z-t-o')
      title.classList.add('opct-reverse')
      setTimeout(function() {
        title.style.opacity = 0
      }, 4500)

      p1.classList.remove('r-t-l')
      p1.classList.add('r-t-l-reverse')
      setTimeout(function() {
        p1.style.opacity = 0
      }, 2500)

      p2.classList.remove('l-t-r')
      p2.classList.add('l-t-r-reverse')
      setTimeout(function() {
        p2.style.opacity = 0
      }, 2500)

      p3.classList.remove('r-t-l')
      p3.classList.add('r-t-l-reverse')
      setTimeout(function() {
        p3.style.opacity = 0
      }, 2500)

      p4.classList.remove('l-t-r')
      p4.classList.add('l-t-r-reverse')
      setTimeout(function() {
        p4.style.opacity = 0
      }, 2500)

      p5.classList.remove('r-t-l')
      p5.classList.add('r-t-l-reverse')
      setTimeout(function() {
        p5.style.opacity = 0
      }, 2500)
    }
    else {

      title.classList.remove('opct-reverse')
      title.classList.add('opct-z-t-o')
      setTimeout(function() {
        title.style.opacity = 1
      }, 4500)

      p1.classList.remove('r-t-l-reverse')
      p1.classList.add('r-t-l')
      setTimeout(function() {
        p1.style.opacity = 1
      }, 2500)

      p2.classList.remove('l-t-r-reverse')
      p2.classList.add('l-t-r')
      setTimeout(function() {
        p2.style.opacity = 1
      }, 2500)

      p3.classList.remove('r-t-l-reverse')
      p3.classList.add('r-t-l')
      setTimeout(function() {
        p3.style.opacity = 1
      }, 2500)

      p4.classList.remove('l-t-r-reverse')
      p4.classList.add('l-t-r')
      setTimeout(function() {
        p4.style.opacity = 1
      }, 2500)

      p5.classList.remove('r-t-l-reverse')
      p5.classList.add('r-t-l')
      setTimeout(function() {
        p5.style.opacity = 1
      }, 2500)
    }
})
