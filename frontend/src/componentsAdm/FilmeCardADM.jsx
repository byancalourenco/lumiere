import "../components/LivroCard.css";
import { Link } from "react-router-dom";

export default function FilmeCardADM({ capa, titulo, estrelas, diretor, genero, lancamento }) {
  return (
    <div className="livro-card">
      <img src={capa} alt={titulo} className="livro-capa" />

      <div className="livro-info">
        <h2 className="livro-titulo">{titulo}</h2>

        <div className="livro-estrelas">
          {"★".repeat(estrelas)}
        </div>

        <p><strong>Diretor:</strong> {diretor}</p>
        <p><strong>Gênero:</strong> {genero}</p>
        <p><strong>Data de lançamento:</strong> {lancamento}</p>

        
        <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle drop_container" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Quero gerenciar esse filme!
          </a>

          <ul className="dropdown-menu drop_lista">
            
            <li>
              <Link className="dropdown-item drop_texto" to="/alterarFilme">
               Alterar Informações
              </Link>
            </li>
            <li><a className="dropdown-item" href="#">Excluir esta obra</a></li> 
          </ul>
        </div>
        
        
        {/* <Link className="livro-btn" to="/obrasDetalhes">
          Quero gerenciar esse livro!
        </Link > */}
      </div>
    </div>
  );
}


