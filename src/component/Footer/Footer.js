import React from "react";
import {
  AppDown,
  AppSocialBox,
  Infs,
  Logo,
  MainContainer,
  Social,
} from "./styled";
import apple from "../../img/socialAppstore.png";
import google from "../../img/socialGoogleplay.png";
import face from "../../img/face.png";
import insta from "../../img/insta.png";
import twitter from "../../img/twitter.png";
import labex2 from "../../img/logoLabex2.png";

const Footer = () => {
  return (
    <MainContainer>
      <div className="bg"></div>
      <AppSocialBox>
        <AppDown>
          <p>Baixe nosso aplicativo</p>
          <div>
            <a
              href="https://www.apple.com/br/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={apple} />
            </a>
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={google} />
            </a>
          </div>
        </AppDown>
        <Social>
          <a href="#top">
            <Logo src={labex2} />
          </a>
          <div>
            <p>Sigua nossa redes</p>
            <div className="links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={face} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} />
              </a>
            </div>
          </div>
        </Social>
      </AppSocialBox>
      <Infs>
        <p>
          Labex Operadora e Agência de Viagens S.A - CNPJ: 15.768.260/00016-19
          Rua da Lua, 227, 21 andar, sala 2211 | Bairro Espacial, Varginha - SP
          CEP: 91090-350
        </p>
      </Infs>
    </MainContainer>
  );
};

export default Footer;
