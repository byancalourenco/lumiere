import React, { useState } from "react"; //permite criar variáveis que mudam dinamicamente
import { Link } from "react-router-dom";


function BotoesSeries({ tipo }) {
  const [ativo, setAtivo] = useState(1); // começa com o 1 ativo

  return (
    <div className="navegacao my-4">
        <Link to={`/detalhada/${tipo}`} className={`naveg ${ativo === 1 ? "active" : ""}`} onClick={() => setAtivo(1)}>1</Link>
        <Link to={`/criterioEmocao/${tipo}`} className={`naveg ${ativo === 2 ? "active" : ""}`} onClick={() => setAtivo(2)}>2</Link>
        <Link to="/temporadas" className={`naveg ${ativo === 3 ? "active" : ""}`} onClick={() => setAtivo(3)}>3</Link>
    </div>
  ); 
}

export default BotoesSeries;