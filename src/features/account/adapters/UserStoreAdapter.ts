import { User } from 'firebase/auth';
import { UserStore } from '../models/User';

export default function UserStoreAdapter(userDtoRes: User): UserStore {
  const { uid, displayName, email } = userDtoRes;
  return {
    uid,
    displayName,
    email,
    isLogged: true,
  };
}
