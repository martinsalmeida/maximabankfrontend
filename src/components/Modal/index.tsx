import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../../context/Auth/AuthContext';
import { TransactionContext } from '../../context/Transactions/TransactionsContext';
import { Container } from './style';

interface IModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({ isOpen, onRequestClose }: IModal) {
  const [destination, setDestination] = useState('');
  const [value, setValue] = useState('');

  const { data } = useContext(AuthContext);
  const { createTransactions } = useContext(TransactionContext);

  const user = data.user.login;

  const handleTransation = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      login_origin: user,
      login_destination: destination,
      transaction_value: Number(value),
    };

    await createTransactions(data);

    setDestination('');
    setValue('');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='ReactModal__Content'
    >
      <Container onSubmit={handleTransation}>
        <h2>Nova transação</h2>

        <input
          placeholder='Digite o usuário da conta destino'
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          placeholder='Digite o valor'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button type='submit'>Transferir</button>
      </Container>
    </Modal>
  );
}
