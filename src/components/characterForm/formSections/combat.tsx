import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const Combat = () => {
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
    <section className={`${style.combatSection}`}>
      <h2 className={`${style.sectionTitle}`}>Combat:</h2>
      <div className={`${style.combatOthersDiv}`}>
        <fieldset className={`${style.combatOthersFieldSet}`}>
          <label className={`${style.combatOthersLabel}`}>Armor Class</label>
          <input
            {...register('armorClass', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.combatOthersInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.combatOthersFieldSet}`}>
          <label className={`${style.combatOthersLabel}`}>Initiative</label>
          <input
            {...register('initiative', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.combatOthersInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.combatOthersFieldSet}`}>
          <label className={`${style.combatOthersLabel}`}>Speed</label>
          <input
            {...register('speed', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.combatOthersInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
      </div>
      <div className={`${style.combatOthersDiv}`}>
        <h4 className={`${style.subTitle}`}>Hit Points:</h4>
        <fieldset className={`${style.combatHPFieldSet}`}>
          <label className={`${style.combatHPLabel}`}>Total:</label>
          <input
            {...register('hpTotal', {
              onChange: (e) => {
                limitNumber(999, -999, e);
              },
              max: 999,
              min: -999
            })}
            className={`${style.combatHPInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.combatHPFieldSet}`}>
          <label className={`${style.combatHPLabel}`}>Current:</label>
          <input
            {...register('hpCurrent', {
              onChange: (e) => {
                limitNumber(999, -999, e);
              },
              max: 999,
              min: -999
            })}
            className={`${style.combatHPInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.combatHPFieldSet}`}>
          <label className={`${style.combatHPLabel}`}>Temporary:</label>
          <input
            {...register('hpTemp', {
              onChange: (e) => {
                limitNumber(999, -999, e);
              },
              max: 999,
              min: -999
            })}
            className={`${style.combatHPInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
      </div>
      <div className={`${style.combatHDnDSDiv}`}>
        <div className={`${style.combatHDDiv}`}>
          <h4 className={`${style.subTitle} relative pb-10 md:left-[10%]`}>
            Hit Dice:
          </h4>
          <fieldset className={`${style.combatHDFieldSet}`}>
            <div className={`w-[20%] `} />
            <input
              {...register('hitDice', { maxLength: 15 })}
              className={`${style.combatHDInput} rounded-t-full border-b-0`}
              type="text"
              maxLength={15}
            />
          </fieldset>
          <fieldset className={`${style.combatHDFieldSet}`}>
            <label className={`${style.combatHDLabel}`}>Total:</label>
            <input
              {...register('hitDiceTotal', { maxLength: 15 })}
              className={`${style.combatHDInput} rounded-b-full`}
              type="text"
              maxLength={15}
            />
          </fieldset>
        </div>
        <div className={`w-[49%]`}>
          <div className={`${style.combatDSDiv}`}>
            <h4 className={`${style.subTitle} relative pb-10 left-[5%]`}>
              Death Saves:
            </h4>
            <fieldset className={`${style.combatDSFieldSet}`}>
              <label className={`${style.combatDSLabel}`}>Success:</label>
              <input
                {...register('dsSuccess', { max: 3, min: 0 })}
                className={`${style.combatDSInput} text-green-700`}
                type="number"
                min={0}
                max={3}
                onKeyDown={(e) => {
                  e.key != 'ArrowDown' &&
                    e.key != 'ArrowUp' &&
                    e.preventDefault();
                }}
              />
            </fieldset>
            <fieldset className={`${style.combatDSFieldSet}`}>
              <label className={`${style.combatDSLabel}`}>Failure:</label>
              <input
                {...register('dsFailure', { max: 3, min: 0 })}
                className={`${style.combatDSInput} text-red-700`}
                type="number"
                min={0}
                max={3}
                onKeyDown={(e) => {
                  e.key != 'ArrowDown' &&
                    e.key != 'ArrowUp' &&
                    e.preventDefault();
                }}
              />
            </fieldset>
          </div>
        </div>
      </div>
      <div className={`${style.combatAnSDiv}`}>
        <h4 className={`${style.subTitle} relative pb-10`}>
          Attacks and spellcasting:
        </h4>
        <div className={`${style.combatAnSSubDiv} justify-center`}>
          <span className={`${style.combatAnSSpan} w-[39%]`}>NAME</span>
          <span className={`${style.combatAnSSpan} w-[19%]`}>ATK BONUS</span>
          <span className={`${style.combatAnSSpan} w-[39%]`}>
            DAMAGE / TYPE
          </span>
        </div>
        <div className={`${style.combatAnSSubDiv} justify-between`}>
          <input
            {...register('wpn1Name', { maxLength: 22 })}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
          <input
            {...register('wpn1Bonus', { maxLength: 11 })}
            type="text"
            className={`${style.combatAnSInput} w-[19%]`}
            maxLength={11}
          />
          <input
            {...register('wpn1DmgType', { maxLength: 22 })}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
        </div>
        <div className={`${style.combatAnSSubDiv} justify-between`}>
          <input
            {...register('wpn2Name', { maxLength: 22 })}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
          <input
            {...register('wpn2Bonus', { maxLength: 11 })}
            type="text"
            className={`${style.combatAnSInput} w-[19%]`}
            maxLength={11}
          />
          <input
            {...register('wpn2DmgType', { maxLength: 22 })}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
        </div>
        <div className={`${style.combatAnSSubDiv} justify-between`}>
          <input
            {...register('wpn3Name', { maxLength: 22 })}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
          <input
            {...register('wpn3Bonus', { maxLength: 11 })}
            type="text"
            className={`${style.combatAnSInput} w-[19%]`}
            maxLength={11}
          />
          <input
            {...register('wpn3DmgType', { maxLength: 22 })}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
        </div>
        <textarea
          {...register('atkNSpellcasting', { maxLength: 600 })}
          className={`${style.combatAnSTextArea}`}
          maxLength={600}
        />
      </div>
    </section>
  );
};
