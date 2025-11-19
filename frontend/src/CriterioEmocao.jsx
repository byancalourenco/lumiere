import React from "react"; 
import { useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import BotoesLivroFilme from "./components/avaliacao_detalhada/BotoesLivroFilme.jsx";
import BotoesSeries from "./components/avaliacao_detalhada/BotoesSeries.jsx";
import CapaForms from "./components/avaliacao_detalhada/CapaForms.jsx";
import CapaFormsFilmeSerie from "./components/avaliacao_detalhada/CapaFormsFilmeSerie.jsx"


import "./App.css";
import "./Detalhada.css";

function CriterioEmocao(){
    const { tipo } = useParams(); // recebe livro/filme/serie
    return(
        <main>
            <Header />
            <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
            <section id="sec-destaques">
                <h2 className="subtitulo">Modo Detalhado</h2>
                {tipo === "livro" && <BotoesLivroFilme />}
                {tipo === "filme" && <BotoesLivroFilme />}
                {tipo === "serie" && <BotoesSeries tipo={tipo} />}
            </section>
            <section>
                {tipo === "livro" && <CapaForms />}
                {tipo === "filme" && <CapaFormsFilmeSerie />}
                {tipo === "serie" && <CapaFormsFilmeSerie tipo={tipo} />}
            </section>

        </main>    
    );
}

export default CriterioEmocao;