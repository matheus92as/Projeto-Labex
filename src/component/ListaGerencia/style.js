import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
  min-height: 35vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 90%;
  min-height: 35vh;
`;

export const CardLista = styled.div`
  display: flex;
  transition: 0.3s;
  width: 35%;
  height: fit-content;
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-color: rgba(23, 23, 23, 0.5);
  font-size: 21px;
  cursor: pointer;
  font-family: "Electrolize", sans-serif;
  text-shadow: 2px 5px 5px #000000;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    border-radius: 10px;
    z-index: 1;
    background-color: rgba(23, 23, 23, 0.95);
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
    p{
      margin-left: 5px;
    }
    .excluir {
      margin: 0 15px;
      position: relative;
      .img1 {
        cursor: pointer;
        z-index: 1;
        width: 50px;
        position: absolute;
        .swal-overlay {
          background-color: rgba(43, 165, 137, 0.45);
        }
      }
      .img2 {
        z-index: 0;
        right: 50%;
        width: 50px;
        animation: giro 5s infinite linear;
        @keyframes giro {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(-360deg);
          }
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
    top: -100%;
    display: block;
    width: 90%;
    height: 250%;
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
    width: 80%;
    font-size: 18px;
  }
  @media screen and (min-device-width: 1320px) and (max-device-width: 2560px) {
    width: 25%;
  }
`;
