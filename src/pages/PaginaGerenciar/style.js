import styled from 'styled-components'
import espaco from '../../img/espaco.png'
import espacoVazio from '../../img/espacoVazio.png'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
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
min-height: 100vh;
button{
    padding: 10px;
    margin: 5px;
    background-color: inherit;
    font-size: 21px;
    margin-top: 0;
}
.botoes{
    margin: 15px;
    display: flex;
    justify-content: space-between;
    width: 60%;
    img{
        width: 60px;
        margin-top: 10px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.4s;
        border-radius: 15px;
        button{
            border: none;
            color: white;
        }
        :hover{
            transition: 0.4s;
            transform: scale(1.2);
            color: white;
            background-color: #303030;
            border-color: white;
        }
    }
}
`