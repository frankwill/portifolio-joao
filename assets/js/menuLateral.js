const botao = document.querySelector('.header__menu')
const menuLateral = document.querySelector('.mobile__menu')

botao.addEventListener('click', () => {
    menuLateral.classList.toggle('open')
    botao.classList.toggle('header__menu--open')
})

