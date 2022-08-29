import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {CardViagem, MainContainer, ListContainer} from './style'
import { abreInscriçãoDeslogado, abreInscriçãoLogado } from '../../routes/coordinator'
import { PegaLista } from '../../customHooks/Requests'
import planeta from '../../img/planeta.png'

const ListaDeViagens = () => {
    const viagens = PegaLista()
    const navegar = useNavigate()
    const params = useParams()

    const cardsViagens = viagens.map((viagem)=>{
        return(
            <CardViagem key={viagem.id}>
                <p><strong>Nome: </strong>{viagem.name}</p>
                <p><strong>Descrição: </strong>{viagem.description}</p>
                <p><strong>Planeta: </strong>{viagem.planet}</p>
                <p><strong>Duração: </strong>{viagem.durationInDays}</p>
                <p><strong>Data: </strong>{viagem.date}</p>
            </CardViagem>
        )
    })

  return (
    <MainContainer>
        {params.log === "logado"?
        <img src={planeta} alt="planeta" onClick={()=>abreInscriçãoLogado(navegar,"inscricao")}/>
        :
        <img src={planeta} alt="planeta" onClick={()=>abreInscriçãoDeslogado(navegar, "inscricao")}/>
        }
        <ListContainer>
            {cardsViagens}
        </ListContainer>
    </MainContainer>
  )
}

export default ListaDeViagens