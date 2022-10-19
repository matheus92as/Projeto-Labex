import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    min-height: 15vh;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 21px;
    font-family: 'Electrolize', sans-serif;
    text-shadow: 2px 5px 5px #000000;
    background-image: linear-gradient( rgba(255,0,0,0), #303030 40%);
`
export const AppSocialBox = styled.div`
    width: 90%;
    padding: 25px 0px;
    display: flex;
    justify-content: space-between;
`
export const AppDown = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img{
        cursor: pointer;
        width: 120px;
        margin-right: 10px;
    }
`
export const Social = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img{
        cursor: pointer;
        width: 45px;
        margin-right: 10px;
    }
`
export const Infs = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    p{
        font-size: 13px;
    }
`
export const Logo = styled.img`
    width: 200px;
`