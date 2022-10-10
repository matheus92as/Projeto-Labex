import styled from 'styled-components'

export const Background = styled.div`
    display: flex;
    position: fixed;
    z-index: 2;
    overflow: auto;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 450px;
    position: relative;
    border-radius: 10px;
    color: black;
    font-family: 'Electrolize', sans-serif;
    background-color: whitesmoke;
    margin: auto;
    animation: scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
    @keyframes scale-in{
        0%{
            transform: scale(0);
        }
        100%{
            transform: scale(1);
        }
    }
    h1{
        margin-top: 50px;
        text-shadow: none;
    }
    button{
        width: 90px;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 5px;
        background-color: inherit;
        transition: 0.3s;
        font-size: 21px;
        font-family: 'Electrolize', sans-serif;
        :hover{
            transition: 0.3s;
            transform: scale(1.1);
            color: white;
            background-color: #303030;
            border-color: white;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
        input{
            width: 97%;
            padding: 5px;
            margin: 5px;
            border-radius: 5px;
            font-family: 'Electrolize', sans-serif;
        }
        select{
            width: 100%;
            padding: 5px;
            margin: 5px;
            border: 2px solid black;
            border-radius: 5px;
            font-family: 'Electrolize', sans-serif;
        }
    }
    .fechar{
        position: absolute;
        top: 0;
        left: 0;
        padding: 5;
        width: auto;
        border-radius: 15px;
    }
`