import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cadastrar_Obras.css';
import './App.css';
import LumiereImg from "./assets/img/Lumiere_img.png"; 


function Cadastrar_Obras(){
    return(
        <main>
            <div className="pag_Cad_Obras">
                <Header />
                <section>
                    <h2 className="Main_Title_CO">CADASTRAR NOVA OBRA</h2>
                </section>
                <section>
                     <div className="grid-container">
                        <div className="grid-item_left">
                            <div className="imgcad">
                                <img className="lumi_image"src={LumiereImg} alt="Lumiere" />
                            </div>                         
                        </div>
                        <div className="grid-item_right">
                            <h2 className="Right_text_CO">Não encontrou uma obra que deseja avaliar? Cadastre ela no nosso sistema</h2>
                        </div>
                     </div>
                </section>
                <section>
                    <div className="info-item_CO">
                        <h2>O que você deseja cadastrar?</h2>
                    </div>
                </section>
                <section>
                    <div className="grid-container_scd">
                        <div className="grid-item-left-second">
                            <div className="first_button">
                                <button className="btn-pri">Livro</button>
                            </div>
                        </div>
                        <div className="grid-item-centre-second">
                            <div className="second_button">
                                <button className="btn-scd">Filme</button>
                            </div>
                        </div>
                        <div className="grid-item-right-second">
                            <div className="third_button">
                                <button className="btn-tdr">Série</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </main>
    )
} 
export default Cadastrar_Obras;

