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
            {...register('combat.armorClass', {
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
            {...register('combat.initiative', {
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
            {...register('combat.speed', {
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
            {...register('combat.maxHitPoints', {
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
            {...register('combat.currentHitPoints', {
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
            {...register('combat.temporaryHitPoints', {
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
              {...register('combat.hitDice', { maxLength: 15 })}
              className={`${style.combatHDInput} rounded-t-full border-b-0`}
              type="text"
              maxLength={15}
            />
          </fieldset>
          <fieldset className={`${style.combatHDFieldSet}`}>
            <label className={`${style.combatHDLabel}`}>Total:</label>
            <input
              {...register('combat.hitDiceTotal', { maxLength: 15 })}
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
                {...register('combat.deathSaves.success', { max: 3, min: 0 })}
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
                {...register('combat.deathSaves.failure', { max: 3, min: 0 })}
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
            {...register('combat.attacksAndSpellcasting.weapons.0.name', {
              maxLength: 22
            })}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
          <input
            {...register(
              'combat.attacksAndSpellcasting.weapons.0.attackBonus',
              { maxLength: 11 }
            )}
            type="text"
            className={`${style.combatAnSInput} w-[19%]`}
            maxLength={11}
          />
          <input
            {...register(
              'combat.attacksAndSpellcasting.weapons.0.damageAndType',
              {
                maxLength: 22
              }
            )}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
        </div>
        <div className={`${style.combatAnSSubDiv} justify-between`}>
          <input
            {...register('combat.attacksAndSpellcasting.weapons.1.name', {
              maxLength: 22
            })}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
          <input
            {...register(
              'combat.attacksAndSpellcasting.weapons.1.attackBonus',
              { maxLength: 11 }
            )}
            type="text"
            className={`${style.combatAnSInput} w-[19%]`}
            maxLength={11}
          />
          <input
            {...register(
              'combat.attacksAndSpellcasting.weapons.1.damageAndType',
              { maxLength: 22 }
            )}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
        </div>
        <div className={`${style.combatAnSSubDiv} justify-between`}>
          <input
            {...register('combat.attacksAndSpellcasting.weapons.2.name', {
              maxLength: 22
            })}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
          <input
            {...register(
              'combat.attacksAndSpellcasting.weapons.2.attackBonus',
              { maxLength: 11 }
            )}
            type="text"
            className={`${style.combatAnSInput} w-[19%]`}
            maxLength={11}
          />
          <input
            {...register(
              'combat.attacksAndSpellcasting.weapons.2.damageAndType',
              { maxLength: 22 }
            )}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
            maxLength={22}
          />
        </div>
        <textarea
          {...register('combat.attacksAndSpellcasting.extra', {
            maxLength: 600
          })}
          className={`${style.combatAnSTextArea}`}
          maxLength={600}
        />
      </div>
    </section>
  );
};
