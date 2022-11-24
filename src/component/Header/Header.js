import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pagGerenciar, pagInicial, abreLogin } from "../../routes/coordinator";
import { Login, Logo, Logout, MainContainer } from "./style";
import astronauta from "../../img/astronauta.png";
import sistema2 from "../../img/sistema2.png";
import labex from "../../img/logoLabex.png";

const Header = () => {
  const navegar = useNavigate();
  const params = useParams();

  return (
    <MainContainer id="top">
      <div className="bg"></div>
      <Logo src={labex} />
      {params.log === "logado" ||
      params.modal === "novaViagem" ||
      params.page === "gerenciar" ||
      params.id ? (
        <div>
          {params.modal === "novaViagem" ||
          params.page === "gerenciar" ||
          params.modal === "inscricao" ||
          params.id ? (
            <div className="botoes">
              <Logout onClick={() => pagInicial(navegar)}>
                <img src={astronauta} alt="Astronauta" />
                <button>Logout</button>
              </Logout>
            </div>
          ) : (
            <div className="botoes">
              <div
                className="gerenciar"
                onClick={() => pagGerenciar(navegar, "gerenciar")}
              >
                <img src={sistema2} alt="Astronauta" />
                <button>Gerenciar</button>
              </div>
              <Logout onClick={() => pagInicial(navegar)}>
                <img src={astronauta} alt="Astronauta" />
                <button>Logout</button>
              </Logout>
            </div>
          )}
        </div>
      ) : (
        <Login onClick={() => abreLogin(navegar, "login")}>
          <img src={astronauta} alt="Astronauta" />
          <button>Login</button>
        </Login>
      )}
    </MainContainer>
  );
};

export default Header;
