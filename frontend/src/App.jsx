// importa a biblioteca do react, faz funcionar os componentes e blablabla
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Criarconta from "./criarconta.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criarconta" element={<Criarconta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
