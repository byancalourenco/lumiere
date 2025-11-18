import React from "react"; 
import LivroCardHeader from "./components/CardDetalhes.jsx";
import capa from "./assets/img/minhavida1.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CardEscolhe from "./components/escolhe_av/CardEscolhe.jsx";
import CardAV from "./components/escolhe_av/CardAV.jsx";

import "./App.css";
import "./Detalhada.css";
import "./ObrasDetalhes.css";
import "./Escolhe_Avaliacao.css";

function Escolhe_Avaliacao() {
  return (
    <main>

      <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
      <Header />
      <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
      
      <section>
        <CardEscolhe 
          capa={capa}
          titulo="Minha vida fora de série – 1ª temporada"
          estrelas={4}
          autor="Paula Pimenta"
          editora="Gutenberg"
          ano="2011"
          anoBrasil="2012"
        />
      </section>

     <section>
        <CardAV />
     </section> 

      <section>
        <Footer />
      </section>

    </main>
  );
}

export default Escolhe_Avaliacao;
