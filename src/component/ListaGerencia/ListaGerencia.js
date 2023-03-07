import React from "react";
import { useNavigate } from "react-router-dom";
import { PegaLista } from "../../customHooks/Requests";
import { abreDetalhes } from "../../routes/coordinator";
import { CardLista, Content, MainContainer } from "./style";
import rostoBuracoNegro from "../../img/rostoBuracoNegro.png";
import buracoNegro from "../../img/buracoNegro.png";
import axios from "axios";
import baseUrl from "../../constants/BaseURL";
import swal from "sweetalert";

const ListaGerencia = (props) => {
  const viagens = PegaLista(props.atualiza);
  const navegar = useNavigate();

  const excluiViagem = (id) => {
    swal({
      title: "Tem certeza?",
      text: "Sua viagem será encerrada se você apaga-la!",
      dangerMode: true,
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        const token = localStorage.getItem("token");
        axios.delete(`${baseUrl}/trips/${id}`, { headers: { auth: token } });
        swal("Feito, agora é só desfazer as malas!", {
          icon: "success",
          buttons: false,
          timer: 4000,
        });
        props.setAtualiza(!props.atualiza);
      } else {
        swal("A viagem ainda esta em pé!", {
          buttons: false,
          timer: 3000,
        });
      }
    });
  };

  const listaGerenciavel = viagens.map((viagem) => {
    return (
      <CardLista key={viagem.id}>
        <div className="content">
          <div onClick={() => abreDetalhes(navegar, `${viagem.id}`)}>
            <p>{viagem.name}</p>
          </div>
          <div className="excluir" onClick={() => excluiViagem(viagem.id)}>
            <img className="img1" src={rostoBuracoNegro} alt="Excluir"></img>
            <img className="img2" src={buracoNegro}></img>
          </div>
        </div>
      </CardLista>
    );
  });

  return (
    <MainContainer>
      {viagens.length > 0 ? (
        <Content>{listaGerenciavel}</Content>
      ) : (
        <h2>Carregando lista</h2>
      )}
    </MainContainer>
  );
};

export default ListaGerencia;
