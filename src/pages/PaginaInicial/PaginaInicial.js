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

const PaginaInicial = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
  const viagens = PegaLista()
  const params = useParams()
  const navegar = useNavigate()

  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  const cardsViagens = viagens.map((viagem)=>{
    return(
        <CardViagem onMouseMove={handleMouseMove} x={coords.x} y={coords.y} key={viagem.id}>
            <p><strong>Nome: </strong>{viagem.name}</p>
            <p><strong>Descrição: </strong>{viagem.description}</p>
            <p><strong>Planeta: </strong>{viagem.planet}</p>
            <p><strong>Duração: </strong>{viagem.durationInDays}</p>
            <p><strong>Data: </strong>{viagem.date}</p>
        </CardViagem>
    )
  })

  useEffect(()=>{
    const handleWindowMouseMove = event => {
        setGlobalCoords({
          x: event.screenX,
          y: event.screenY,
        });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
  
    return () => {
        window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  },[])

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
          {cardsViagens}
          {/* <ListaDeViagens x={coords.x} y={coords.y} mouseMove={handleMouseMove}/> */}
        </div>
        <Footer id='footer'/>
      </SecondContainer>
    </MainContainer>
  )
}

export default PaginaInicial