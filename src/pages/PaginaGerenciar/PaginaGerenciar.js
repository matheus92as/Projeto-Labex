import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../component/Header/Header";
import ListaGerencia from "../../component/ListaGerencia/ListaGerencia";
import CriarViagem from "../../modal/CriarViagem/CriarViagem";
import { abreViagem, pagInicial, areaLogado } from "../../routes/coordinator";
import { Botoes, MainContainer } from "./style";
import nave from "../../img/nave.png";
import voltaNave from "../../img/voltaNave.png";
import Footer from "../../component/Footer/Footer";
import { useState } from "react";

const PaginaGerenciar = () => {
  const [atualiza, setAtualiza] = useState(false);
  const navegar = useNavigate();
  const params = useParams();
  console.log(atualiza);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log("não esta logado");
      pagInicial(navegar);
    }
  }, [atualiza]);

  return (
    <MainContainer>
      <Header />
      {params.modal === "novaViagem" ? (
        <CriarViagem atualiza={atualiza} setAtualiza={setAtualiza} />
      ) : null}
      <Botoes>
        <div onClick={() => areaLogado(navegar, "logado")}>
          <img src={voltaNave} alt="Nave de volta" />
          <button>Voltar</button>
        </div>
        <div onClick={() => abreViagem(navegar, "novaViagem")}>
          <img src={nave} alt="Nave de ida" />
          <button>Criar Viagem</button>
        </div>
      </Botoes>
      <h1>Viagens para gerenciar</h1>
      <ListaGerencia atualiza={atualiza} setAtualiza={setAtualiza}/>
      <Footer />
    </MainContainer>
  );
};
export default PaginaGerenciar;
