import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { voltarPag, areaLogado } from '../../routes/coordinator';
import { Background, MainContainer } from './style';
import { useForm } from '../../customHooks/Requests';

const Login = () => {
  const { formulario, onChange, limpaInputs } = useForm({ email: "", password: "" });
  const navegar = useNavigate()

  const clickFora = (event) => {
    let modal = document.getElementById("modal");
    if (!modal.contains(event.target)) {
      voltarPag(navegar)
    }
  }

  const logar = (event) => {
    event.preventDefault()
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/login",formulario)
        .then((response) => {
          limpaInputs()
          localStorage.setItem("token", response.data.token);
          areaLogado(navegar,"logado");
        }).catch((error) => {
          alert("Não foi possivel se logar")
          voltarPag(navegar);
        });
  };

  return (
    <Background onClick={clickFora}>
        <MainContainer id='modal'>
        <h1>Login</h1>
          <form onSubmit={logar}>
            <input
                name='email'
                placeholder='Email'
                type='email'
                value={formulario.email}
                onChange={onChange}
                required
            />
            <input
                name='password'
                placeholder='Senha'
                type='password'
                value={formulario.senha}
                onChange={onChange}
                required
            />
            <button>Enviar</button>
          </form>
          <button className='fechar' onClick={()=>voltarPag(navegar)}>
                X
          </button>
        </MainContainer>  
    </Background>
  )
}

export default Login