import { Container, Content } from './style';
import Logo from '../../images/logoMaximaBank.svg';
import React, { FormEvent, useState } from 'react';
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export function CreateAccount() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      name,
      login,
      password,
    };

    try {
      await api.post('/user', data);

      toast.success('Cliente criado com sucesso!');
      navigate('/');
    } catch (error: any) {
      if (error.response.data) {
        const erro = error.response.data.message;
        return toast.error(erro);
      }

      toast.error('Ops!! Ocorreu um erro em nosso servidor!');
    }
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <img src={Logo} alt='logomarca' />
          <input
            type='text'
            placeholder='Digite o seu Nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Digite o seu email'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type='password'
            placeholder='Digite a sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>CRIAR CONTA</button>
        </form>
        <Link to='/'>
          <p>Voltar</p>
        </Link>
      </Content>
    </Container>
  );
}
