import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const EquipmentAndMoney = () => {
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
    <section className={`${style.eAndMSection}`}>
      <h2 className={`${style.sectionTitle}`}>Equipment & Money:</h2>
      <div className={`${style.moneyDiv}`}>
        <fieldset className={`${style.moneyFieldSet}`}>
          <label className={`${style.moneyLabel}`}>CP</label>
          <input
            {...register('cp', {
              onChange: (e) => {
                limitNumber(999, 0, e);
              },
              max: 999,
              min: 0
            })}
            className={`${style.moneyInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.moneyFieldSet}`}>
          <label className={`${style.moneyLabel}`}>SP</label>
          <input
            {...register('sp', {
              onChange: (e) => {
                limitNumber(999, 0, e);
              },
              max: 999,
              min: 0
            })}
            className={`${style.moneyInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.moneyFieldSet}`}>
          <label className={`${style.moneyLabel}`}>EP</label>
          <input
            {...register('ep', {
              onChange: (e) => {
                limitNumber(999, 0, e);
              },
              max: 999,
              min: 0
            })}
            className={`${style.moneyInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.moneyFieldSet}`}>
          <label className={`${style.moneyLabel}`}>GP</label>
          <input
            {...register('gp', {
              onChange: (e) => {
                limitNumber(999, 0, e);
              },
              max: 999,
              min: 0
            })}
            className={`${style.moneyInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.moneyFieldSet}`}>
          <label className={`${style.moneyLabel}`}>PP</label>
          <input
            {...register('pp', {
              onChange: (e) => {
                limitNumber(999, 0, e);
              },
              max: 999,
              min: 0
            })}
            className={`${style.moneyInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
      </div>
      <fieldset className={`${style.equipmentFieldSet}`}>
        <textarea
          {...register('equipment', { maxLength: 1000 })}
          className={`${style.equipmentTextArea}`}
          maxLength={1000}
        />
      </fieldset>
    </section>
  );
};
