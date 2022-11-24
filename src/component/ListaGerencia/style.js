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
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  width: 35%;
  margin: 15px;
  font-size: 21px;
  font-family: "Electrolize", sans-serif;
  text-shadow: 2px 5px 5px #000000;
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
  :hover {
    transition: 0.4s;
    box-shadow: 0px 2px 5px lightgray;
    border-radius: 10px;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    width: 80%;
    font-size: 18px;
  }
  @media screen and (min-device-width: 1320px) and (max-device-width: 2560px) {
    width: 25%;
  }
`;
