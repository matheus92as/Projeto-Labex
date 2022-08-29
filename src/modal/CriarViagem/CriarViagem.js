import React, { useState } from 'react'
import { Background, MainContainer } from './style'
import { useNavigate } from 'react-router-dom'
import { pagGerenciar, voltarPag } from '../../routes/coordinator'
import { useForm } from '../../customHooks/Requests'
import {Planetas} from '../../constants/Planetas'
import axios from 'axios'

const CriarViagem = () => {
    const [atualiza,setAtualiza] = useState(false)
    const navegar = useNavigate()
    const { formulario, onChange, limpaInputs } = useForm(
      { name: "", date: "", description: "", durationInDays: "", planet: "" }
    );

    const novaViagem =(event)=>{
      event.preventDefault()
      const token = localStorage.getItem("token");
      axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/trips`,formulario,{headers:{auth:token}})
      .then((resposta)=>{
        alert("Viagem criada com sucesso")
        pagGerenciar(navegar,"gerenciar")
      }).catch((erro)=>{
        console.log(erro)
      })
    }

  return (
    <Background>
        <MainContainer>
        <h1>Crie sua Viagem</h1>
          <form onSubmit={novaViagem}>
            <select name="planet" value={formulario.planet} onChange={onChange}>
              <option value={""}> Selecione um Planeta</option>
              {Planetas()}
            </select>
              <input
                  name='name'
                  placeholder='Nome para a Viagem'
                  type='text'
                  value={formulario.name}
                  onChange={onChange}
                  required
              />
              <input
                  name='date'
                  placeholder='Data de saída'
                  type='date'
                  value={formulario.date}
                  onChange={onChange}
                  required
                  pattern='^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$'
              />
              <input
                  name='description'
                  placeholder='Descreva a viagem'
                  type='text'
                  value={formulario.description}
                  onChange={onChange}
                  required
              />
              <input
                  name='durationInDays'
                  placeholder='Quanto tempo de viagem'
                  type='number'
                  value={formulario.durationInDays}
                  onChange={onChange}
                  required
              />
              <button>Enviar</button>
            </form>
            <button onClick={()=>voltarPag(navegar)}>
                Voltar
            </button>
        </MainContainer>
    </Background>
  )
}

export default CriarViagem