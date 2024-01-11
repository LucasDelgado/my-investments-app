import { createContext } from 'react';
import { State } from './StoreReducer';
import { UserStore } from '../features/account/models/User';

type StoreContext = {
  state: State;
  toggleLoading: () => void;
  setUser: (user: UserStore) => void;
};

export const StoreContext = createContext<StoreContext>({} as StoreContext);
