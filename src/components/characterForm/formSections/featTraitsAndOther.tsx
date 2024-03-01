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
            {...register(
              'featuresTraitsAndOtherProficiencies.personalityTraits',
              { maxLength: 200 }
            )}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-40`}>
          <label className={`${style.featuresLabel}`}>IDEALS</label>
          <textarea
            {...register('featuresTraitsAndOtherProficiencies.ideals', {
              maxLength: 200
            })}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-40`}>
          <label className={`${style.featuresLabel}`}>BONDS</label>
          <textarea
            {...register('featuresTraitsAndOtherProficiencies.bonds', {
              maxLength: 200
            })}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-40`}>
          <label className={`${style.featuresLabel}`}>FLAWS</label>
          <textarea
            {...register('featuresTraitsAndOtherProficiencies.flaws', {
              maxLength: 200
            })}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-96`}>
          <label className={`${style.featuresLabel}`}>
            OTHER PROFICIENCIES & LANGUAGES
          </label>
          <textarea
            {...register(
              'featuresTraitsAndOtherProficiencies.otherProficienciesAndLanguages',
              { maxLength: 1200 }
            )}
            className={`${style.featuresTextArea}`}
            maxLength={1200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-96`}>
          <label className={`${style.featuresLabel}`}>FEATURES & TRAITS</label>
          <textarea
            {...register(
              'featuresTraitsAndOtherProficiencies.featuresAndTraits',
              { maxLength: 1200 }
            )}
            className={`${style.featuresTextArea} w-full`}
            maxLength={1200}
          />
        </fieldset>
      </div>
    </section>
  );
};
