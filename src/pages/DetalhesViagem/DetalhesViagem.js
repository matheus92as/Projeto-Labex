import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../component/Header/Header'
import { decisao, PegaDetalhe } from '../../customHooks/Requests'
import { pagGerenciar, pagInicial } from '../../routes/coordinator'
import { ListaCandidatos, MainContainer } from './styled'
import voltaNave from '../../img/voltaNave.png'

const DetalhesViagem = () => {
  const navegar = useNavigate()
  const params = useParams()
  const id = params.id
  const detalhes = PegaDetalhe(id)
  const candidatos = detalhes.candidates
  const aprovados = detalhes.approved
 
  useEffect(()=>{
    const token =localStorage.getItem("token");
    if(token === null){
      pagInicial(navegar)
    }
  },[])

  return (
    <MainContainer>
      <Header/>
      <div className='voltar'>
        <div onClick={()=>pagGerenciar(navegar,"gerenciar")}>
            <img src={voltaNave} alt="Nave de volta"/>
            <button>Voltar</button>
        </div>
      </div>
      <h1>{detalhes.name}</h1>
      <div>
      <p><strong>Nome: </strong>{detalhes.name}</p>
      <p><strong>Descrição: </strong>{detalhes.description}</p>
      <p><strong>Planeta: </strong>{detalhes.planet}</p>
      <p><strong>Duração: </strong>{detalhes.durationInDays} dias</p>
      <p><strong>Data de saida: </strong>{detalhes.date}</p>
      </div>
      <h1>Candidatos Pendentes</h1>
      {candidatos && candidatos.length > 0 ? detalhes.candidates.map((candidato)=>{
       return(
          <ListaCandidatos key={candidato.id}>
              <p><strong>Nome: </strong>{candidato.name}</p>
              <p><strong>Idade: </strong>{candidato.age}</p>
              <p><strong>País: </strong>{candidato.country}</p>
              <p><strong>Pofissão: </strong>{candidato.profession}</p>
              <p><strong>Motivação: </strong>{candidato.applicationText}</p>
              <div className='botoes'>
                <button onClick={()=> decisao(id,candidato.id,true)}>Aprovar</button>           
                <button onClick={()=> decisao(id,candidato.id,false)}>Reprovar</button> 
              </div>
           </ListaCandidatos>
      )
      }) : <p>Nenhum candidato pendente</p>}
      <h1>Candidatos Aprovados</h1>
      {aprovados && aprovados.length > 0 ? aprovados.map((candidato)=>{
       return(
          <ListaCandidatos  key={candidato.id}>
             <p><strong>Nome: </strong>{candidato.name}</p>
          </ListaCandidatos>
      )
      }) : <p>Nenhum candidato aprovado</p>}
    </MainContainer>
  )
}
export default DetalhesViagem