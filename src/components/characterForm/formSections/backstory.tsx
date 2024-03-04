import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const Backstory = () => {
  const { register } = useFormContext();

  return (
    <section className={`${style.backstorySection}`}>
      <h2 className={`${style.sectionTitle}`}>Backstory:</h2>
      <div className={`${style.backstoryDiv}`}>
        <fieldset className={`${style.backstoryFieldSet} h-96`}>
          <label className={`${style.backstoryLabel}`}>
            ALLIES & ORGNAIZATIONS
          </label>
          <textarea
            {...register('backstory.alliesAndOrganizations', {
              maxLength: 1200
            })}
            className={`${style.backstoryTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.backstoryFieldSet} h-96`}>
          <label className={`${style.backstoryLabel}`}>
            ADDITIONAL FEATURES & TRAITS
          </label>
          <textarea
            {...register('backstory.additionalFeaturesAndTraits', {
              maxLength: 1200
            })}
            className={`${style.backstoryTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.backstoryFieldSet} h-96`}>
          <label className={`${style.backstoryLabel}`}>TREASURE</label>
          <textarea
            {...register('backstory.treasure', { maxLength: 1200 })}
            className={`${style.backstoryTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.backstoryFieldSet} h-96`}>
          <label className={`${style.backstoryLabel}`}>
            CHARACTER BACKSTORY
          </label>
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
