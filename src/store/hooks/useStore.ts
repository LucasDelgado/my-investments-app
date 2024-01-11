import { useContext } from 'react';
import { StoreContext } from '../StoreContext';

export const useStore = () => {
  const { state, toggleLoading, setUser } = useContext(StoreContext);
  return { state, toggleLoading, setUser };
};
