import React, { useState } from "react";

//img
import capaPrincipe from "../../assets/img/capa-pequeno-principe.jpg";

function Capa() {
  const capaa = capaPrincipe;
  const [resposta, setResposta] = useState(""); //pro banco depois
  const formsSubmit = (e) => { //função pra quando o form é enviado
    e.preventDefault(); }; //nao atualiza a pag

    
    
  return ( 
    <div className="container my-5">
      <div className="row align-items-center justify-content-center">
        {/* aapa */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={capaPrincipe}
            alt="Capa do Pequeno Príncipe"
            className="img-fluid rounded shadow capa_detalhada"
          />
        </div>

        {/* Formulário De valer a pena*/}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3 titulo_av">O Pequeno Príncipe</h3>
          <form onSubmit={formsSubmit}> 
            <p className="fw-semibold mb-3">Valeu a pena ler esse livro?</p>

            <div className="form-check mb-2 ">
              <input 
                className="form-check-input "
                type="radio"
                name="avaliacao"
                id="sim"
                value="Sim"
                onChange={(e) => setResposta(e.target.value)} //atualiza a resposta de acordo com a resp do querido
                required //obriga a escolher 
              />
              <label className="form-check-label" htmlFor="sim">
                👍 Sim
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="avaliacao"
                id="nao"
                value="Não"
                onChange={(e) => setResposta(e.target.value)}
              />
              <label className="form-check-label" htmlFor="nao"> {/*conecta a label ao input.*/}
                👎 Não
              </label>
            </div>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="avaliacao"
                id="maisomenos"
                value="Mais ou menos"
                onChange={(e) => setResposta(e.target.value)}
              />
              <label className="form-check-label" htmlFor="maisomenos">
                💬 Mais ou menos
              </label>
            </div>

            <a type="submit" className="btn btn-primary botao_valeu_a_pena">
              Confirmar
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Capa;
