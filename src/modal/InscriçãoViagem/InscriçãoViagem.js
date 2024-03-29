import React, { useState } from "react";
import { Background, MainContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { voltarPag } from "../../routes/coordinator";
import { PegaLista, useForm } from "../../customHooks/Requests";
import { Paises } from "../../constants/Paises";
import axios from "axios";
import swal from "sweetalert";

const InscriçãoViagem = () => {
  const [id, setId] = useState();
  const navegar = useNavigate();
  const { formulario, onChange, limpaInputs } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const viagens = PegaLista();

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const clickFora = (event) => {
    let modal = document.getElementById("modal");
    if (!modal.contains(event.target)) {
      voltarPag(navegar);
    }
  };

  const inscricao = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/trips/${id}/apply`,
        formulario,
        { headers: { auth: token } }
      )
      .then((resposta) => {
        limpaInputs();
        voltarPag(navegar);
        swal({
          title: "Cadastro realizado",
          text: "Boa viagem!",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const escolheViagem = viagens.map((viagem) => {
    return (
      <option key={viagem.id} value={viagem.id}>
        {viagem.name}
      </option>
    );
  });
  return (
    <Background onClick={clickFora}>
      <MainContainer id="modal">
        <div className="content">
          <h1>Inscrição para Viagem</h1>
          <form onSubmit={inscricao}>
            <select onChange={onChangeId}>
              <option value={""}> Escolha uma viagem </option>
              {escolheViagem}
            </select>
            <select
              name="country"
              value={formulario.country}
              onChange={onChange}
            >
              <option value={""}> Selecione seu País</option>
              {Paises()}
            </select>
            <input
              name="name"
              placeholder="Seu Nome"
              type="text"
              value={formulario.name}
              onChange={onChange}
              required
            />
            <input
              name="age"
              placeholder="Sua idade"
              type="number"
              value={formulario.age}
              onChange={onChange}
              required
            />
            <input
              name="applicationText"
              placeholder="Motivos para participar"
              type="text"
              value={formulario.applicationText}
              onChange={onChange}
              required
            />
            <input
              name="profession"
              placeholder="Sua profissão"
              type="text"
              value={formulario.profession}
              onChange={onChange}
              required
            />
            <button>Enviar</button>
          </form>
          <button className="fechar" onClick={() => voltarPag(navegar)}>
            X
          </button>
        </div>
      </MainContainer>
    </Background>
  );
};

export default InscriçãoViagem;
