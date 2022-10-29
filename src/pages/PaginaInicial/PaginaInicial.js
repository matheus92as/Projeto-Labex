import React, { useEffect } from 'react'
import { CardViagem, MainContainer, Parallax, SecondContainer } from './style'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../component/Header/Header'
import ListaDeViagens from '../../component/ListaDeViagens/ListaDeViagens'
import InscriçãoViagem from '../../modal/InscriçãoViagem/InscriçãoViagem'
import Login from '../../modal/Login/Login'
import { pagInicial } from '../../routes/coordinator'
import Footer from '../../component/Footer/Footer'
import planeta from '../../img/planetaParalax.png'
import nave from '../../img/naveParalax.png'
import terra from '../../img/terraParalax.png'
import red from '../../img/red.png'
import { useState } from 'react'
import { PegaLista } from '../../customHooks/Requests'
import { useRef } from 'react'

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
          <img src={planeta} className='planeta'/>
          <h1>
            Encontre viagens espaciais, explore a galaxia, ou se preferir crie a própria viagem e chame os seus amigos!
          </h1>
        <img src={red} className='red'/>
        </Parallax>
        <div className='listbox'>
          <ListaDeViagens/>
        </div>
        <Footer id='footer'/>
      </SecondContainer>
    </MainContainer>
  )
}

export default PaginaInicial