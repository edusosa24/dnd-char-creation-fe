import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/charCampDetails/characterDetails.json';

export const GeneralAndAppearance = () => {
  const { register } = useFormContext();

  return (
    <section className={`${style.generalSection}`}>
      <h2 className={`${style.sectionTitle}`}>General info & Appeareance:</h2>
      <fieldset className={`${style.nameFieldSet}`}>
        <p>Name</p>
        <input
          disabled
          {...register('general.name', { maxLength: 30 })}
          className={`${style.nameInput}`}
          maxLength={30}
        />
      </fieldset>
      <div className={`${style.generalDiv}`}>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Class</label>
          <input
            disabled
            {...register('general.class', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Level</label>
          <input
            disabled
            {...register('general.level')}
            className={`${style.generalInput}`}
            type="text"
            inputMode="numeric"
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Background</label>
          <input
            disabled
            {...register('general.background', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Player name</label>
          <input
            disabled
            {...register('general.playerName', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Race</label>
          <input
            disabled
            {...register('general.race', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Alignment</label>
          <input
            disabled
            {...register('general.alignment', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Experience points</label>
          <input
            disabled
            {...register('general.experience')}
            className={`${style.generalInput}`}
            type="text"
            inputMode="numeric"
          />
        </fieldset>
      </div>
      <div className={`${style.generalDiv}`}>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Age</label>
          <input
            disabled
            {...register('appearance.age', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Height</label>
          <input
            disabled
            {...register('appearance.height', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Weight</label>
          <input
            disabled
            {...register('appearance.weight', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Eyes</label>
          <input
            disabled
            {...register('appearance.eyes', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Skin</label>
          <input
            disabled
            {...register('appearance.skin', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Hair</label>
          <input
            disabled
            {...register('appearance.hair', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
      </div>
    </section>
  );
};
