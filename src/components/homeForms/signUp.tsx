import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../utils/validators/signUpValidator';
import * as style from '../../assets/styles/components/homeForms/homeForms.json';
import { iUser } from '../../utils/interfaces/iUser';
import userServices from '../../services/userServices';

signUpSchema.required();

export const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const createAccount: SubmitHandler<iUser> = async (data: iUser) => {
    try {
      const response = await userServices.postOne(data);
      alert(`User ${response.username} successfully created`);
    } catch (err: any) {
      if (err.message.includes('400')) {
        setError('username', { message: '-username alredy exists' });
      } else {
        alert('Unexpected error');
      }
    }
  };

  return (
    <div
      className={`${style.def.component} ${style.xl.component} ${style.xxl.component}`}
    >
      <h3 className={`${style.def.title}`}>SIGN UP</h3>
      <form
        onSubmit={handleSubmit(createAccount)}
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
