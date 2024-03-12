import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

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
            {...register(`spells.slots.level${level}.known.${i}.prepared`)}
            type="checkbox"
            className={`${style.spellCheck}`}
          />
          <input
            {...register(`spells.slots.level${level}.known.${i}.name`, {
              maxLength: 20
            })}
            className={`${style.spellName}`}
            maxLength={20}
          />
        </div>
      );
    });
  };

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
    <section className={`${style.spellsSection}`}>
      <h2 className={`${style.sectionTitle}`}>Spells:</h2>
      <fieldset className={`${style.spellsOthersFieldSet}`}>
        <p className={`${style.spellsOthersLabel}`}>SPELLCASTING CLASS</p>
        <input
          {...register('spells.castingClass', { maxLength: 30 })}
          className={`${style.spellcastingClassInput}`}
          type="text"
          maxLength={30}
        />
      </fieldset>
      <div className={`${style.spellsOthersDiv}`}>
        <fieldset className={`${style.spellsOthersFieldSet}`}>
          <p className={`${style.spellsOthersLabel}`}>SPELLCASTING ABILITY</p>
          <input
            {...register('spells.castingAbility', { maxLength: 5 })}
            className={`${style.spellsOthersInput}`}
            type="text"
            maxLength={5}
          />
        </fieldset>
        <fieldset className={`${style.spellsOthersFieldSet}`}>
          <p className={`${style.spellsOthersLabel}`}>SPELL SAVE DC</p>
          <input
            {...register('spells.saveDice', {
              onChange: (e) => {
                limitNumber(9999, 0, e);
              },
              max: 9999,
              min: 0
            })}
            className={`${style.spellsOthersInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.spellsOthersFieldSet}`}>
          <p className={`${style.spellsOthersLabel}`}>SPELL ATTACK BONUS</p>
          <input
            {...register('spells.bonusAttack', {
              onChange: (e) => {
                limitNumber(9999, 0, e);
              },
              max: 9999,
              min: 0
            })}
            className={`${style.spellsOthersInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
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
                  {...register(`spells.cantrips.${i}`, { maxLength: 20 })}
                  className={`${style.spellCantripName}`}
                  maxLength={20}
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
              {...register('spells.slots.level1.total', {
                onChange: (e) => {
                  limitNumber(12, 0, e);
                },
                max: 12,
                min: 0
              })}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('spells.slots.level1.expended', {
                onChange: (e) => {
                  limitNumber(12, 0, e);
                },
                max: 12,
                min: 0
              })}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
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
              {...register('spells.slots.level2.total', {
                onChange: (e) => {
                  limitNumber(13, 0, e);
                },
                max: 13,
                min: 0
              })}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('spells.slots.level2.expended', {
                onChange: (e) => {
                  limitNumber(13, 0, e);
                },
                max: 13,
                min: 0
              })}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
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
              {...register('spells.slots.level3.total', {
                onChange: (e) => {
                  limitNumber(13, 0, e);
                },
                max: 13,
                min: 0
              })}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('spells.slots.level3.expended', {
                onChange: (e) => {
                  limitNumber(13, 0, e);
                },
                max: 13,
                min: 0
              })}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
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
              {...register('spells.slots.level4.total', {
                onChange: (e) => {
                  limitNumber(13, 0, e);
                },
                max: 13,
                min: 0
              })}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('spells.slots.level4.expended', {
                onChange: (e) => {
                  limitNumber(13, 0, e);
                },
                max: 13,
                min: 0
              })}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
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
              {...register('spells.slots.level5.total', {
                onChange: (e) => {
                  limitNumber(9, 0, e);
                },
                max: 13,
                min: 0
              })}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('spells.slots.level5.expended', {
                onChange: (e) => {
                  limitNumber(9, 0, e);
                },
                max: 13,
                min: 0
              })}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
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
              {...register('spells.slots.level6.total', {
                onChange: (e) => {
                  limitNumber(9, 0, e);
                },
                max: 9,
                min: 0
              })}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('spells.slots.level6.expended', {
                onChange: (e) => {
                  limitNumber(9, 0, e);
                },
                max: 9,
                min: 0
              })}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
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
              {...register('spells.slots.level7.total', {
                onChange: (e) => {
                  limitNumber(9, 0, e);
                },
                max: 9,
                min: 0
              })}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('spells.slots.level7.expended', {
                onChange: (e) => {
                  limitNumber(9, 0, e);
                },
                max: 9,
                min: 0
              })}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
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
              {...register('spells.slots.level8.total', {
                onChange: (e) => {
                  limitNumber(7, 0, e);
                },
                max: 7,
                min: 0
              })}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('spells.slots.level8.expended', {
                onChange: (e) => {
                  limitNumber(7, 0, e);
                },
                max: 7,
                min: 0
              })}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
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
              {...register('spells.slots.level9.total', {
                onChange: (e) => {
                  limitNumber(7, 0, e);
                },
                max: 7,
                min: 0
              })}
              className={`${style.spellsTotal}`}
              placeholder="SLOTS TOTAL"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('spells.slots.level9.expended', {
                onChange: (e) => {
                  limitNumber(7, 0, e);
                },
                max: 7,
                min: 0
              })}
              className={`${style.spellsExpended}`}
              placeholder="SLOTS EXPENDED"
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
          </div>
          {spellInputs(7, 9)}
        </div>
      </div>
    </section>
  );
};
