import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
`;

export const CardViagem = styled.div`
  display: flex;
  padding: 5px;
  margin: 20px 0;
  width: 85%;
  border-radius: 10px;
  background-color: rgba(23, 23, 23, 0.75);
  border: 3px solid rgba(68, 68, 68, 0.5);
  font-family: "Electrolize", sans-serif;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  .content {
    border-radius: 5px;
    background: rgba(23, 23, 23, 0.90);
    z-index: 1;
    padding: 15px;
    color: white;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-start;
    text-align: start;
    width: 100%;
    height: 100%;
    ::before {
      opacity: 0;
      transition: opacity 300ms;
      content: " ";
      display: block;
      background: white;
      width: 25%;
      height: 15%;
      position: absolute;
      left: 35%;
      filter: blur(100px);
    }
  }
  p {
    margin: 10px;
    text-shadow: 2px 3px 5px #000000;
  }
  :hover .content::before {
    opacity: 1;
  }
  :hover {
    transform: scale(1.01);
    transition: 0.35s;
    ::before {
      opacity: 1;
      animation-play-state: running;
    }
  }
  ::after {
    position: absolute;
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
    width: 90%;
    margin: 15px 0;
    p {
      font-size: 17px;
      margin-bottom: 0px;
    }
  }
  @media screen and (min-device-width: 1740px) and (max-device-width: 2560px) {
    width: 45%;
    margin: 15px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media screen and (min-device-width: 1721px) and (max-device-width: 2560px) {
    flex-flow: row wrap;
  }
`;
export const BoxList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  position: relative;
`;

export const Planet = styled.img`
  cursor: pointer;
  position: sticky;
  margin-top: 0%;
  z-index: 1;
  align-self: flex-start;
  width: 120px;
  height: 120px;
  transition: 0.3s;
  animation: flutua 2.5s infinite alternate ease-in-out;
  @keyframes flutua {
    from {
      top: 60%;
    }
    to {
      top: 65%;
    }
  }
  :hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    width: 25%;
    height: 25%;
  }
`;
