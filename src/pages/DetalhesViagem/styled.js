import styled from 'styled-components'
import espaco from '../../img/espaco.png'
import espacoVazio from '../../img/espacoVazio.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    font-family: 'Electrolize', sans-serif;
    text-shadow: 2px 5px 5px #000000;
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

export const Botoes = styled.div`
    cursor: pointer;
    display: flex;
    align-items: flex-start;  
    width: 85%;
    img{
        width: 50px;
        margin: 5px;
    }
    button{
        background-color: inherit;
        font-size: 15px;
        font-family: 'Electrolize', sans-serif;
        text-shadow: 2px 5px 5px #000000;
        border: none;
        color: white;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.4s;
        :hover{
            transition: 0.4s;
            transform: scale(1.1);
        }
    }
`

export const Infs = styled.div`
    width: 80%;
`

export const ListaCandidatos = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 10px;
    padding: 20px;
    border-radius: 15px;
    transition: 0.4s;
    .botoes{
        display: flex;
        align-self: center;
        width: 50%;
        justify-content: space-between;
        button{
        background-color: inherit;
        font-size: 18px;
        font-family: 'Electrolize', sans-serif;
        text-shadow: 0px 2px 3px #000000;
        border: 1px solid white;
        border-radius: 5px;
        padding: 5px;
        color: white;
        transition: 0.3s;
        :hover{
        transition: 0.3s;
        transform: scale(1.1);
        box-shadow: 0px 2px 5px lightgrey;
        background-color: whitesmoke;
        color: black;
        }
        }
    }
    :hover{
        transition: 0.4s;
        box-shadow: 0px 2px 5px lightgray;
    }
`