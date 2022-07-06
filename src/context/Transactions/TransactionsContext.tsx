import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../../service/api';

export const TransactionContext = createContext<PropsTransactions>(
  {} as PropsTransactions
);

interface ITransactions {
  id_transaction: number;
  login_origin: string;
  login_destination: string;
  transaction_value: number;
  date: Date;
}

interface PropsTransactions {
  transactions: ITransactions[];
  balance: number;
  createTransactions: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProvider {
  children: ReactNode;
}

interface TransactionInput {
  login_origin: string;
  login_destination: string;
  transaction_value: number;
}

export function TransactionPovider({ children }: TransactionsProvider) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get('/transactions');
      setTransactions(response.data);
    }
    async function getBalance() {
      await api.get('/balance').then(function (response) {
        setBalance(Number(response.data.balance));
      });
    }

    getBalance();
    getTransactions();
  });

  async function createTransactions(transactions: TransactionInput) {
    await api.post('/transaction', transactions);
    // const { transaction } = response.data;

    // setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider
      value={{ transactions, balance, createTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
