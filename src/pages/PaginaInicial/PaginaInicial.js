import React, { useEffect } from 'react'
import { MainContainer, Parallax, SecondContainer } from './style'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../component/Header/Header'
import ListaDeViagens from '../../component/ListaDeViagens/ListaDeViagens'
import InscriçãoViagem from '../../modal/InscriçãoViagem/InscriçãoViagem'
import Login from '../../modal/Login/Login'
import { pagInicial } from '../../routes/coordinator'
import Footer from '../../component/Footer/Footer'
import planeta from '../../img/planetaParalax.png'
import teste from '../../img/teste.png'
import nave from '../../img/naveParalax.png'
import terra from '../../img/terraParalax.png'

const PaginaInicial = () => {
  const params = useParams()
  const navegar = useNavigate()

  useEffect(()=>{
    const token =localStorage.getItem("token");
    if(token === null){
      console.log("não esta logado")
      pagInicial(navegar)
    }
  },[])

  return (
    <MainContainer>
        {params.modal === "inscricao"? <InscriçãoViagem/> : null}
        {params.modal === "login" ? <Login/> : null}
      <SecondContainer>
        <Header/>
        <Parallax>
          <img src={terra} className='terra'/>
          <img src={nave} className='nave'/>
          <img src={teste} className='planeta'/>
          <h1>
            Encontre viagens espaciais, explore a galaxia, ou se preferir crie a própria viagem e chame os seus amigos!
          </h1>
        </Parallax>
        <ListaDeViagens/>
        <Footer/>
      </SecondContainer>
    </MainContainer>
  )
}

export default PaginaInicial