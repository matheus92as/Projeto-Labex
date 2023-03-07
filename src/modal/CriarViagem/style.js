import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 440px;
  position: relative;
  border-radius: 20px;
  padding: 10px;
  overflow: hidden;
  background-color: rgba(23, 23, 23, 0.5);
  font-family: "Electrolize", sans-serif;
  margin: auto;
  animation: scale-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: rgba(23, 23, 23, 1);
    color: white;
    border-radius: 20px;
    position: relative;
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
      top: 150px;
      filter: blur(100px);
    }
    h1 {
      margin-top: 60px;
      text-shadow: none;
    }
    button {
      width: 90px;
      padding: 5px 10px;
      margin: 5px;
      border: 2px solid white;
      border-radius: 5px;
      color: white;
      background-color: inherit;
      transition: 0.3s;
      font-size: 21px;
      font-family: "Electrolize", sans-serif;
      :hover {
        transition: 0.3s;
        transform: scale(1.1);
        background-color: #303030;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 60%;
      input {
        width: 97%;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        font-family: "Electrolize", sans-serif;
      }
      select {
        width: 100%;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        border: 2px solid black;
        font-family: "Electrolize", sans-serif;
      }
    }
    .fechar {
      position: absolute;
      top: 0;
      left: 0;
      padding: 5;
      width: auto;
      border-radius: 15px;
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
  @media screen and (min-device-width: 280px) and (max-device-width: 768px) {
    width: 80%;
    .content {
      width: 100%;
      form {
        width: 75%;
        select {
          width: 101%;
        }
      }
    }
  }
  @media screen and (min-device-width: 280px) and (max-device-width: 425px) {
    width: 85%;
    .content {
      h1 {
        font-size: 1.5em;
      }
      form {
        select {
          width: 104%;
        }
      }
    }
  }
`;
