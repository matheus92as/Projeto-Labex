import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MainContainer, ListContainer, BoxList, Planet, CardViagem} from './style'
import { abreInscriçãoDeslogado, abreInscriçãoLogado } from '../../routes/coordinator'
import { PegaLista } from '../../customHooks/Requests'
import planeta from '../../img/planeta.png'
import { useState } from 'react'
import moment from 'moment/moment'

const ListaDeViagens = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});
    const viagens = PegaLista()
    const navegar = useNavigate()
    const params = useParams()

    const mouseMove = event => {
        setCoords({
          x: event.clientX - event.target.offsetLeft,
          y: event.clientY - event.target.offsetTop,
        });
    };

    const cardsViagens = viagens.map((viagem)=>{
        return(
            <CardViagem onMouseMove={mouseMove} x={coords.x} y={coords.y} key={viagem.id}>
                <p><strong>Nome: </strong>{viagem.name}</p>
                <p><strong>Descrição: </strong>{viagem.description}</p>
                <p><strong>Planeta: </strong>{viagem.planet}</p>
                <p><strong>Duração: </strong>{viagem.durationInDays}</p>
                <p><strong>Data: </strong>{moment(viagem.date).format("DD/MM/YYYY")}</p>
            </CardViagem>
        )
    })

  return (
    <MainContainer>
        <BoxList>
            {params.log === "logado"?
            <Planet src={planeta} alt="planeta" onClick={()=>abreInscriçãoLogado(navegar,"inscricao")}/>
            :
            <Planet src={planeta} alt="planeta" onClick={()=>abreInscriçãoDeslogado(navegar, "inscricao")}/>
            }
            <ListContainer>
                {cardsViagens}
            </ListContainer>
        </BoxList>
    </MainContainer>
  )
}

export default ListaDeViagens