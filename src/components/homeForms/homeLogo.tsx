import * as style from '../../assets/styles/components/homeForms/homeLogo.json';

export const HomeLogo = () => {
  return (
    <section className={`${style.section}`}>
      <div className={`${style.logo}`} />
      <h2 className={`${style.title}`}>Character Creator</h2>
    </section>
  );
};
