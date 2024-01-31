import { useAppDispatch } from '../../utils/hooks';
import { createUser } from '../../reducers/userReducer';

export const SignUp = () => {
  const dispatch = useAppDispatch();

  const createAccount = async (event: any) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    event.target.username.value = '';
    event.target.password.value = '';
    dispatch(createUser({ username, password }));
  };

  // Default
  const component =
    'flex flex-col bg-stone-100 p-8 rounded-lg justify-between bg-opacity-50 h-96 w-72';
  const title = 'font-extrabold text-2xl text-center text-red-600 select-none';
  const form =
    'flex flex-col justify-around align-middle items-center p-5 h-4/6';
  const label = 'text-sm text-red-600 font-bold select-none';
  const input =
    'border-2 border-gray-300 hover:border-gray-500 focus:border-gray-500 rounded-sm p-1 ring-red-600 focus:ring-2 outline-none';
  const button =
    'text-center text-white p-3 mt-10 rounded-lg bg-red-600 hover:bg-red-700 shadow-lg transform active:scale-90 transition-transform select-none';

  // 1280px
  const xlComponent = 'xl:h-96 xl:w-96';
  const xlButton = 'xl:h-16 xl:w-32 xl:text-lg';

  // 1536px
  const xxlComponent = '2xl:h-[29rem] 2xl:w-[27rem]';
  const xxlform = '2xl:h-5/6 2xl:pt-[15%] 2xl:pb-[15%]';

  return (
    <div className={`${component} ${xlComponent} ${xxlComponent}`}>
      <h3 className={`${title}`}>SIGN UP</h3>
      <form onSubmit={createAccount} className={`${form} ${xxlform}`}>
        <fieldset className="flex flex-col w-full justify-around">
          <label htmlFor="username" className={`${label}`}>
            username
          </label>
          <input type="text" name="username" className={`${input}`} />
        </fieldset>
        <fieldset className="flex flex-col w-full justify-around">
          <label htmlFor="password" className={`${label}`}>
            password
          </label>
          <input type="password" name="password" className={`${input}`} />
        </fieldset>
        <button type="submit" className={`${button} ${xlButton}`}>
          Register
        </button>
      </form>
      <p className="text-center text-sm">
        Already have an account?{' '}
        <a href="" className="font-bold text-red-600 hover:text-red-500">
          login
        </a>
      </p>
    </div>
  );
};
