// importa a biblioteca do react, faz funcionar os componentes e blablabla
import React from "react"; 

// pega os componentes header e cardcontainer da pasta components
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import LivroCard from "./components/LivroCard";

// importa o css
import "./ObrasLivros.css";

// função principal
function App() {

  // estrutura visual | interface 
  return (
    <>
      {/* chama esse componente */}
      <Header />

      {/* area principal da pagina */}
      <main>
        <h1 className="titulo-pagina">LIVROS</h1>
        <section id="sec-destaques">
          <h2>Destaques</h2>
          <CardContainer />
          <div className="pesquisa-container">
            <p className="texto-pesquisa">
              Pesquise uma obra para avaliar <br /> ou ver as avaliações feitas!
            </p>

            <div className="linha"></div>

            <div className="campo-pesquisa">
              <input
                type="text"
                placeholder="Pesquisar"
                className="input-pesquisa"
              />
              <button className="botao-pesquisa">
                <span className="material-icons">search</span>
              </button>
            </div>
          </div>
          <div className="banner-cadastro">

              <div className="banner-textos">
                <p className="banner-frase">
                  Sentiu falta de alguma obra? <br />
                  Cadastre ela no nosso sistema!
                </p>

                <button className="banner-botao">Cadastrar uma nova obra!</button>
              </div>
          </div>
          <div className="filtros-container">
              <select className="filtro-select">
                <option>Filtro 1</option>
              </select>

              <select className="filtro-select">
                <option>Filtro 2</option>
              </select>

              <select className="filtro-select">
                <option>Filtro 3</option>
              </select>
          </div>
          <LivroCard
            capa="https://m.media-amazon.com/images/I/81m1s4wIPML.jpg"
            titulo="Harry Potter e o Prisioneiro de Azkaban"
            estrelas={4}
            autor="J. K. Rowling"
            editora="Rocco (no Brasil)"
            ano={1999}
            anoBrasil={2000}
          />
        </section>
      </main>
    </>
  );
}

export default App;