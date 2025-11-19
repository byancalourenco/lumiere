// importa a biblioteca do react, faz funcionar os componentes e blablabla
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// bibliotecas do carrossel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Criarconta from "./Criarconta.jsx";
import Inicial from "./Inicial.jsx";
import ObrasLivros from "./ObrasLivros.jsx";
import Estantes from "./Estantes.jsx";
import Perfil from "./Perfil.jsx";
import EditarPerfil from "./EditarPerfil.jsx";
import ObrasDetalhes from "./ObrasDetalhes.jsx";
import Cadastrar_Obras from "./Cadastrar_Obras.jsx";
import Cadastrar_Series from "./Cadastrar_Series.jsx";
import Cadastrar_Filmes from "./Cadastrar_Filmes.jsx";
import Cadastrar_Livros from "./Cadastrar_Livros.jsx";
import Escolhe_Avaliacao from "./Escolhe_Avaliacao.jsx";
import Rapida from "./Rapida.jsx";
import Detalhada from "./Detalhada.jsx";
import CriterioEmocao from "./CriterioEmocao.jsx";
import Temporadas from "./TemporadasDetalhada.jsx";
import ObrasFilmes from "./ObrasFilmes.jsx";
import ObrasSeries from "./ObrasSeries.jsx";
import AlterarFilme from "./pagsAdministrador/AlterarFilme.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criarconta" element={<Criarconta />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/obraslivros" element={<ObrasLivros />} />
        <Route path="/estantes" element={<Estantes />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/editarperfil" element={<EditarPerfil />} />
        <Route path="/obrasdetalhes/:tipo" element={<ObrasDetalhes />} />
        <Route path="/cadastrarFilmes" element={<Cadastrar_Filmes />} />
        <Route path="/cadastrarSeries" element={<Cadastrar_Series />} />
        <Route path="/cadastrarLivros" element={<Cadastrar_Livros />} />
        <Route path="/cadastrarObras" element={<Cadastrar_Obras />} />
        <Route path="/escolheAvaliacao/:tipo" element={<Escolhe_Avaliacao />} />
        <Route path="/rapida" element={<Rapida />} />
        <Route path="/detalhada/:tipo" element={<Detalhada />} />
        <Route path="/criterioEmocao/:tipo" element={<CriterioEmocao />} />
        <Route path="/temporadas" element={<Temporadas />} />
        <Route path="/obrasFilmes" element={<ObrasFilmes />} />
        <Route path="/obrasSeries" element={<ObrasSeries />} />
        <Route path="/alterarFilme" element={<AlterarFilme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
