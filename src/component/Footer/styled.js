import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 15vh;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
  font-size: 21px;
  font-family: "Electrolize", sans-serif;
  text-shadow: 2px 5px 5px #000000;
  position: relative;
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    font-size: 16px;
  }
  .bg {
    height: 100%;
    width: 110%;
    position: absolute;
    bottom: -15px;
    background-image: linear-gradient(
      rgba(255, 0, 0, 0),
      rgba(0, 0, 0, 0.75) 20%
    );
    filter: blur(5px);
    z-index: 0;
  }
`;

export const AppSocialBox = styled.div`
  width: 90%;
  padding: 25px 0px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const AppDown = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    cursor: pointer;
    width: 120px;
    margin-right: 10px;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    div {
      margin-left: 5px;
    }
    img {
      width: 100px;
    }
  }
`;

export const Social = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10%;
  .links {
    img {
      cursor: pointer;
      width: 45px;
      margin-right: 10px;
    }
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    width: 100%;
    align-items: flex-start;
    margin-left: 0%;
    div {
      margin-left: 15px;
      flex-direction: row;
      align-items: center;
    }
    .links {
      img {
        width: 30px;
      }
    }
  }
`;

export const Infs = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  z-index: 1;
  p {
    font-size: 13px;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    p {
      font-size: 11px;
    }
  }
`;

export const Logo = styled.img`
  width: 200px;
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    width: 120px;
  }
`;
