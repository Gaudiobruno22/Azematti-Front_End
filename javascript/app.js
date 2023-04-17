var botaoAltera = document.querySelector('.js-botaoMenu');

botaoAltera.onclick = function(){
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--exibindo')
}