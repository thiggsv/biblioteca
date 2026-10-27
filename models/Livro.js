class Livro {
    #status;

    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.#status = "Disponível";
    }

    emprestar() {
        if (this.#status === "Disponível") {
            this.#status = "Emprestado";
            console.log(`${this.titulo} emprestado com sucesso!`);
        } else {
            console.log(`${this.titulo} está indisponível no momento!`);
        }
    }

    devolver() {
        this.#status = "Disponível";
        console.log(`${this.titulo} foi devolvido com sucesso!`);
    }

    exibirInfo() {
        return `${this.titulo} - ${this.autor} - ${this.ano} - ${this.#status}`;
    }
}

export default Livro;
