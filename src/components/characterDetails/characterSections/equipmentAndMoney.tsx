import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/charCampDetails/characterDetails.json';

export const EquipmentAndMoney = () => {
  const { register } = useFormContext();

  return (
    <section className={`${style.eAndMSection}`}>
      <h2 className={`${style.sectionTitle}`}>Equipment & Money:</h2>
      <div className={`${style.moneyDiv}`}>
        <div className={`${style.moneyFieldSet}`}>
          <p className={`${style.moneyLabel}`}>CP</p>
          <input
            disabled
            {...register('equipmentAndMoney.money.copper')}
            className={`${style.moneyInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className={`${style.moneyFieldSet}`}>
          <p className={`${style.moneyLabel}`}>SP</p>
          <input
            disabled
            {...register('equipmentAndMoney.money.silver')}
            className={`${style.moneyInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className={`${style.moneyFieldSet}`}>
          <p className={`${style.moneyLabel}`}>EP</p>
          <input
            disabled
            {...register('equipmentAndMoney.money.electrum')}
            className={`${style.moneyInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className={`${style.moneyFieldSet}`}>
          <p className={`${style.moneyLabel}`}>GP</p>
          <input
            disabled
            {...register('equipmentAndMoney.money.gold')}
            className={`${style.moneyInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className={`${style.moneyFieldSet}`}>
          <p className={`${style.moneyLabel}`}>PP</p>
          <input
            disabled
            {...register('equipmentAndMoney.money.platinum')}
            className={`${style.moneyInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
      </div>
      <div className={`${style.equipmentFieldSet}`}>
        <textarea
          disabled
          {...register('equipmentAndMoney.equipment')}
          className={`${style.equipmentTextArea}`}
        />
      </div>
    </section>
  );
};
