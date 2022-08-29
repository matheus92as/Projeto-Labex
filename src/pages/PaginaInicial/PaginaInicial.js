import React, { useEffect } from 'react'
import { MainContainer } from './style'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../component/Header/Header'
import ListaDeViagens from '../../component/ListaDeViagens/ListaDeViagens'
import InscriçãoViagem from '../../modal/InscriçãoViagem/InscriçãoViagem'
import Login from '../../modal/Login/Login'
import { pagInicial } from '../../routes/coordinator'

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
        <Header/>
        {params.modal === "inscricao"? <InscriçãoViagem/> : null}
        {params.modal === "login" ? <Login/> : null}
        <h1>
          Encontre viagens espaciais, explore a galaxia, ou se preferir cadastre-se, crie a propria viagem e chame os seus amigos
        </h1>
          <ListaDeViagens/>
    </MainContainer>
  )
}

export default PaginaInicial