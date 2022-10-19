import styled from 'styled-components'
import espaco from '../../img/espaco.png'
import espacoVazio from '../../img/espacoVazio.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-family: 'Electrolize', sans-serif;
    text-shadow: 2px 5px 5px #000000;
    min-height: 100vh;
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
    justify-content: space-between;
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