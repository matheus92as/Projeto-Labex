import React from 'react'
import { AppDown, AppSocialBox, Infs, MainContainer, Social } from './styled'
import apple from '../../img/socialAppstore.png'
import google from '../../img/socialGoogleplay.png'
import face from '../../img/face.png'
import insta from '../../img/insta.png'
import twitter from '../../img/twitter.png'

const Footer = () => {
  return (
    <MainContainer>
        {/* <div>
        Footer

        </div> */}
        <AppSocialBox>
            <AppDown>
                <p>Baixe nosso aplicativo</p>
                <div>
                    <img src={apple}/>
                    <img src={google}/>
                </div>
            </AppDown>
            <Social>
                <p>Sigua nossa redes</p>
                <div>
                    <img src={face}/>
                    <img src={insta}/>
                    <img src={twitter}/>
                </div>
            </Social>
        </AppSocialBox>
        {/* <div>
        Footer
        </div> */}
        <Infs>
            <p>Labex Operadora e Agência de Viagens S.A - CNPJ: 15.768.260/00016-19 Rua da Lua, 227, 21 andar, sala 2211 | Bairro Espacial, Varginha - SP CEP: 91090-350</p>
        </Infs>
    </MainContainer>
  )
}

export default Footer