import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AuthContext } from '../context/Auth/AuthContext';
import { CreateAccount } from '../pages/CreateAccount';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function AppRoutes() {
  const { data } = useContext(AuthContext);

  const Private = ({ children }: { children: JSX.Element }) => {
    if (!data.token) {
      return <Navigate to='/' />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route
          path='/home'
          element={
            <Private>
              <Home />
            </Private>
          }
        />

        <Route path='/createaccount' element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}
