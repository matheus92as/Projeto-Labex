import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PegaLista } from '../../customHooks/Requests'
import { abreDetalhes } from '../../routes/coordinator'
import { CardLista, MainContainer } from './style'
import rostoBuracoNegro from '../../img/rostoBuracoNegro.png'
import buracoNegro from '../../img/buracoNegro.png'
import axios from 'axios'

const ListaGerencia = () => {
    const viagens = PegaLista()
    const navegar = useNavigate()
   
    const excluiViagem = (id) =>{
        if(window.confirm("Quer mesmo excluir esta viagem?")){
            const token = localStorage.getItem("token");
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/trips/${id}`,{headers:{auth:token}})
        }
    }


    const listaGerenciavel = viagens.map((viagem)=>{
        return(
            <CardLista key={viagem.id} >
                <div onClick={()=>abreDetalhes(navegar,`${viagem.id}`)}>
                    <p><strong>Nome: </strong>{viagem.name}</p>
                </div>
                <div className='excluir' onClick={()=>excluiViagem(viagem.id)}>
                    <img className='img1' src={rostoBuracoNegro} alt="Excluir"></img>
                    <img className='img2' src={buracoNegro}></img>
                </div>
            </CardLista>
        )
    })

  return (
    <MainContainer>
        {listaGerenciavel}
    </MainContainer>
  )
}

export default ListaGerencia