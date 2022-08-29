import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../component/Header/Header'
import ListaGerencia from '../../component/ListaGerencia/ListaGerencia'
import CriarViagem from '../../modal/CriarViagem/CriarViagem'
import { abreViagem, pagInicial, areaLogado } from '../../routes/coordinator'
import { MainContainer } from './style'
import nave from '../../img/nave.png'
import voltaNave from '../../img/voltaNave.png'

const PaginaGerenciar = () => {
    const navegar = useNavigate()
    const params = useParams()

    useEffect(()=>{
        const token =localStorage.getItem("token");
        if(token === null){
          console.log("não esta logado")
          pagInicial(navegar)
        }
    },[])

  return (
    <MainContainer>
        <Header></Header>
        {params.modal === "novaViagem" ? <CriarViagem/> : null}
        <div className='botoes'>
            <div onClick={()=>areaLogado(navegar,"logado")}>
              <img src={voltaNave} alt="Nave de volta"/>
              <button>Voltar</button>
            </div>
            <div onClick={()=>abreViagem(navegar,"novaViagem")}>
              <img src={nave} alt="Nave de ida"/>
              <button>Criar Viagem</button>
            </div>       
        </div>
        <h1>Viagens para gerenciar</h1>
        <ListaGerencia/>
    </MainContainer>
  )
}
export default PaginaGerenciar