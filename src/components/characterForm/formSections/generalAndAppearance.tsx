import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const GeneralAndAppearance = () => {
  const { register } = useFormContext();

  const limitNumber = (max: number, min: number, event: any) => {
    event.preventDefault();
    if (event.target.value > max) {
      event.target.value = max;
      return;
    } else if (event.target.value < min) {
      event.target.value = min;
      return;
    }
  };

  const limitInput = (event: any) => {
    event.target.value = event.target.value
      .replace(/[^0-9-]/g, '')
      .replace(/^(-)|-+/g, '$1')
      .replace(/^0[^]/, event.target.value[1])
      .replace(/^-[0]/, 0);
  };

  return (
    <section className={`${style.generalSection}`}>
      <h2 className={`${style.sectionTitle}`}>General info & Appeareance:</h2>
      <fieldset className={`${style.nameFieldSet}`}>
        <p>Name</p>
        <input
          {...register('general.name', { maxLength: 30 })}
          className={`${style.nameInput}`}
          maxLength={30}
        />
      </fieldset>
      <div className={`${style.generalDiv}`}>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Class</label>
          <input
            {...register('general.class', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Level</label>
          <input
            {...register('general.level', {
              onChange: (e) => {
                limitNumber(999, 0, e);
              },
              max: 999,
              min: 0
            })}
            className={`${style.generalInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Background</label>
          <input
            {...register('general.background', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Player name</label>
          <input
            {...register('general.playerName', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Race</label>
          <input
            {...register('general.race', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Alignment</label>
          <input
            {...register('general.alignment', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Experience points</label>
          <input
            {...register('general.experience', {
              onChange: (e) => {
                limitNumber(999999999999999, 0, e);
              },
              max: 999999999999999,
              min: 0
            })}
            className={`${style.generalInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
      </div>
      <div className={`${style.generalDiv}`}>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Age</label>
          <input
            {...register('appearance.age', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Height</label>
          <input
            {...register('appearance.height', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Weight</label>
          <input
            {...register('appearance.weight', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Eyes</label>
          <input
            {...register('appearance.eyes', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Skin</label>
          <input
            {...register('appearance.skin', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <label>Hair</label>
          <input
            {...register('appearance.hair', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
      </div>
    </section>
  );
};
