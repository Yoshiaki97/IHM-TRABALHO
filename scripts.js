
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

let prevScrollPos = window.pageYOffset;  // Posição do scroll anterior

window.onscroll = function() {
  var header = document.querySelector(".header");
  var headerFixed = document.querySelector(".header-fixed");
  var currentScrollPos = window.pageYOffset;  // Posição do scroll atual

  // Quando o scroll está para baixo, esconde o header original e mostra o novo header
  if (prevScrollPos < currentScrollPos) {
    headerFixed.style.transform = "translateY(0)";  // Mostra o novo header fixo
  } else if (currentScrollPos === 0) {
    // Quando a página está no topo, esconde o header fixo
    headerFixed.style.transform = "translateY(-100%)";  // Esconde o header fixo
  }

  prevScrollPos = currentScrollPos;  // Atualiza a posição anterior
};
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}