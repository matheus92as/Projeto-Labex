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
    height: 500px;
    border-radius: 20px;
    background-color: whitesmoke;
    color: black;
    margin: auto;
    h1{
        margin-top: 60px;
    }
    button{
        width: 90px;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 5px ;
        color: black;
        background-color: inherit;
        transition: 0.3s;
        font-size: 21px;
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
        }
        select{
            width: 100%;
            padding: 5px;
            margin: 5px;
            border-radius: 5px;
        }
    }
`