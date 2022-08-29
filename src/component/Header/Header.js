import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { pagGerenciar, pagInicial, abreLogin } from '../../routes/coordinator'
import { MainContainer } from './style'
import astronauta from '../../img/astronauta.png'
import sistema2 from '../../img/sistema2.png'

const Header = () => {
    const navegar = useNavigate()
    const params = useParams()

  return (
    <MainContainer>
        <h1>Labex</h1>
        {params.log === "logado" || params.modal === "novaViagem" || params.page === "gerenciar" 
        || params.id
        ? 
        <div >
          {params.modal === "novaViagem" || params.page === "gerenciar" || params.modal === "inscricao" || params.id ? 
              <div className='logout' onClick={()=>pagInicial(navegar)}>
                <img src={astronauta} alt="Astronauta"/>
                <button>Logout</button>
              </div>
          :
          <div className='botoes'>
            <div className='gerenciar' onClick={()=>pagGerenciar(navegar,"gerenciar")}>
              <img src={sistema2} alt="Astronauta"/>
              <button>Gerenciar</button>
            </div>
            <div className='logout' onClick={()=>pagInicial(navegar)}>
              <img src={astronauta} alt="Astronauta"/>
              <button>Logout</button>
            </div>
          </div>
          }         
        </div>
        :
        <div className='login' onClick={()=>abreLogin(navegar,"login")}>
          <img src={astronauta} alt="Astronauta"/>
          <button >Login</button>
        </div>
        }
    </MainContainer>
  )
}

export default Header