import Livro from "./Livro.js";

class LivroEspecial extends Livro {
    constructor(titulo, autor, ano, categoria) {
    super(titulo, autor, ano, categoria)
    this.categoria = categoria;
    }

    exibirInfo() {
        return `${this.categoria.toUpperCase()} ${super.exibirInfo()}`;
    }
}

export default LivroEspecial;