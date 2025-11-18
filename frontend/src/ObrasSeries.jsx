// importa a biblioteca do react, faz funcionar os componentes e blablabla
import React from "react"; 
import { Link } from "react-router-dom";

// pega os componentes header e cardcontainer da pasta components
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import SerieCard from "./components/SerieCard";
import Footer from "./components/Footer";

// importa o css
import "./ObrasLivros.css";

// função principal
function ObrasSeries() {

  // estrutura visual | interface 
  return (
    <>
      {/* chama esse componente */}
      <Header />

      {/* area principal da pagina */}
      <main>
        <h1 className="titulo-pagina">SÉRIES</h1>
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

                <Link to="/cadastrarObras" className="banner-botao">Cadastrar uma nova obra!</Link>
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
          <SerieCard
            capa="https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg"
            titulo="Stranger Things"
            estrelas={5}
            diretor="Irmãos Duffer"
            lancamento="15 de julho de 2016 (EUA)"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ObrasSeries;