import * as Yup from 'yup';

type UserStore = Omit<Yup.InferType<typeof UserSchemaLogin>, 'password'> & {
  uid: string;
  displayName?: string;
  isLogged: boolean;
};

const UserSchemaLogin = Yup.object({
  email: Yup.string()
    .email('Email es invalido')
    .required('El email es obligatorio'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});
type UserLogin = Yup.InferType<typeof UserSchemaLogin>;

const UserSchemaRegiser = UserSchemaLogin.shape({
  passwordConfirm: Yup.string()
    .required('La confirmación de la contraseña es obligatoria')
    .oneOf([Yup.ref('password'), ''], 'Las contraseñas deben coincidir'),
});

type UserRegister = Yup.InferType<typeof UserSchemaRegiser>;

export {
  UserSchemaLogin,
  UserLogin,
  UserSchemaRegiser,
  UserRegister,
  UserStore,
};
