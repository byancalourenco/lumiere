import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Cadastrar_Filmes.css";

function EditarObra() {

    // PEGAR O ID DA URL PARA EDITAR
    const { id } = useParams();

    const [titulo, setTitulo] = useState("");
    const [dataLancamento, setDataLancamento] = useState("");
    const [autor, setAutor] = useState("");
    const [editora, setEditora] = useState("");
    const [numTemporadas, setNumTemporadas] = useState("");
    const [numEpisodios, setNumEpisodios] = useState("");
    const [genero, setGenero] = useState("");
    const [tipoObra, setTipoObra] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [classificacaoSelecionada, setClassificacaoSelecionada] = useState(null);

    const [ImgObra, setImgObra] = useState(null);
    const [ImgFile, setImgFile] = useState(null);

    // 🟦 CARREGA A OBRA DO BANCO SE ESTIVER EDITANDO
    useEffect(() => {
        if (id) {
            fetch(`http://localhost/backlumiere/obras/buscarobra.php?id_obras=${id}`)
                .then(res => res.json())
                .then(data => {
                    setTitulo(data.titulo);
                    setTipoObra(data.tipo);
                    setSinopse(data.descricao);
                    setAutor(data.autor);

                    setDataLancamento(data.ano_lancamento?.substring(0, 10));
                    setEditora(data.editora || "");
                    setGenero(data.genero || "");
                    setClassificacaoSelecionada(data.classificacao || null);

                    if (data.capa) {
                        setImgObra(data.capa.includes("http")
                            ? data.capa
                            : `http://localhost/backlumiere/obras/uploads/${data.capa}`);
                    }

                    // Séries
                    setNumTemporadas(data.num_temporadas || "");
                    setNumEpisodios(data.num_episodios || "");
                });
        }
    }, [id]);


    const imagemtrocada = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImgFile(file);
            setImgObra(URL.createObjectURL(file));
        }
    };

    const opcoes = [
        { valor: "L", cor: "#3CA63C" },
        { valor: "10", cor: "#1D74BB" },
        { valor: "12", cor: "#F3C425" },
        { valor: "14", cor: "#D87A2E" },
        { valor: "16", cor: "#C92124" },
        { valor: "18", cor: "#000000" },
    ];

    const handleSelect = (valor) => setClassificacaoSelecionada(valor);

    // 🟦 BOTÃO (CADASTRAR / EDITAR)
    const enviarAlteracao = async () => {

        const url = id
            ? "http://localhost/backlumiere/obras/alterarobra.php"
            : "http://localhost/backlumiere/obras/cadastraserie.php";

        const formData = new FormData();

        // EDITAR → manda o ID para o back
        if (id) formData.append("id_obras", id);

        // CAMPOS OBRIGATÓRIOS
        formData.append("titulo", titulo);
        formData.append("tipo", tipoObra);
        formData.append("descricao", sinopse);
        formData.append("ano", dataLancamento);
        formData.append("autor", autor);
        formData.append("editora", editora);
        formData.append("genero", genero);
        formData.append("classificacao", classificacaoSelecionada);
        formData.append("id_usuario", 1);

        if (tipoObra === "Série") {
            formData.append("num_temporadas", numTemporadas);
            formData.append("num_episodios", numEpisodios);
        }

        // IMAGEM → só envia se trocar
        if (ImgFile) {
            formData.append("capa", ImgFile);
        }

        const resposta = await fetch(url, {
            method: "POST",
            body: formData,
        });

        const dados = await resposta.json();

        if (dados.erro) {
            alert("Erro: " + dados.mensagem);
        } else {
            alert(dados.mensagem);
        }
    };


    return (
        <div className="pag_Filmes">
            <Header />
            <section>
                <h2 className="Main_Title_CO">
                    {id ? "EDITAR OBRA" : "CADASTRAR OBRA"}
                </h2>
            </section>

            <section>
                <div className="Box_Tit">
                    <label className="Tit_Nome_Livro">Nome da Obra:</label>
                    <input
                        type="text"
                        className="Box_Tit_Livro"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
            </section>

            <section>
                <input type="file" id="upload-file" accept="image/*" style={{ display: "none" }}
                    onChange={imagemtrocada} />

                <div className="grid-container_tdr">

                    <div className="grid-item-left-third">
                        <div className="Gray_Rectangle" onClick={() => document.getElementById("upload-file").click()}>
                            <img
                                src={ImgObra || "/src/assets/img/Lumiere2.png"}
                                alt="obra"
                                className="gray-img"
                            />
                        </div>
                    </div>

                    <div className="grid-item-right-third">

                        <div className="Box_middle">
                            <label className="Tit_Nome_Livro">Data de lançamento:</label>
                            <input
                                type="date"
                                className="Box_Tit_Livro"
                                value={dataLancamento}
                                onChange={(e) => setDataLancamento(e.target.value)}
                            />
                        </div>

                        <div className="Box_middle">
                            <label className="Tit_Nome_Livro">
                                {tipoObra === "Filme" || tipoObra === "Série" ? "Diretor" : "Autor"}
                            </label>
                            <input
                                type="text"
                                className="Box_Tit_Livro"
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                            />
                        </div>

                        {tipoObra === "Livro" && (
                            <div className="Box_middle">
                                <label className="Tit_Nome_Livro">Editora</label>
                                <input
                                    type="text"
                                    className="Box_Tit_Livro"
                                    value={editora}
                                    onChange={(e) => setEditora(e.target.value)}
                                />
                            </div>
                        )}

                        {tipoObra === "Série" && (
                            <>
                                <div className="Box_middle">
                                    <label className="Tit_Nome_Livro">Número de temporadas</label>
                                    <input
                                        type="number"
                                        className="Box_Tit_Livro"
                                        value={numTemporadas}
                                        onChange={(e) => setNumTemporadas(e.target.value)}
                                    />
                                </div>
                                <div className="Box_middle">
                                    <label className="Tit_Nome_Livro">Número de episódios</label>
                                    <input
                                        type="number"
                                        className="Box_Tit_Livro"
                                        value={numEpisodios}
                                        onChange={(e) => setNumEpisodios(e.target.value)}
                                    />
                                </div>
                            </>
                        )}

                        <div className="Box_middle">
                            <label className="Tit_Nome_Livro">Tipo da Obra:</label>
                            <select
                                className="Box_Tit_Livro"
                                value={tipoObra}
                                onChange={(e) => setTipoObra(e.target.value)}
                            >
                                <option value="" disabled hidden>Selecione</option>
                                <option value="Filme">Filme</option>
                                <option value="Série">Série</option>
                                <option value="Livro">Livro</option>
                            </select>
                        </div>

                        <div className="Box_middle">
                            <label className="Tit_Nome_Livro">Gênero:</label>
                            <select
                                className="dropdown_CF"
                                value={genero}
                                onChange={(e) => setGenero(e.target.value)}
                            >
                                <option value="" disabled hidden>Gênero</option>
                                <option value="romance">Romance</option>
                                <option value="terror">Terror</option>
                                <option value="ficcao">Ficção</option>
                                <option value="aventura">Aventura</option>
                                <option value="comedia">Comédia</option>
                            </select>
                        </div>

                        {tipoObra !== "Livro" && (
                            <div className="Class_Indic">
                                <label className="Tit_Nome_Livro">Classificação Indicativa:</label>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    {opcoes.map((item) => (
                                        <button
                                            key={item.valor}
                                            className="botoes_inidicativo"
                                            onClick={() => handleSelect(item.valor)}
                                            style={{
                                                backgroundColor: item.cor,
                                                border: classificacaoSelecionada === item.valor ? "3px solid white" : "none"
                                            }}
                                        >
                                            {item.valor}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            <section className="sinopse-section">
                <div className="Sinopse_name">
                    <h5>Sinopse</h5>
                </div>
                <textarea
                    id="sinopse"
                    className="Big_Box_Livro sinopse-box"
                    value={sinopse}
                    onChange={(e) => setSinopse(e.target.value)}
                ></textarea>

                <div className="botao_cad button-container">
                    <button className="btn-cad" onClick={enviarAlteracao}>
                        {id ? "Salvar Alterações" : "Confirmar Cadastro"}
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default EditarObra;
