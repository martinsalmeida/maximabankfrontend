import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { TransactionContext } from '../../context/Transactions/TransactionsContext';
import { Container } from './style';

export function Table() {
  const { data } = useContext(AuthContext);
  const { transactions } = useContext(TransactionContext);

  const user = data.user.login;

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Origem</th>
            <th>Destinatário</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction: any) => (
            <tr key={transaction.id_transaction}>
              <td>
                {user === transaction.login_destination ? 'Crédito' : 'Débito'}
              </td>
              <td className='withdraw'>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.transaction_value)}
              </td>
              <td>
                {' '}
                {user === transaction.login_origin
                  ? 'Minha conta'
                  : transaction.login_origin}
              </td>
              <td>
                {' '}
                {user === transaction.login_destination
                  ? 'Minha conta'
                  : transaction.login_destination}
              </td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.date)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
