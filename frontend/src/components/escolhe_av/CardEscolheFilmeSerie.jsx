import React, { useState } from "react"; 

function CardEscolheFilmeSerie({ capa, titulo, estrelas, diretor, genero, lancamento }){
    return(
    <div className="livro_card_escolher">
      <img src={capa} alt={titulo} className="livro_capa_escolhe" />

      <div className="livro_informa">
        <h2 className="livro_titulo_escolhe">{titulo}</h2>

        <div className="livro-estrelas">
          {"★".repeat(estrelas)}
        </div>

        <p><strong>Diretor:</strong> {diretor}</p>
        <p><strong>Gênero:</strong> {genero}</p>
        <p><strong>Lançamento:</strong> {lancamento}</p>
      </div>
    </div>
    );
}

export default CardEscolheFilmeSerie;