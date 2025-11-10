// importa a biblioteca do react, faz funcionar os componentes e blablabla
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Criarconta from "./Criarconta.jsx";
import Inicial from "./Inicial.jsx";
import Rapida from "./Rapida.jsx";
import Detalhada from "./Detalhada.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criarconta" element={<Criarconta />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/rapida" element={<Rapida />} />
        <Route path="/detalhada" element={<Detalhada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
