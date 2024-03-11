import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/charCampDetails/characterDetails.json';

export const Spells = () => {
  const { register } = useFormContext();

  const spellInputs = (num: number, level: number) => {
    return [...Array(num)].map((_e, i) => {
      return (
        <div
          key={`spells.slots.level${level}.${i}`}
          className={`${style.spellsKnownDiv}`}
        >
          <input
            aria-disabled="true"
            {...register(`spells.slots.level${level}.known.${i}.prepared`)}
            type="checkbox"
            className={`${style.spellCheck}`}
          />
          <input
            disabled
            {...register(`spells.slots.level${level}.known.${i}.name`)}
            className={`${style.spellName}`}
          />
        </div>
      );
    });
  };

  return (
    <section className={`${style.spellsSection}`}>
      <h2 className={`${style.sectionTitle}`}>Spells:</h2>
      <div className={`${style.spellsOthersFieldSet}`}>
        <p className={`${style.spellsOthersLabel}`}>SPELLCASTING CLASS</p>
        <input
          disabled
          {...register('spells.castingClass')}
          className={`${style.spellcastingClassInput}`}
          type="text"
        />
      </div>
      <div className={`${style.spellsOthersDiv}`}>
        <div className={`${style.spellsOthersFieldSet}`}>
          <p className={`${style.spellsOthersLabel}`}>SPELLCASTING ABILITY</p>
          <input
            disabled
            {...register('spells.castingAbility')}
            className={`${style.spellsOthersInput}`}
            type="text"
          />
        </div>
        <div className={`${style.spellsOthersFieldSet}`}>
          <p className={`${style.spellsOthersLabel}`}>SPELL SAVE DC</p>
          <input
            disabled
            {...register('spells.saveDice')}
            className={`${style.spellsOthersInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className={`${style.spellsOthersFieldSet}`}>
          <p className={`${style.spellsOthersLabel}`}>SPELL ATTACK BONUS</p>
          <input
            disabled
            {...register('spells.bonusAttack')}
            className={`${style.spellsOthersInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
      </div>
      <div className={`${style.spellsGrid}`}>
        <div className={`xl:row-span-6 ${style.spellsDiv}`}>
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>0</p>
            <p className={`${style.spellCantrip}`}>CANTRIPS</p>
          </div>
          {[...Array(8)].map((_e, i) => {
            return (
              <div
                key={`spells.cantrips.${i}`}
                className={`${style.spellCantripDiv}`}
              >
                <input
                  disabled
                  {...register(`spells.cantrips.${i}`)}
                  className={`${style.spellCantripName}`}
                />
              </div>
            );
          })}
        </div>

        <div
          className={`xl:row-span-7 xl:col-start-1 xl:row-start-7 ${style.spellsDiv}`}
        >
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>1</p>
            <input
              disabled
              {...register('spells.slots.level1.total')}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
            />
            <input
              disabled
              {...register('spells.slots.level1.expended')}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
            />
          </div>
          {spellInputs(12, 1)}
        </div>
        <div
          className={`xl:row-span-7 xl:col-start-1 xl:row-start-14 ${style.spellsDiv}`}
        >
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>2</p>
            <input
              disabled
              {...register('spells.slots.level2.total')}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
            />
            <input
              disabled
              {...register('spells.slots.level2.expended')}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
            />
          </div>
          {spellInputs(13, 2)}
        </div>
        <div
          className={`xl:row-span-7 xl:col-start-2 xl:row-start-1 ${style.spellsDiv}`}
        >
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>3</p>
            <input
              disabled
              {...register('spells.slots.level3.total')}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
            />
            <input
              disabled
              {...register('spells.slots.level3.expended')}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
            />
          </div>
          {spellInputs(13, 3)}
        </div>
        <div
          className={`xl:row-span-7 xl:col-start-2 xl:row-start-8 ${style.spellsDiv}`}
        >
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>4</p>
            <input
              disabled
              {...register('spells.slots.level4.total')}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
            />
            <input
              disabled
              {...register('spells.slots.level4.expended')}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
            />
          </div>
          {spellInputs(13, 4)}
        </div>
        <div
          className={`xl:row-span-6 xl:col-start-2 xl:row-start-15 ${style.spellsDiv}`}
        >
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>5</p>
            <input
              disabled
              {...register('spells.slots.level5.total')}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
            />
            <input
              disabled
              {...register('spells.slots.level5.expended')}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
            />
          </div>
          {spellInputs(9, 5)}
        </div>
        <div
          className={`xl:row-span-6 xl:col-start-3 xl:row-start-1 ${style.spellsDiv}`}
        >
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>6</p>
            <input
              disabled
              {...register('spells.slots.level6.total')}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
            />
            <input
              disabled
              {...register('spells.slots.level6.expended')}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
            />
          </div>
          {spellInputs(9, 6)}
        </div>
        <div
          className={`xl:row-span-6 xl:col-start-3 xl:row-start-7 ${style.spellsDiv}`}
        >
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>7</p>
            <input
              disabled
              {...register('spells.slots.level7.total')}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
            />
            <input
              disabled
              {...register('spells.slots.level7.expended')}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
            />
          </div>
          {spellInputs(9, 7)}
        </div>
        <div
          className={`xl:row-span-4 xl:col-start-3 xl:row-start-13 ${style.spellsDiv}`}
        >
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>8</p>
            <input
              disabled
              {...register('spells.slots.level8.total')}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
            />
            <input
              disabled
              {...register('spells.slots.level8.expended')}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
            />
          </div>
          {spellInputs(7, 8)}
        </div>
        <div
          className={`xl:row-span-4 xl:col-start-3 xl:row-start-17 ${style.spellsDiv}`}
        >
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>9</p>
            <input
              disabled
              {...register('spells.slots.level9.total')}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
            />
            <input
              disabled
              {...register('spells.slots.level9.expended')}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
            />
          </div>
          {spellInputs(7, 9)}
        </div>
      </div>
    </section>
  );
};
