import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const Spells = () => {
  const { register } = useFormContext();

  const spellInputs = (num: number, level: number) => {
    return [...Array(num)].map((_e, i) => {
      return (
        <div
          key={`spell${i}Level${level}`}
          className={`${style.spellsKnownDiv}`}
        >
          <input
            {...register(`spell${i}Level${level}Active`)}
            type="checkbox"
            className={`${style.spellCheck}`}
          />
          <input
            {...register(`spell${i}Level${level}Name`, { maxLength: 20 })}
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
        <label className={`${style.spellsOthersLabel}`}>
          SPELLCASTING CLASS
        </label>
        <input
          {...register('spellClass', { maxLength: 30 })}
          className={`${style.spellcastingClassInput}`}
          type="text"
          maxLength={30}
        />
      </fieldset>
      <div className={`${style.spellsOthersDiv}`}>
        <fieldset className={`${style.spellsOthersFieldSet}`}>
          <label className={`${style.spellsOthersLabel}`}>
            SPELLCASTING ABILITY
          </label>
          <input
            {...register('spellAbility', { maxLength: 5 })}
            className={`${style.spellsOthersInput}`}
            type="text"
            maxLength={5}
          />
        </fieldset>
        <fieldset className={`${style.spellsOthersFieldSet}`}>
          <label className={`${style.spellsOthersLabel}`}>SPELL SAVE DC</label>
          <input
            {...register('spellSaveDc', {
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
          <label className={`${style.spellsOthersLabel}`}>
            SPELL ATTACK BONUS
          </label>
          <input
            {...register('spellAtkBonus', {
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
              <div key={`cantrip${i}`} className={`${style.spellCantripDiv}`}>
                <input
                  {...register(`cantrip${i}`, { maxLength: 20 })}
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
              {...register('slotsTotalLevel1', {
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
              {...register('slotsExpendedLevel1', {
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
          {spellInputs(13, 1)}
        </div>
        <div
          className={`xl:row-span-7 xl:col-start-1 xl:row-start-14 ${style.spellsDiv}`}
        >
          <div className={`${style.spellSlotsDiv}`}>
            <p className={`${style.spellsLevel}`}>2</p>
            <input
              {...register('slotsTotalLevel2', {
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
              {...register('slotsExpendedLevel2', {
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
              {...register('slotsTotalLevel3', {
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
              {...register('slotsExpendedLevel3', {
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
              {...register('slotsTotalLevel4', {
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
              {...register('slotsExpendedLevel4', {
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
              {...register('slotsTotalLevel5', {
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
              {...register('slotsExpendedLevel5', {
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
              {...register('slotsTotalLevel6', {
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
              {...register('slotsExpendedLevel6', {
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
              {...register('slotsTotalLevel7', {
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
              {...register('slotsExpendedLevel7', {
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
              {...register('slotsTotalLevel8', {
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
              {...register('slotsExpendedLevel8', {
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
              {...register('slotsTotalLevel9', {
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
              {...register('slotsExpendedLevel9', {
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
