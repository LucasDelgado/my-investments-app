import React, { useEffect, useReducer } from 'react';
import { StoreContext } from './StoreContext';
import { initialState, storeReducer } from './StoreReducer';
import { UserStore } from '../features/account/models/User';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import UserStoreAdapter from '../features/account/adapters/UserStoreAdapter';

type Props = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  //LOADING
  const toggleLoading = () => {
    dispatch({ type: 'TOGGLE_LOADING', value: !state.loading });
  };

  //SET DE USER FOR AUTH
  const setUser = (user: UserStore) => {
    dispatch({ type: 'SET_USER', value: user });
  };

  //AUTH LISTENER FOR USER LOGGED OR NOT
  useEffect(() => {
    const auth = getAuth();
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userStore = UserStoreAdapter(user);
        setUser(userStore);
      } else {
        setUser({} as UserStore);
      }
    });
    return () => unsuscribe();
  }, []);

  return (
    <StoreContext.Provider value={{ state, toggleLoading, setUser }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider };
