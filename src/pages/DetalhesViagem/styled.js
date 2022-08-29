import styled from 'styled-components'
import espaco from '../../img/espaco.png'
import espacoVazio from '../../img/espacoVazio.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 21px;
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
    img{
        width: 60px;
        margin-top: 10px;
    }
    button{
        color: white;
        padding: 10px;
        margin: 5px;
        background-color: inherit;
        font-size: 21px;
        margin-top: 0;
    }  
    .voltar{
        margin: 15px;
        display: flex;
        align-items: flex-start;  
        width: 60%;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: left; 
            border-radius: 15px;
            transition: 0.4s;
            button{
            border: none;
            }
        :hover{
            transition: 0.4s;
            transform: scale(1.2);
            background-color: #303030;
        }
    }
}
`
export const ListaCandidatos = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    margin: 10px;
    padding: 20px;
    border-radius: 15px;
    transition: 0.3s;
    .botoes{
        display: flex;
        align-self: center;
        width: 50%;
        justify-content: space-between;
        button{
        padding: 15px;
        margin: 5px;
        border-radius: 5px;
        transition: 0.3s;
        :hover{
        transition: 0.3s;
        transform: scale(1.1);
        box-shadow: 3px 3px 5px lightgrey;
        background-color: whitesmoke;
        color: black;
        }
        }
    }
    :hover{
        transition: 0.3s;
        box-shadow: 5px 5px 5px lightgrey;
    }
`