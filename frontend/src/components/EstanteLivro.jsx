// src/components/EstanteLivro.jsx
import React from "react";
import CarroselLivro from "./CarroselLivro";

// ✅ IMPORTAÇÃO CORRETA DAS IMAGENS
import livro2 from "../assets/img/minhavida1.jpg";
import livro3 from "../assets/img/minhavida2.jpg";
import livro4 from "../assets/img/minhavida3.jpg";
import livro5 from "../assets/img/minhavida4.jpg";


function EstanteLivro() {
  const books = [
    { image: livro2, alt: "Livro 2" },
    { image: livro3, alt: "Livro 3" },
    { image: livro4, alt: "Livro 4" },
    { image: livro5, alt: "Livro 5" },
  ];

  return (
    <div className="estante-wrapper">
      {/*  parte azul  */}
      <CarroselLivro books={books} />

      {/*  parte bege ----*/}
      <div className="shelf-container">
        <h2>Saga Favorita</h2>
        <button className="edit-btn">EDITAR ESTANTE</button>
      </div>
    </div>
  );
}

export default EstanteLivro;
