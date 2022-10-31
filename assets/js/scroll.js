class Secoes {
    constructor() {

    }

    calculaScroll() {
        //getBoundingClientRect()['y'] monitora a posição do eixo y do elemento section-dicas
        const posicao = document.querySelector('.about').getBoundingClientRect()['y'];

        console.log(posicao)

        if(posicao <= 154) {
            document.querySelector('.about').style.opacity = '100%';
        } else if (posicao >= 155) {
            document.querySelector('.about').style.opacity = '0%';
        }

        if(posicao <= (-158)) {
            document.querySelector('.experience').style.opacity = '100%';
        } else if (posicao >= (-157)) {
            document.querySelector('.experience').style.opacity = '0%';
        }

        if(posicao <= (-442)) {
            document.querySelector('.projects').style.opacity = '100%';
        } else if (posicao >= (-441)) {
            document.querySelector('.projects').style.opacity = '0%';
        }

    }
}

export { Secoes }