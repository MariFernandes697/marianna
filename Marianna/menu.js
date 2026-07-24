// Seleciona os elementos do DOM
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

// Adiciona o evento de clique ao botão do menu
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

// Adiciona o evento de clique ao menu (para fechar)
menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Adiciona o evento de clique ao overlay (para fechar)
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});