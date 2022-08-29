import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    img{
        cursor: pointer;
        position: fixed;
        top: 35%;
        left: 10%;
        width: 120px;
        height: 120px;
        transition: 0.3s;
        animation: flutua 2.5s infinite alternate ease-in-out;
        @keyframes flutua {
            from{
            top: 35%;
        }
        to{
            top: 40%;
        }   
        }
        :hover{
            transform: scale(1.1);
            transition: 0.3s;
        }
    }
`
export const CardViagem = styled.div`
    display: flex;
    flex-flow: column wrap;
    text-align: start;
    padding: 20px;
    margin: 20px 0;
    width: 65%;
    border-radius: 20px;
    p{
        margin:10px;
    }
    transition: 0.3s;
        :hover{
            transform: scale(1.1);
            transition: 0.3s;
            box-shadow: 5px 5px 10px gray;
        }
`
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
`