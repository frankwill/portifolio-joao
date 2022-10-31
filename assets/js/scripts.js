import { Secoes } from './scroll.js'

window.onload = () => {
    const animaSecao = new Secoes()
    document.addEventListener('scroll', animaSecao.calculaScroll)
}
