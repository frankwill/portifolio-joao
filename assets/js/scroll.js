class Secoes {
    constructor() {

    }

    calculaScroll() {
        //getBoundingClientRect()['y'] monitora a posição do eixo y do elemento section-dicas
        const posicao = document.querySelector('.about').getBoundingClientRect()['y'];

        console.log(posicao)

        if(posicao <= 60) {
            document.querySelector('.about').style.opacity = '100%';
        } else if (posicao >= 61) {
            document.querySelector('.about').style.opacity = '0%';
        }

    }
}

export { Secoes }