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
          <p>Class</p>
          <input
            {...register('general.class', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <p>Level</p>
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
          <p>Background</p>
          <input
            {...register('general.background', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <p>Player name</p>
          <input
            {...register('general.playerName', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <p>Race</p>
          <input
            {...register('general.race', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <p>Alignment</p>
          <input
            {...register('general.alignment', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <p>Experience points</p>
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
          <p>Age</p>
          <input
            {...register('appearance.age', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <p>Height</p>
          <input
            {...register('appearance.height', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <p>Weight</p>
          <input
            {...register('appearance.weight', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <p>Eyes</p>
          <input
            {...register('appearance.eyes', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <p>Skin</p>
          <input
            {...register('appearance.skin', { maxLength: 18 })}
            className={`${style.generalInput}`}
            maxLength={18}
          />
        </fieldset>
        <fieldset className={`${style.generalFieldSet}`}>
          <p>Hair</p>
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
