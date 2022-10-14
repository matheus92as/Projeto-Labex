import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    /* margin: 200px 0; */
`
export const CardViagem = styled.div`
    display: flex;
    flex-flow: column wrap;
    text-align: start;
    padding: 20px;
    margin: 20px 0;
    width: 85%;
    border-radius: 10px;
    background-color: rgba(68,68,68,0.4);
    font-family: 'Electrolize', sans-serif;
    p{
        margin:10px;
    }
    transition: 0.3s;
        :hover{
            transform: scale(1.01);
            transition: 0.35s;
            box-shadow: 0px 0px 15px gray;
        }
`
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
`
export const BoxList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    position: relative;
`

export const Planet =styled.img`
    cursor: pointer;
    position: sticky;
    margin-top: 0%;
    z-index: 1;
    align-self: flex-start;
    width: 120px;
    height: 120px;
    transition: 0.3s;
    animation: flutua 2.5s infinite alternate ease-in-out;
    @keyframes flutua {
        from{
        top: 60%;
    }
    to{
        top: 65%;
    }   
    }
    :hover{
        transform: scale(1.1);
        transition: 0.3s;
    }
`