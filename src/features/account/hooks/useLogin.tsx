import { useFormik } from 'formik';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import Toast from 'react-native-toast-message';
import { UserLogin, UserSchemaLogin, UserStore } from '../models/User';
import UserStoreAdapter from '../adapters/UserStoreAdapter';
import { useStore } from '../../../store/hooks/useStore';

const initialValues: UserLogin = {
  email: '',
  password: '',
};

export function useLogin() {
  const { setUser } = useStore();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: UserSchemaLogin,
    onSubmit: async (values) => {
      try {
        const auth = getAuth();
        const userDtoRes = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const userStore: UserStore = UserStoreAdapter(userDtoRes.user);
        setUser(userStore);
      } catch (error: any) {
        console.log(error.code);
        Toast.show({
          type: 'error',
          text1: 'Usuario o contraseña incorrectos',
          visibilityTime: 5000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      }
    },
  });

  //TODO NO ESTA COMPLETO
  const loginWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Error al iniciar sesion con Google',
        visibilityTime: 5000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  };

  return [formik, loginWithGoogle] as const;
}
