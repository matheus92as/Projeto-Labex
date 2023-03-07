import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 20vh;
  width: 100%;
  color: white;
  overflow: hidden;
  position: relative;
  .bg {
    height: 105%;
    width: 110%;
    position: absolute;
    top: -15px;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.65) 70%,
      rgba(255, 0, 0, 0)
    );
    filter: blur(5px);
    z-index: 0;
  }
  button {
    border: none;
    color: white;
    background-color: inherit;
    font-size: 15px;
    font-family: "Orbitron", sans-serif;
    margin: 0;
  }
  .botoes {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 25px;
    width: 95vw;
    img {
      margin: 0;
      width: 50px;
    }
  }
  .botoesHome {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    height: 15vh;
    button {
      font-size: 9px;
    }
    .botoes {
      margin: 0;
      margin-right: 10px;
      img {
        margin: 0;
        width: 40px;
      }
    }
    .botoesHome {
    margin-right: 10px;
    }
  }
`;

export const LogedIn = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 25px;
  transition: 0.3s;
  z-index: 1;
  :hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
  img {
    width: 50px;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    margin: 0px;
    img {
    width: 45px;
  }
  }
`;

export const Login = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  transition: 0.3s;
  z-index: 1;
  button {
    font-family: "Orbitron", sans-serif;
  }
  img {
    width: 50px;
  }
  :hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    img {
      width: 40px;
    }
  }
`;

export const Logo = styled.img`
  width: 250px;
  position: absolute;
  right: 40%;
  top: 7%;
  transition: 0.3s;
  @media screen and (min-device-width: 300px) and (max-device-width: 425px) {
    width: 125px;
    top: 15%;
    left: 25%;
  }
`;
