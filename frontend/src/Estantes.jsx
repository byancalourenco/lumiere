// importa a biblioteca do react, faz funcionar os componentes e blablabla
import React from "react"; 

// pega os componentes da pasta components
import Header from "./components/Header";
import EstanteLivro from "./components/EstanteLivro"; // ✅ importação correta

// importa o css
import "./App.css";
import "./Estantes.css";


// função principal
function Estantes() {

  // estrutura visual | interface 
  return (
    <>
      {/* chama esse componente */}
      <Header />

      {/* área principal da página */}
      <main>
        <h1 className="titulo-pagina">ESTANTES</h1>

        <section id="sec-estante">
          <EstanteLivro />   
        </section>

         <section id="sec-estante2">
          <EstanteLivro />   
        </section>
         <section id="sec-estante2">
          <EstanteLivro />   
        </section>
      </main>
    </>
  );
}

export default Estantes;
