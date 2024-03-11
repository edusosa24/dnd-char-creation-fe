import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/charCampDetails/characterDetails.json';

export const Backstory = () => {
  const { register } = useFormContext();

  return (
    <section className={`${style.backstorySection}`}>
      <h2 className={`${style.sectionTitle}`}>Backstory:</h2>
      <div className={`${style.backstoryDiv}`}>
        <div className={`${style.backstoryFieldSet} h-96`}>
          <p className={`${style.backstoryLabel}`}>ALLIES & ORGNAIZATIONS</p>
          <textarea
            disabled
            {...register('backstory.alliesAndOrganizations')}
            className={`${style.backstoryTextArea}`}
          />
        </div>
        <div className={`${style.backstoryFieldSet} h-96`}>
          <p className={`${style.backstoryLabel}`}>
            ADDITIONAL FEATURES & TRAITS
          </p>
          <textarea
            disabled
            {...register('backstory.additionalFeaturesAndTraits')}
            className={`${style.backstoryTextArea}`}
          />
        </div>
        <div className={`${style.backstoryFieldSet} h-96`}>
          <p className={`${style.backstoryLabel}`}>TREASURE</p>
          <textarea
            disabled
            {...register('backstory.treasure')}
            className={`${style.backstoryTextArea}`}
          />
        </div>
        <div className={`${style.backstoryFieldSet} h-96`}>
          <p className={`${style.backstoryLabel}`}>CHARACTER BACKSTORY</p>
          <textarea
            disabled
            {...register('backstory.backstory')}
            className={`${style.backstoryTextArea}`}
          />
        </div>
      </div>
    </section>
  );
};
