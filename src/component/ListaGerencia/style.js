import styled from 'styled-components'

export const MainContainer = styled.div`
`
export const CardLista = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    transition: 0.3s;
    padding: 10px;
    margin: 15px;
    font-size: 21px;
    .excluir{
        margin: 0 15px;
    }
    .img1{
        z-index: 1;
        position: relative;
        width: 50px;
    }
    .img2{
        z-index: 0;
        position: relative;
        right: 50%;
        width: 50px;
        animation: giro 5s infinite linear;
        @keyframes giro {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(-360deg);
        }   
    }
    }
    button{
        width: 60px;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        background-color: inherit;
    }
    :hover{
        transition: 0.3s;
        transform: scale(1.1);
        box-shadow: 5px 5px 5px lightgray;
        border-radius: 15px;
    }

`