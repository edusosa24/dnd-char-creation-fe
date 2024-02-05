import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/validators/loginValidator';
import * as style from '../../assets/styles/components/homeForms/homeForms.json';
import { iUser } from '../../utils/interfaces/iUser';
import { useAppDispatch } from '../../utils/hooks';
import { loginUser } from '../../reducers/sessionReducer';
import { useNavigate } from 'react-router-dom';
import { setNotification } from '../../reducers/notificationReducer';
import { saveStorage } from '../../utils/functions';

loginSchema.required();

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ resolver: yupResolver(loginSchema) });

  const login: SubmitHandler<iUser> = async (data: iUser) => {
    try {
      const response = await dispatch(loginUser(data));
      dispatch(setNotification('Login in, please wait.', 'info', 2));
      saveStorage(response);
      setTimeout(() => {
        navigate(`/profile/${response.username}`);
      }, 2000);
    } catch (err: any) {
      dispatch(
        setNotification('username or password is incorrect.', 'error', 3)
      );
    }
  };

  return (
    <div
      className={`${style.def.component} ${style.xl.component} ${style.xxl.component}`}
    >
      <h3 className={`${style.def.title}`}>LOGIN</h3>
      <form
        onSubmit={handleSubmit(login)}
        className={`${style.def.form} ${style.xxl.form}`}
      >
        <fieldset className={`${style.def.fieldset}`}>
          <label htmlFor="username" className={`${style.def.label}`}>
            username
          </label>
          <input {...register('username')} className={`${style.def.input}`} />
          <p className={`${style.def.error}`}> {errors.username?.message}</p>
        </fieldset>
        <fieldset className={`${style.def.fieldset}`}>
          <label htmlFor="password" className={`${style.def.label}`}>
            password
          </label>
          <input
            type="password"
            {...register('password')}
            className={`${style.def.input}`}
          />
          <p className={`${style.def.error} `}> {errors.password?.message}</p>
        </fieldset>
        <button
          type="submit"
          className={`${style.def.button} ${style.xl.button}`}
        >
          Sign in
        </button>
      </form>
      <p className="text-center text-sm">
        Don't have an account?{' '}
        <a href="/signup" className="font-bold text-red-600 hover:text-red-500">
          Sign Up
        </a>
      </p>
    </div>
  );
};
