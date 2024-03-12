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
          <p className={`${style.featuresLabel}`}>PERSONALITY TRAITS</p>
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
          <p className={`${style.featuresLabel}`}>IDEALS</p>
          <textarea
            {...register('featuresTraitsAndOtherProficiencies.ideals', {
              maxLength: 200
            })}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-40`}>
          <p className={`${style.featuresLabel}`}>BONDS</p>
          <textarea
            {...register('featuresTraitsAndOtherProficiencies.bonds', {
              maxLength: 200
            })}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-40`}>
          <p className={`${style.featuresLabel}`}>FLAWS</p>
          <textarea
            {...register('featuresTraitsAndOtherProficiencies.flaws', {
              maxLength: 200
            })}
            className={`${style.featuresTextArea}`}
            maxLength={200}
          />
        </fieldset>
        <fieldset className={`${style.featuresFieldSet} h-96`}>
          <p className={`${style.featuresLabel}`}>
            OTHER PROFICIENCIES & LANGUAGES
          </p>
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
          <p className={`${style.featuresLabel}`}>FEATURES & TRAITS</p>
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
