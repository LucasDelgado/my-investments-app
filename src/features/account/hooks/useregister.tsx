import { useFormik } from 'formik';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import { UserRegister, UserSchemaRegiser, UserStore } from '../models/User';
import UserStoreAdapter from '../adapters/UserStoreAdapter';
import { useStore } from '../../../store/hooks/useStore';

const initialValues: UserRegister = {
  email: '',
  password: '',
  passwordConfirm: '',
};

export function useRegister() {
  const { setUser } = useStore();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: UserSchemaRegiser,
    onSubmit: async (values) => {
      try {
        const auth = getAuth();
        const userDtoRes = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const userStore: UserStore = UserStoreAdapter(userDtoRes.user);
        setUser(userStore);
      } catch (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Error al crear la cuenta',
          visibilityTime: 5000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      }
    },
  });
  return [formik];
}
