import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";
import LivroEspecial from "./models/LivroEspecial.js";

const minhaBiblioteca = new Biblioteca("GT Bezerra Tarde");

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1989);
const livro2 = new Livro("O amanhecer na Colheita", "Suzanne Collins", 2025);
const livro3 = new Livro("Jantar Secreto", "Raphael Montes", 2016);
const livro4 = new LivroEspecial("Verity", "Colleen Hoover", 2018, "Thriller psicologico");

minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.adicionarLivro(livro4);

livro1.emprestar();
livro2.emprestar();
livro3.devolver();

minhaBiblioteca.listarLivros();
