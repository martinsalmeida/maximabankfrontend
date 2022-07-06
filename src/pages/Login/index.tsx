import { Container, Content } from './style';
import Logo from '../../images/logoMaximaBank.svg';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      login,
      password,
    };

    try {
      await signIn(data);
      navigate('/home');
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
            required
            type='email'
            placeholder='Digite o seu email'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            required
            type='password'
            placeholder='Digite a sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>ENTRAR</button>
        </form>
        <Link to='/createaccount'>
          <p>Abra a sua conta aqui!</p>
        </Link>
      </Content>
    </Container>
  );
}
