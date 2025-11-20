import "./LivroCard.css";
import { Link } from "react-router-dom";

export default function LivroCard({ capa, titulo, estrelas, autor, editora, ano, anoBrasil, tipo }) {
  return (
    <div className="livro-card">
      <img src={capa} alt={titulo} className="livro-capa" />

      <div className="livro-info">
        <h2 className="livro-titulo">{titulo}</h2>

        <div className="livro-estrelas">
          {"★".repeat(estrelas)}
        </div>

        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Editora:</strong> {editora}</p>
        <p><strong>Ano de publicação:</strong> {ano} (original) / {anoBrasil} (Brasil)</p>

        <Link className="livro-btn" to={`/obrasdetalhes/${tipo}`}>
          Quero avaliar esse livro!
          <span className="material-icons">search</span>
        </Link >
      </div>
    </div>
  );
}


