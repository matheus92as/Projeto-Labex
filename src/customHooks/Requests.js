import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../constants/BaseURL";
import swal from "sweetalert";

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
  if (escolha === true) {
    swal({
      title: "Tem certeza dessa escolha?",
      text: "Ainda há vagas?!",
      dangerMode: true,
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        const token = localStorage.getItem("token");
        const body = { approve: escolha };
        axios
          .put(
            `${baseUrl}/trips/${idViagem}/candidates/${idCandidato}/decide`,
            body,
            { headers: { auth: token } }
          )
          .then((resposta) => {
            swal("Feito, mais um pra festa!", {
              icon: "success",
              buttons: false,
              timer: 4000,
            });
          })
          .catch((erro) => {
            swal("Não foi possivel tomar a decisão", {
              icon: "error",
              buttons: false,
              timer: 4000,
            });
          });
      } else {
        swal("Tudo bem, você ainda pode decidir mais tarde!", {
          buttons: false,
          timer: 3500,
        });
      }
    });
  } else {
    swal({
      title: "Tem certeza dessa escolha?",
      text: "Alguem pode ficar chateado.",
      dangerMode: true,
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        const token = localStorage.getItem("token");
        const body = { approve: escolha };
        axios
          .put(
            `${baseUrl}/trips/${idViagem}/candidates/${idCandidato}/decide`,
            body,
            { headers: { auth: token } }
          )
          .then((resposta) => {
            swal("Decisão registrada!", {
              icon: "error",
              buttons: false,
              timer: 4000,
            });
          })
          .catch((erro) => {
            swal("Não foi possivel tomar a decisão", {
              icon: "error",
              buttons: false,
              timer: 4000,
            });
          });
      } else {
        swal("Tudo bem, você ainda pode decidir mais tarde!", {
          buttons: false,
          timer: 3500,
        });
      }
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
