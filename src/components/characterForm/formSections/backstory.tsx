import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const Backstory = () => {
  const { register } = useFormContext();

  return (
    <section className={`${style.backstorySection}`}>
      <h2 className={`${style.sectionTitle}`}>Backstory:</h2>
      <div className={`${style.backstoryDiv}`}>
        <fieldset className={`${style.backstoryFieldSet} h-96`}>
          <p className={`${style.backstoryLabel}`}>ALLIES & ORGNAIZATIONS</p>
          <textarea
            {...register('backstory.alliesAndOrganizations', {
              maxLength: 1200
            })}
            className={`${style.backstoryTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.backstoryFieldSet} h-96`}>
          <p className={`${style.backstoryLabel}`}>
            ADDITIONAL FEATURES & TRAITS
          </p>
          <textarea
            {...register('backstory.additionalFeaturesAndTraits', {
              maxLength: 1200
            })}
            className={`${style.backstoryTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.backstoryFieldSet} h-96`}>
          <p className={`${style.backstoryLabel}`}>TREASURE</p>
          <textarea
            {...register('backstory.treasure', { maxLength: 1200 })}
            className={`${style.backstoryTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.backstoryFieldSet} h-96`}>
          <p className={`${style.backstoryLabel}`}>CHARACTER BACKSTORY</p>
          <textarea
            {...register('backstory.backstory', { maxLength: 1200 })}
            className={`${style.backstoryTextArea}`}
            maxLength={1200}
          />
        </fieldset>
      </div>
    </section>
  );
};
