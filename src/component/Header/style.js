import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    height: 15vh;
    width: 100%;
    background-color: #303030;
    color: white;
    font-size: 24px;
    h1{
        width: auto;
        position: absolute;
        right: 45%;
    }
    img{
        width: 50px;
    }
    button{
        border: none;
        color: white;
        background-color:  inherit;
        font-size: 18px ;
    }
    .botoes{
        cursor: pointer;
        display: flex;
        flex-direction: row;
        margin: 0 25px;
        .gerenciar{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 5px;
            transition: 0.3s;
            :hover{
                transition: 0.3s;
                transform: scale(1.1);    
            }
        }
        .logout{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 5px;
            transition: 0.3s;
            :hover{
                transition: 0.3s;
                transform: scale(1.1);    
            }
        }
    }
    .logout{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 20px;
        transition: 0.3s;
        img{
            margin: 0px;
        }
        button{
            margin: 0px;
        }
        :hover{
            transition: 0.3s;
            transform: scale(1.1);    
        }
    }
    .login{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 40px;
        transition: 0.3s;
        :hover{
            transition: 0.3s;
            transform: scale(1.1);
        }
    }
`