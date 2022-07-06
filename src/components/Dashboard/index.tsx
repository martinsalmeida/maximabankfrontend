import { Table } from '../Table';
import { BsCurrencyDollar } from 'react-icons/bs';

import { Container, Wapper, Header, Footer, Card } from './style';
import { useContext } from 'react';
import { TransactionContext } from '../../context/Transactions/TransactionsContext';

export function Dashboard() {
  const { balance } = useContext(TransactionContext);

  return (
    <Container>
      <Wapper>
        <Card className='total'>
          <Header>
            <p>Total</p>
            <BsCurrencyDollar size={24} color='#c69a07' />
          </Header>
          <Footer>
            <strong>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(balance)}
            </strong>
          </Footer>
        </Card>
      </Wapper>
      <Table />
    </Container>
  );
}
