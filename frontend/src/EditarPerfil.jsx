// src/EditarPerfil.jsx
import React, { useState, useEffect } from "react";
import "./EditarPerfil.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { pegarSessao, salvarSessao, limparSessao } from "./auth";
import { useNavigate } from "react-router-dom";

export default function EditarPerfil() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataCadastro, setDataCadastro] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sessao = pegarSessao();
    if (!sessao) {
      navigate("/login");
      return;
    }

    setEmail(sessao.email || "");
    setNome(sessao.nome || "");
    setId(sessao.id || null);

    fetch("http://localhost/backlumiere/usuarios/buscar_usuario.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: sessao.email }),
    })
      .then((res) => res.json())
      .then((dados) => {
        if (dados.status === "ok") {
          setNome(dados.usuario.nome);
          setEmail(dados.usuario.email);
          setDataCadastro(dados.usuario.data_cadastro);
          setId(dados.usuario.id_usuario || sessao.id);
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  const handleSalvar = async () => {
    if (!id) {
      alert("Usuário inválido.");
      return;
    }

    try {
      const resposta = await fetch("http://localhost/backlumiere/usuarios/atualizar_usuario.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nome }),
      });
      const dados = await resposta.json();
      if (dados.status === "ok") {
        const sessao = pegarSessao() || {};
        const novaSessao = { ...sessao, nome };
        salvarSessao(novaSessao);
        alert("Alterações salvas!");
        navigate("/perfil");
      } else {
        alert(dados.mensagem || "Erro ao salvar.");
      }
    } catch (err) {
      console.log(err);
      alert("Erro ao conectar ao servidor.");
    }
  };

  const handleLogout = () => {
    limparSessao();
    navigate("/login");
  };

  return (
    <>
      <Header />

      <h1 className="titulo-pagina">EDITAR PERFIL</h1>

      <div className="editar-container">
        <div className="editar-foto"></div>

        <p className="editar-texto">Alterar foto</p>

        <input
          type="text"
          className="editar-input"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <p className="email-texto">{email}</p>

        <p className="data-texto">Cadastrado em: {dataCadastro}</p>

        <button className="editar-btn" onClick={() => navigate("/trocar-senha")}>
          Trocar senha
        </button>

        <button className="editar-btn" onClick={handleSalvar}>
          Salvar alterações
        </button>

        <button className="sair-btn" onClick={handleLogout}>
          Sair da conta
        </button>
      </div>

      <Footer />
    </>
  );
}
