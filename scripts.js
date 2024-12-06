
function mudaCorFocus(obj){

    obj.style.color='black';
    obj.style.backgroundColor='white';
    obj.style.outline='none';
    obj.classList.add('focused');
}
function mudaCorBlur(obj){
    obj.style.color='white';
    obj.style.backgroundColor='#8f0101';
    obj.classList.remove('focused');
}

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var header = document.querySelector(".header");
  var headerFixed = document.querySelector(".header-fixed");
  var currentScrollPos = window.pageYOffset;


  if (prevScrollPos < currentScrollPos) {
    headerFixed.style.transform = "translateY(0)";
  } else if (currentScrollPos === 0) {
    headerFixed.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
};
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}