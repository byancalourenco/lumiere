import React from "react"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";
import "./Detalhada.css";

function Escolhe_Avaliacao() {
  return (
    <main>
      <Header />
      <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
      
      <section>
        <Footer />
      </section>

    </main>
  );
}

export default Escolhe_Avaliacao;
