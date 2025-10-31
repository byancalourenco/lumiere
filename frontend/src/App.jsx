
// importa a biblioteca do react, faz funcionar os componentes e blablabla
import React from "react"; 

// pega os componentes header e cardcontainer da pasta components
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

// importa o css
import "./App.css";

// função principal
function App() {

  // estrutura visual | interface 
  return (
    <>
      {/* chama esse componente */}
      <Header />

      {/* area principal da pagina */}
      <main>
        <h1 className="titulo-pagina">LIVROS</h1>
        <section id="sec-destaques">
          <h2>Destaques</h2>
          <CardContainer />
        </section>
      </main>
    </>
  );
}

export default App;
