import React from "react";
import capaPrincipe from "../../assets/img/capa-pequeno-principe.jpg";

function CapaForms() {
  const capaa = capaPrincipe;

  return (
    <div className="container my-5">
      <div className="row align-items-center justify-content-center">
        {/* Capa */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={capaa}
            alt="Capa do Pequeno Príncipe"
            className="img-fluid rounded shadow capa_detalhada"
          />
        </div>

        {/* Formulário */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3 titulo_av">O Pequeno Príncipe</h3>

          <div>
            <p className="fw-semibold mb-3">O que sente sobre esse título?</p>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                <label className="form-check-label" htmlFor="radioDefault1">
                Virou minha nova obsessão! 
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                <label className="form-check-label" htmlFor="radioDefault2">
                Me destruiu e eu agradeço! 
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault3" />
                <label className="form-check-label" htmlFor="radioDefault3">
                Gostei, mas quase dormi. 
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault4" />
                <label className="form-check-label" htmlFor="radioDefault4">
                Perdi horas e ainda ri depois. 
                </label>
            </div>      

            <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault5" />
                <label className="form-check-label" htmlFor="radioDefault5">
                Um espetáculo de decepção!
                </label>
           </div>    
          
          </div>  


            
        </div>

        {/* Critérios: */}

        <div>
            <p className="fw-semibold mb-3 titulo_av_criterios">Avalie essa obra por critérios?</p>

            <table class="table tabela_criterio">
                <thead>
                    <tr>
                    <th scope="col">Critério</th>
                    <th scope="col">Sua nota:</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th scope="row">Enredo:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" class="form-label titulo_criterio"></label>
                                <textarea class="form-control caixa_criterio" id="exampleFormControlTextarea1" rows="3" placeholder="Digite aqui sua nota..."></textarea>
                            </td>
                    </tr>

                    <tr>
                        <th scope="row">Personagens:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" class="form-label titulo_criterio"></label>
                                <textarea class="form-control caixa_criterio" id="exampleFormControlTextarea1" rows="3" placeholder="Digite aqui sua nota..."></textarea>
                            </td>
                    </tr>

                    <tr>
                        <th scope="row">Fluidez da leitura:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" class="form-label titulo_criterio"></label>
                                <textarea class="form-control caixa_criterio" id="exampleFormControlTextarea1" rows="3" placeholder="Digite aqui sua nota..."></textarea>
                            </td>
                    </tr>

                    <tr>
                        <th scope="row">Ambientação:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" class="form-label titulo_criterio"></label>
                                <textarea class="form-control caixa_criterio" id="exampleFormControlTextarea1" rows="3" placeholder="Digite aqui sua nota..."></textarea>
                            </td>
                    </tr>

                    <tr>
                        <th scope="row">Originalidade:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" class="form-label titulo_criterio"></label>
                                <textarea class="form-control caixa_criterio" id="exampleFormControlTextarea1" rows="3" placeholder="Digite aqui sua nota..."></textarea>
                            </td>
                    </tr>
                </tbody>
            </table>

        </div>

        <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-primary botao_valeu_a_pena">
                Próximo
            </button>
        </div>
      </div>
    </div>
    
  );
}

export default CapaForms;
