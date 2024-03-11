import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/charCampDetails/characterDetails.json';

export const FeatTraitsAndOther = () => {
  const { register } = useFormContext();

  return (
    <section className={`${style.featuresSection}`}>
      <h2 className={`${style.sectionTitle}`}>
        Feature traits and other proficiencies:
      </h2>
      <div className={`${style.featuresDiv}`}>
        <div className={`${style.featuresFieldSet} h-40`}>
          <p className={`${style.featuresLabel}`}>PERSONALITY TRAITS</p>
          <textarea
            disabled
            {...register(
              'featuresTraitsAndOtherProficiencies.personalityTraits'
            )}
            className={`${style.featuresTextArea}`}
          />
        </div>
        <div className={`${style.featuresFieldSet} h-40`}>
          <p className={`${style.featuresLabel}`}>IDEALS</p>
          <textarea
            disabled
            {...register('featuresTraitsAndOtherProficiencies.ideals')}
            className={`${style.featuresTextArea}`}
          />
        </div>
        <div className={`${style.featuresFieldSet} h-40`}>
          <p className={`${style.featuresLabel}`}>BONDS</p>
          <textarea
            disabled
            {...register('featuresTraitsAndOtherProficiencies.bonds')}
            className={`${style.featuresTextArea}`}
          />
        </div>
        <div className={`${style.featuresFieldSet} h-40`}>
          <p className={`${style.featuresLabel}`}>FLAWS</p>
          <textarea
            disabled
            {...register('featuresTraitsAndOtherProficiencies.flaws')}
            className={`${style.featuresTextArea}`}
          />
        </div>
        <div className={`${style.featuresFieldSet} h-96`}>
          <p className={`${style.featuresLabel}`}>
            OTHER PROFICIENCIES & LANGUAGES
          </p>
          <textarea
            disabled
            {...register(
              'featuresTraitsAndOtherProficiencies.otherProficienciesAndLanguages'
            )}
            className={`${style.featuresTextArea}`}
          />
        </div>
        <div className={`${style.featuresFieldSet} h-96`}>
          <p className={`${style.featuresLabel}`}>FEATURES & TRAITS</p>
          <textarea
            disabled
            {...register(
              'featuresTraitsAndOtherProficiencies.featuresAndTraits'
            )}
            className={`${style.featuresTextArea} w-full`}
          />
        </div>
      </div>
    </section>
  );
};
