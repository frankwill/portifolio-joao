class Secoes {
    constructor() {

    }

    calculaScroll() {
        //getBoundingClientRect()['y'] monitora a posição do eixo y do elemento section-dicas
        const posicao = document.querySelector('.about').getBoundingClientRect()['y'];

        if(posicao <= 154) {
            document.querySelector('.about').style.opacity = '100%';
        } else if (posicao >= 155) {
            document.querySelector('.about').style.opacity = '0%';
        }

    }
}

export { Secoes }