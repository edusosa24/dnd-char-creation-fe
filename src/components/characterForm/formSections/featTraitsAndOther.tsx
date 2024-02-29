import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const FeatTraitsAndOther = () => {
  const { register } = useFormContext();

  return (
    <section className={`${style.featuresSection}`}>
      <h2 className={`${style.sectionTitle}`}>
        Feature traits and other proficiencies:
      </h2>
      <div className={`${style.featuresDiv}`}>
        <fieldset className={`${style.featuresFieldSet} h-40`}>
          <label className={`${style.featuresLabel}`}>PERSONALITY TRAITS</label>
          <textarea
            {...register('persTraits', { maxLength: 200 })}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-40`}>
          <label className={`${style.featuresLabel}`}>IDEALS</label>
          <textarea
            {...register('ideals', { maxLength: 200 })}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-40`}>
          <label className={`${style.featuresLabel}`}>BONDS</label>
          <textarea
            {...register('bonds', { maxLength: 200 })}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-40`}>
          <label className={`${style.featuresLabel}`}>FLAWS</label>
          <textarea
            {...register('flaws', { maxLength: 200 })}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-96`}>
          <label className={`${style.featuresLabel}`}>
            OTHER PROFICIENCIES & LANGUAGES
          </label>
          <textarea
            {...register('otherProfNLang', { maxLength: 1200 })}
            className={`${style.featuresTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-96`}>
          <label className={`${style.featuresLabel}`}>FEATURES & TRAITS</label>
          <textarea
            {...register('FeatNTraits', { maxLength: 1200 })}
            className={`${style.featuresTextArea} w-full`}
            maxLength={1200}
          />
        </fieldset>
      </div>
    </section>
  );
};
