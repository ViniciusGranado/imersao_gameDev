class Personagem {
    constructor(imagem) {
        this.imagem = imagem;

        this.frame1 = 0;
        this.frame2 = 0;
    }

    exibe() {
        image(this.imagem, 0, height - alturaPersonagem, larguraPersonagem, alturaPersonagem, this.frame1, this.frame2, 220, 280);

        this.anima()
    }

    anima() {
        this.frame1 += 220;

        if (this.frame1 > 660) {
            this.frame1 = 0;
            this.frame2 += 270;
        }

        if (this.frame2 > 810) {
            this.frame1 = 0;
            this.frame2= 0;
        }
    }
}

