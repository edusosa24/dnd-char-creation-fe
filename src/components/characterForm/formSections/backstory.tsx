import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const Backstory = () => {
  const { register } = useFormContext();

  return (
    <section className={`${style.featuresSection}`}>
      <h2 className={`${style.sectionTitle}`}>Backstory:</h2>
      <div className={`${style.featuresDiv}`}>
        <fieldset className={`${style.featuresFieldSet} h-96`}>
          <label className={`${style.featuresLabel}`}>
            ALLIES & ORGNAIZATIONS
          </label>
          <textarea
            {...register('alliesNOrg', { maxLength: 1200 })}
            className={`${style.featuresTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-96`}>
          <label className={`${style.featuresLabel}`}>
            ADDITIONAL FEATURES & TRAITS
          </label>
          <textarea
            {...register('addFeatsNTraits', { maxLength: 1200 })}
            className={`${style.featuresTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-96`}>
          <label className={`${style.featuresLabel}`}>TREASURE</label>
          <textarea
            {...register('treasure', { maxLength: 1200 })}
            className={`${style.featuresTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-96`}>
          <label className={`${style.featuresLabel}`}>
            CHARACTER BACKSTORY
          </label>
          <textarea
            {...register('charBackstory', { maxLength: 1200 })}
            className={`${style.featuresTextArea}`}
            maxLength={1200}
          />
        </fieldset>
      </div>
    </section>
  );
};
