import styled from 'styled-components'
import espaco from '../../img/espaco.png'
import espacoVazio from '../../img/espacoVazio.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    height: fit-content;
    background: #242424 url(${espaco});
    animation: brilhoEspaco 4s infinite alternate ease-in-out;
    @keyframes brilhoEspaco{
        from{
            background: #242424 url(${espaco});
        }
        to{
            background: #242424 url(${espacoVazio});
        }
    }
`

export const SecondContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 10px;
    position: relative;
    justify-content: space-between;
    h1{
        width: 70%;
        margin: 25px 0;
        font-size: 37px;
        font-family: 'Orbitron', sans-serif;
        text-shadow: 2px 5px 5px #000000;
    }
    .listbox{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        min-height: 1500px ;
    }
    @media screen and (min-device-width:280px) and (max-device-width:425px){
       h1{
        width: 85%;
        font-size: 27px;
       } 
    }
    @media screen and (min-device-width:1740px) and (max-device-width:2560px){
        .listbox{
        min-height: 1650px;
    }
    }
`

export const Parallax = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    z-index: -1;
    position: relative;
    .terra{
        width: 80%;
        position: absolute;
        object-fit: cover;
        top: 50px;
        right: 0;
        transform: translateZ(-15px) scale(2.5);
    }
    .nave{
        width: 60%;
        position: absolute;
        right: 0;
        object-fit: cover;
        transform: translateZ(-10px) scale(2); 
        z-index: -2;
    }
    .planeta{
        width: 75%;
        position: absolute;
        left: -350px;
        bottom: -100%;
        object-fit: cover; 
        transform: translateZ(-5px) scale(1.5); 
        z-index : -3;
    }
    .red{
        width: 30%;
        position: absolute;
        object-fit: cover;
        bottom: -200%;
        right: -450px;
        transform: translateZ(-15px) scale(2.5);
    }
    @media screen and (min-device-width:280px) and (max-device-width:425px){
        .terra{
            width: 100%;
            top: -100px;
            right: 0;
            transform: translateZ(-15px) scale(2.5);
        }
        .nave{
            width: 90%;
            top: 75px;
            right: -70px;
        }
        .planeta{
            width: 100%;
            left: -200px;
            bottom: -10%;
            object-fit: cover; 
            transform: translateZ(-5px) scale(1.5); 
            z-index : -3;
        }
        .red{
            width: 70%;
            bottom: -1800px;
        }
    }
    @media screen and (min-device-width:1320px) and (max-device-width:1720px){
        .terra{
            width: 80%;
            top: 170px;
            right: 0;
        }
        .planeta{
            width: 65%;
        }
        .nave{
            width: 50%;
        }
    }
    @media screen and (min-device-width:1721px) and (max-device-width:2560px){
        .terra{
            width: 70%;
            top: 350px;
            right: -350px;
        }
        .planeta{
            width: 55%;
            bottom: -850px;
        }
        .nave{
            width: 35%;
        }
        .red{
            width: 20%;
            bottom: -1500px;
            right: -45%;
        }
    }
`