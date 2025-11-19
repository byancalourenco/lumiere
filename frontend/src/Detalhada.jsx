import React from "react"; 
import { useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import BotoesLivroFilme from "./components/avaliacao_detalhada/BotoesLivroFilme.jsx";
import BotoesSeries from "./components/avaliacao_detalhada/BotoesSeries.jsx";
import Capa from "./components/avaliacao_detalhada/Capa.jsx";
import Comentario from "./components/avaliacao_detalhada/Comentario.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";
import "./Detalhada.css";

function Detalhada() {
  const { tipo } = useParams(); // recebe livro/filme/serie
  return (
    <main>
      <Header />
      <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
      <section id="sec-destaques">
        <h2 className="subtitulo">Modo Detalhado</h2>
        {tipo === "livro" && <BotoesLivroFilme tipo={tipo} />}
        {tipo === "filme" && <BotoesLivroFilme tipo={tipo} />}
        {tipo === "serie" && <BotoesSeries tipo={tipo} />}
      </section>
      
      <section>
        <Capa />
      </section>

      <section className="section_comentario">
        <Comentario tipo={tipo} />
      </section> 

      <Footer />
    </main>
  );
}

export default Detalhada;
