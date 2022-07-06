import React from 'react';
import { AuthProvider } from './context/Auth/AuthContext';
import { AppRoutes } from './Routes/';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { TransactionPovider } from './context/Transactions/TransactionsContext';
Modal.setAppElement('#root');

function App() {
  return (
    <AuthProvider>
      <TransactionPovider>
        <>
          <AppRoutes />
          <ToastContainer
            position='bottom-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <GlobalStyle />
        </>
      </TransactionPovider>
    </AuthProvider>
  );
}

export default App;
