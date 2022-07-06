import { createContext, useCallback, useState } from 'react';
import { api } from '../../service/api';

interface IAuthContext {
  data: IAuthState;
  signIn: ({ login, password }: IUser) => Promise<void>;
  signOut: () => void;
}

interface IUser {
  name?: string;
  login: string;
  password: string;
}

interface IAuthState {
  token: string;
  user: any;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [data, SetData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@token');
    const user = localStorage.getItem('@user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = async ({ login, password }: IUser) => {
    const response = await api.post('/authenticate', {
      login,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    localStorage.setItem('@token', token);
    localStorage.setItem('@user', JSON.stringify(user));

    SetData({ token, user });
  };

  const signOut = useCallback(() => {
    localStorage.removeItem('@token');
    localStorage.removeItem('@user');

    SetData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
