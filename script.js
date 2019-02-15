
/**Fixed navigation bar */
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
  if(window.scrollY >= topOfNav){
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

function changeIndex() {
  document.querySelector(".rotate_right").style.zIndex = "2";
}

window.addEventListener('scroll', fixNav);