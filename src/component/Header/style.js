import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    height:20vh;
    width: 100%;
    background-image: linear-gradient( #303030 70%, rgba(255,0,0,0));
    color: white;
    font-size: 24px;
    h1{
        width: auto;
        position: absolute;
        right: 45%;
        margin-bottom: 50px;
    }
    button{
        border: none;
        color: white;
        background-color:  inherit;
        font-size: 15px ;
        font-family: 'Orbitron', sans-serif;
        margin:  0;
    }
    .botoes{
        cursor: pointer;
        display: flex;
        flex-direction: row;
        margin: 0 25px;
        img{
            margin: 0;
            width: 50px;
        }
    }
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
`

export const Logout = styled.div`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 25px;
        transition: 0.3s;
        :hover{
            transition: 0.3s;
            transform: scale(1.1);    
        }
        img{
            width: 50px;
        }
`

export const Login = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 40px;
    transition: 0.3s;
    button{
        font-family: 'Orbitron', sans-serif;
    }
    img{
        width: 50px;
    }
    :hover{
        transition: 0.3s;
        transform: scale(1.1);
    }
`

export const Logo = styled.img`
    width: 250px;
    position: absolute;
    right: 40%;
    top: 15px;
`