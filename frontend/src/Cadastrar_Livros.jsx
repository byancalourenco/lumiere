import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cadastrar_Livros.css';
import './App.css';
import Lumiere2 from "./assets/img/Lumiere_img.png"; 


function Cadastrar_Livros(){
    return(
        <main>
            <div className="pag_Livros">
                <Header />
                <section>
                    <h2 className="Main_Title_CO">CADASTRAR NOVA OBRA</h2>
                </section>
                <section>
                    <div className="Box_Tit">
                        <label className="Tit_Nome_Livro">Nome do livro:</label>
                        <input type="text" className="Box_Tit_Livro" placeholder="Nome do livro" />
                    </div>                    
                </section>
                <section>
                    <div className="grid-container_tdr">
                        <div className="grid-item-left-third">
                            <div className="Gray_Rectangle">
                                <img src="/src/assets/img/Lumiere2.png" alt="logo" className="gray-img" />
                            </div>
                        </div>
                        <div className="grid-item-right-third">
                            <div className="Box_middle">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Data de publicação:</label>
                                </div>
                                <div>
                                    <input type="text" className="Box_Tit_Livro" placeholder="Data de publicação" />
                                </div>
                            </div> 
                            <div className="Box_middle">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Autor:</label>
                                </div>
                                <div>
                                    <input type="text" className="Box_Tit_Livro" placeholder="Autor" />
                                </div>
                            </div> 
                            <div className="Box_middle">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Editora:</label>
                                </div>
                                <div>
                                    <input type="text" className="Box_Tit_Livro" placeholder="Editora" />
                                </div>
                            </div> 
                            <div className="Box_middle">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Genêro:</label>
                                </div>
                                <div>
                                    <input type="text" className="Box_Tit_Livro" placeholder="Genêro" />
                                </div>
                            </div>  
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Sinopse_name">
                        <h5>Sinopse</h5>
                    </div>
                    <div className="Big_Box">
                        <textarea type="text" className="Big_Box_Livro" placeholder="Sinopse" />
                    </div>
                    <div className="botao_cad">
                        <button className="btn-cad">Cadastrar livro</button>
                    </div>
                </section>

            </div>
            <Footer/>
        </main>
    )
} 
export default Cadastrar_Livros;

