import { SignUp } from '../components/homeForms/signUp';

export const Home = () => {
  // Default size
  const container =
    'container flex min-w-full min-h-full bg-home-signup bg-cover bg-center bg-no-repeat flex-col p-10 self-center mx-auto justify-around items-center';
  const section = 'flex flex-col justify-center w-max';
  const logo = 'bg-dnd-logo  bg-center bg-contain bg-no-repeat w-40 h-24';
  const title =
    'font-bold self-center text-md text-white bg-black bg-opacity-10 w-max select-none';

  // 768px
  const mdContainer = 'md:flex-row';
  const mdLogo = 'md:w-60 md:h-36';
  const mdTitle = 'md:text-2xl';

  // 1280px
  const xlLogo = 'xl:h-44 xl:w-96';
  const xlTitle = 'xl:text-3xl';

  // 1536px
  const xxlContainer = '2xl:pl-[10%] 2xl:pr-[10%]';
  const xxlLogo = '2xl:h-56 2xl:w-128';
  const xxlTitle = '2xl:text-4xl';

  return (
    <div className={`${container} ${mdContainer} ${xxlContainer}`}>
      <section className={`${section}`}>
        <div className={`${logo} ${mdLogo} ${xlLogo} ${xxlLogo}`} />
        <h2 className={`${title} ${mdTitle} ${xlTitle} ${xxlTitle}`}>
          Character Creator
        </h2>
      </section>
      <SignUp />
    </div>
  );
};
