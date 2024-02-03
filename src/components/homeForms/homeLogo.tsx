import * as style from '../../assets/styles/components/homeLogo.json';

export const HomeLogo = () => {
  return (
    <section className={`${style.def.section}`}>
      <div
        className={`${style.def.logo} ${style.md.mdLogo} ${style.xl.xlLogo} ${style.xxl.xxlLogo}`}
      />
      <h2
        className={`${style.def.title} ${style.md.mdTitle} ${style.xl.xlTitle} ${style.xxl.xxlTitle}`}
      >
        Character Creator
      </h2>
    </section>
  );
};
