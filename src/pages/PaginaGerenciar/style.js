import styled from "styled-components";
import espaco from "../../img/espaco.png";
import espacoVazio from "../../img/espacoVazio.png";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  color: white;
  font-family: "Electrolize", sans-serif;
  text-shadow: 2px 5px 5px #000000;
  min-height: 100vh;
  width: 100%;
  background: #242424 url(${espaco});
  animation: brilhoEspaco 4s infinite alternate ease-in-out;
  @keyframes brilhoEspaco {
    from {
      background: #242424 url(${espaco});
    }
    to {
      background: #242424 url(${espacoVazio});
    }
  }
`;
export const Botoes = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 85%;
  position: relative;
  img {
    width: 50px;
    margin: 5px;
  }
  button {
    background-color: inherit;
    font-size: 15px;
    font-family: "Electrolize", sans-serif;
    text-shadow: 2px 5px 5px #000000;
    border: none;
    color: white;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 10px;
    transition: 0.4s;
    :hover {
      transition: 0.4s;
      transform: scale(1.1);
    }
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    justify-content: start;
    width: 90%;
    img {
      width: 35px;
    }
    button {
      font-size: 13px;
    }
    h1 {
      font-size: 24px;
      width: 80%;
    }
    div {
    right: -15px;
  }
  }
`;
