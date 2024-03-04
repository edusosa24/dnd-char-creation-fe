import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../utils/validators/signUpValidator';
import * as style from '../../assets/styles/components/homeForms/homeForms.json';
import { iUser } from '../../utils/interfaces/iUser';
import userServices from '../../services/userServices';
import { useAppDispatch } from '../../utils/hooks';
import { setNotification } from '../../reducers/notificationReducer';
import { useNavigate } from 'react-router-dom';

signUpSchema.required();

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const createAccount: SubmitHandler<iUser> = async (data: iUser) => {
    try {
      const response = await userServices.postOne(data);
      dispatch(
        setNotification(
          `User ${response.username} successfully created.`,
          'success',
          2
        )
      );
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err: any) {
      if (err.message.includes('400')) {
        setError('username', { message: '-username alredy exists' });
      } else {
        dispatch(setNotification('An unexpected error ocurred.', 'error', 3));
      }
    }
  };

  return (
    <div className={`${style.component}`}>
      <h3 className={`${style.title}`}>SIGN UP</h3>
      <form onSubmit={handleSubmit(createAccount)} className={`${style.form}`}>
        <fieldset className={`${style.fieldset}`}>
          <label htmlFor="username" className={`${style.label}`}>
            username
          </label>
          <input {...register('username')} className={`${style.input}`} />
          <p className={`${style.error}`}> {errors.username?.message}</p>
        </fieldset>
        <fieldset className={`${style.fieldset}`}>
          <label htmlFor="password" className={`${style.label}`}>
            password
          </label>
          <input
            type="password"
            {...register('password')}
            className={`${style.input}`}
          />
          <p className={`${style.error} `}> {errors.password?.message}</p>
        </fieldset>
        <button type="submit" className={`${style.button}`}>
          Register
        </button>
      </form>
      <p className="text-center text-sm">
        Already have an account?{' '}
        <a href="/" className="font-bold text-red-600 hover:text-red-500">
          login
        </a>
      </p>
    </div>
  );
};
