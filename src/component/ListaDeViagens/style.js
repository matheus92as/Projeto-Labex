import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
`

export const CardViagem = styled.div`
    display: flex;
    flex-flow: column wrap;
    text-align: start;
    padding: 20px;
    margin: 20px 0;
    width: 85%;
    border-radius: 10px;
    background-color: rgba(68,68,68,0.8);
    border: 3px solid rgba(68,68,68,0.5);
    font-family: 'Electrolize', sans-serif;
    transition: 0.3s;
    position: relative;
    p{
        margin:10px;
        text-shadow: 2px 3px 5px #000000;
    }
    :hover{
        transform: scale(1.01);
        transition: 0.35s;
        box-shadow: 0px 0px 15px gray;
        ::before{
            opacity: 1;
        }
    }
    ::after{
        border-radius: inherit;
        content: "";
        height: 100%;
        left: 0px;
        opacity: 0;
        position: absolute;
        top: 0px;
        transition: opacity 500ms;
        width: 100%;
    }
    ::before{
        background: radial-gradient(
            800px circle at ${({ x }) => `${x}px`} 150px, 
            rgba(255,255,255,0.2), 
            transparent 40%); 
        transition: 0.35s;              
        border-radius: inherit;
        content: "";
        opacity:0;
        height: 100%;
        left: 0px;
        position: absolute;
        top: 0px;
        width: 100%;
        z-index: 2;
    }
    @media screen and (min-device-width:280px) and (max-device-width:425px){
        margin: 15px 0;
        p{
            font-size: 18px;
            margin-bottom: 0px;
        }
        }
    @media screen and (min-device-width:1740px) and (max-device-width:2560px){
        width: 45%;
        margin: 15px;
    }
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    @media screen and (min-device-width:1721px) and (max-device-width:2560px){
        flex-flow: row wrap;
    }
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
    @media screen and (min-device-width:280px) and (max-device-width:425px){
        width: 25%;
        height: 25%;
    }
`