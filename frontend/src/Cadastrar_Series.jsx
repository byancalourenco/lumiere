import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cadastrar_Series.css';
import './App.css';
import Lumiere2 from "./assets/img/Lumiere_img.png";
import l from "./assets/img/l.png";
import l2 from "./assets/img/l2.png";
import l3 from "./assets/img/l3.png";
import l4 from "./assets/img/l4.png";
import l5 from "./assets/img/l5.png";
import l6 from "./assets/img/l6.png";



function Cadastrar_Series(){
    return(
        <main>
            <div className="pag_Filmes">
                <Header />
                <section>
                    <h2 className="Main_Title_CO">CADASTRAR NOVA OBRA</h2>
                </section>
                <section>
                    <div className="Box_Tit">
                        <label className="Tit_Nome_Livro">Nome da série:</label>
                        <input type="text" className="Box_Tit_Livro" placeholder="Nome da série" />
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
                                    <label className="Tit_Nome_Livro">Data de lançamento:</label>
                                </div>
                                <div>
                                    <input type="text" className="Box_Tit_Livro" placeholder="Data de lançamento" />
                                </div>
                            </div> 
                            <div className="Box_middle">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Diretor:</label>
                                </div>
                                <div>
                                    <input type="text" className="Box_Tit_Livro" placeholder="Diretor" />
                                </div>
                            </div> 
                            <div className="Box_middle">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Genêro:</label>
                                </div>

                                <div className="Dropdown_div">
                                    <select className="dropdown_CF">
                                        <option className="Name_Genre_Movie" value="" disabled selected hidden>
                                            Gênero
                                        </option>
                                        <option value="romance">Romance</option>
                                        <option value="terror">Terror</option>
                                        <option value="ficcao">Ficção</option>
                                        <option value="aventura">Aventura</option>
                                        <option value="comedia">Comédia</option>
                                    </select>
                                </div>
                            </div> 
                            <div className="Class_Indic">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Classificação Indicativa:</label>
                                </div>
                                <div className="real_class_indic">
                                    <div className="image-row">
                                        <img src="/src/assets/img/l.png" alt="" />
                                        <img src="/src/assets/img/l2.png" alt="" />
                                        <img src="/src/assets/img/l3.png" alt="" />
                                        <img src="/src/assets/img/l4.png" alt="" />
                                        <img src="/src/assets/img/l5.png" alt="" />
                                        <img src="/src/assets/img/l6.png" alt="" />
                                    </div>
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
                        <button className="btn-cad">Cadastrar serie</button>
                    </div>
                </section>

            </div>
            <Footer/>
        </main>
    )
} 
export default Cadastrar_Series;
