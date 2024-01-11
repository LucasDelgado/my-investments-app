import { UserStore } from '../features/account/models/User';

const initialState: State = {
  loading: false,
  user: {
    uid: '',
    email: '',
    isLogged: false,
  },
};

type State = {
  loading: boolean;
  user?: UserStore;
  investments?: any[];
};

type Action =
  | { type: 'TOGGLE_LOADING'; value: boolean }
  | { type: 'SET_USER'; value: UserStore };

const storeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_LOADING': {
      return {
        ...state,
        loading: action.value,
      };
    }
    case 'SET_USER': {
      return {
        ...state,
        user: action.value,
      };
    }
    default:
      return state;
  }
};

export { initialState, storeReducer, State };
