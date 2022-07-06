import { Container, Content, Wapper } from './style';
import logo from '../../images/logoMaximaBank.svg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { NewTransaction } from '../Modal';

export function Header() {
  const { signOut, data } = useContext(AuthContext);
  const [transactionModal, setTransactionModal] = useState(false);

  function isOpen() {
    setTransactionModal(true);
  }

  function isClose() {
    setTransactionModal(false);
  }

  const navigate = useNavigate();

  const username = data.user.name;

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt='logo' />
        <Wapper>
          {username ? (
            <p>
              Olá, <strong>{username ? username : ''}</strong>
            </p>
          ) : (
            <></>
          )}
          <button type='button' onClick={isOpen}>
            Nova transação
          </button>
          <button onClick={handleSignOut} className='btn-sair ' type='button'>
            Sair
          </button>
          <NewTransaction isOpen={transactionModal} onRequestClose={isClose} />
        </Wapper>
      </Content>
    </Container>
  );
}
