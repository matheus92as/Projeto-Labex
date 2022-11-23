import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../constants/BaseURL";

export const PegaLista = (atualiza) => {
  const [viagens, setViagens] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/trips`)
      .then((resposta) => {
        setViagens(resposta.data.trips);
      })
      .catch((erro) => {});
  }, [atualiza]);
  return viagens;
};

export const PegaDetalhe = (idViagem) => {
  const [detalhes, setDetalhes] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${baseUrl}/trip/${idViagem}`, { headers: { auth: token } })
      .then((resposta) => {
        setDetalhes(resposta.data.trip);
      })
      .catch((erro) => {});
  }, [detalhes.candidates]);
  return detalhes;
};

export const decisao = (idViagem, idCandidato, escolha) => {
  if (window.confirm("Tem certeza dessa escolha?")) {
    const token = localStorage.getItem("token");
    const body = { approve: escolha };
    axios
      .put(
        `${baseUrl}/trips/${idViagem}/candidates/${idCandidato}/decide`,
        body,
        { headers: { auth: token } }
      )
      .then((resposta) => {
        alert("Decisão registrada");
      })
      .catch((erro) => {
        alert("Não foi possivel tomar a decisão");
      });
  }
};

export const useForm = (estadoInicial) => {
  const [formulario, setForm] = useState(estadoInicial);
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...formulario, [name]: value });
  };
  const limpaInputs = () => {
    setForm(estadoInicial);
  };
  return { formulario, onChange, limpaInputs };
};
