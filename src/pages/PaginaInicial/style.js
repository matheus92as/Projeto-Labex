import styled from 'styled-components'
import espaco from '../../img/espaco.png'
import espacoVazio from '../../img/espacoVazio.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
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
    h1{
        width: 70%;
        margin: 25px 0;
        font-family: 'Orbitron', sans-serif;
        text-shadow: 2px 5px 5px #000000;
    }
    #footer{
        align-self: flex-end;
    }
    .listbox{
        min-height: 2000px;
    }
`

export const Parallax = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
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
        bottom: -650px;
        object-fit: cover; 
        transform: translateZ(-5px) scale(1.5); 
        z-index : -3;
    }
    .red{
        width: 30%;
        position: absolute;
        object-fit: cover;
        bottom: -1900px;
        right: -450px;
        transform: translateZ(-15px) scale(2.5);
    }
`