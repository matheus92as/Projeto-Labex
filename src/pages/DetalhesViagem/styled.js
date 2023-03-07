import styled from "styled-components";
import espaco from "../../img/espaco.png";
import espacoVazio from "../../img/espacoVazio.png";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-family: "Electrolize", sans-serif;
  text-shadow: 2px 5px 5px #000000;
  color: white;
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
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    font-size: 15px;
    h1 {
      text-align: center;
      font-size: 27px;
    }
  }
`;

export const Infs = styled.div`
  width: 80%;
  @media screen and (min-device-width: 1320px) and (max-device-width: 2560px) {
    width: 60%;
  }
`;

export const ListaCandidatos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10px;
  padding: 5px;
  border-radius: 15px;
  transition: 0.4s;
  position: relative;
  background-color: rgba(23, 23, 23, 0.5);
  overflow: hidden;
  .content{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;
    border-radius: 10px;
    background-color: rgba(23, 23, 23, 1);
    p{
        margin: 5px 10px;
    }
    ::before {
      opacity: 0;
      transition: opacity 300ms;
      content: " ";
      display: block;
      background: white;
      width: 25%;
      height: 15%;
      position: absolute;
      left: 40%;
      top: 100px;
      filter: blur(100px);
    }
    .botoes {
      display: flex;
      align-self: center;
      width: 50%;
      justify-content: space-between;
      margin: 10px 0;
      button {
        background-color: inherit;
        font-size: 18px;
        font-family: "Electrolize", sans-serif;
        text-shadow: 0px 2px 3px #000000;
        border: 1px solid white;
        border-radius: 5px;
        padding: 5px;
        color: white;
        transition: 0.3s;
        :hover {
          transition: 0.3s;
          transform: scale(1.1);
          box-shadow: 0px 2px 5px lightgrey;
          background-color: whitesmoke;
          color: black;
        }
      }
    }
  }
  :hover .content::before {
    opacity: 1;
  }
  :hover {
    transition: 0.35s;
    ::before {
      opacity: 1;
      animation-play-state: running;
    }
  }
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    background: #17171733;
    backdrop-filter: blur(50px);
  }
  ::before {
    opacity: 0;
    content: " ";
    position: absolute;
    top: -150%;
    display: block;
    width: 90%;
    height: 400%;
    background: linear-gradient(
      90deg,
      transparent,
      #ff2288,
      #387ef0,
      transparent
    );
    transition: opacity 300ms;
    animation: rotation_9018 3500ms infinite linear;
    animation-play-state: paused;
  }
  @keyframes rotation_9018 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    .content{
        .botoes {
          align-self: flex-start;
          width: 100%;
        }
    }
    margin: 0;
    p {
      margin-bottom: 0;
    }
    button {
      margin: 0 10px;
    }
  }
  @media screen and (min-device-width: 1320px) and (max-device-width: 2560px) {
    width: 60%;
  }
`;
