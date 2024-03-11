import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/charCampDetails/characterDetails.json';

export const Combat = () => {
  const { register } = useFormContext();

  return (
    <section className={`${style.combatSection}`}>
      <h2 className={`${style.sectionTitle}`}>Combat:</h2>
      <div className={`${style.combatOthersDiv}`}>
        <div className={`${style.combatOthersFieldSet}`}>
          <p className={`${style.combatOthersLabel}`}>Armor Class</p>
          <input
            disabled
            {...register('combat.armorClass')}
            className={`${style.combatOthersInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className={`${style.combatOthersFieldSet}`}>
          <p className={`${style.combatOthersLabel}`}>Initiative</p>
          <input
            disabled
            {...register('combat.initiative')}
            className={`${style.combatOthersInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className={`${style.combatOthersFieldSet}`}>
          <p className={`${style.combatOthersLabel}`}>Speed</p>
          <input
            disabled
            {...register('combat.speed')}
            className={`${style.combatOthersInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
      </div>
      <div className={`${style.combatOthersDiv}`}>
        <h4 className={`${style.subTitle}`}>Hit Points:</h4>
        <div className={`${style.combatHPFieldSet}`}>
          <p className={`${style.combatHPLabel}`}>Total:</p>
          <input
            disabled
            {...register('combat.maxHitPoints')}
            className={`${style.combatHPInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className={`${style.combatHPFieldSet}`}>
          <p className={`${style.combatHPLabel}`}>Current:</p>
          <input
            disabled
            {...register('combat.currentHitPoints')}
            className={`${style.combatHPInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className={`${style.combatHPFieldSet}`}>
          <p className={`${style.combatHPLabel}`}>Temporary:</p>
          <input
            disabled
            {...register('combat.temporaryHitPoints')}
            className={`${style.combatHPInput}`}
            type="text"
            inputMode="numeric"
          />
        </div>
      </div>
      <div className={`${style.combatHDnDSDiv}`}>
        <div className={`${style.combatHDDiv}`}>
          <h4 className={`${style.subTitle} relative pb-10 md:left-[10%]`}>
            Hit Dice:
          </h4>
          <div className={`${style.combatHDFieldSet}`}>
            <div className={`w-[20%] `} />
            <input
              disabled
              {...register('combat.hitDice')}
              className={`${style.combatHDInput} rounded-t-full border-b-0`}
              type="text"
            />
          </div>
          <div className={`${style.combatHDFieldSet}`}>
            <p className={`${style.combatHDLabel}`}>Total:</p>
            <input
              disabled
              {...register('combat.hitDiceTotal')}
              className={`${style.combatHDInput} rounded-b-full`}
              type="text"
            />
          </div>
        </div>
        <div className={`w-[49%]`}>
          <div className={`${style.combatDSDiv}`}>
            <h4 className={`${style.subTitle} relative pb-10 left-[5%]`}>
              Death Saves:
            </h4>
            <div className={`${style.combatDSFieldSet}`}>
              <p className={`${style.combatDSLabel}`}>Success:</p>
              <input
                disabled
                {...register('combat.deathSaves.success')}
                className={`${style.combatDSInput} text-green-700`}
                type="number"
              />
            </div>
            <div className={`${style.combatDSFieldSet}`}>
              <p className={`${style.combatDSLabel}`}>Failure:</p>
              <input
                disabled
                {...register('combat.deathSaves.failure', { max: 3, min: 0 })}
                className={`${style.combatDSInput} text-red-700`}
                type="number"
              />
            </div>
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
            disabled
            {...register('combat.attacksAndSpellcasting.weapons.0.name')}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
          />
          <input
            disabled
            {...register('combat.attacksAndSpellcasting.weapons.0.attackBonus')}
            type="text"
            className={`${style.combatAnSInput} w-[19%]`}
          />
          <input
            disabled
            {...register(
              'combat.attacksAndSpellcasting.weapons.0.damageAndType'
            )}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
          />
        </div>
        <div className={`${style.combatAnSSubDiv} justify-between`}>
          <input
            disabled
            {...register('combat.attacksAndSpellcasting.weapons.1.name')}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
          />
          <input
            disabled
            {...register('combat.attacksAndSpellcasting.weapons.1.attackBonus')}
            type="text"
            className={`${style.combatAnSInput} w-[19%]`}
          />
          <input
            disabled
            {...register(
              'combat.attacksAndSpellcasting.weapons.1.damageAndType'
            )}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
          />
        </div>
        <div className={`${style.combatAnSSubDiv} justify-between`}>
          <input
            disabled
            {...register('combat.attacksAndSpellcasting.weapons.2.name')}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
          />
          <input
            disabled
            {...register('combat.attacksAndSpellcasting.weapons.2.attackBonus')}
            type="text"
            className={`${style.combatAnSInput} w-[19%]`}
          />
          <input
            disabled
            {...register(
              'combat.attacksAndSpellcasting.weapons.2.damageAndType'
            )}
            type="text"
            className={`${style.combatAnSInput} w-[40%]`}
          />
        </div>
        <textarea
          disabled
          {...register('combat.attacksAndSpellcasting.extra')}
          className={`${style.combatAnSTextArea}`}
        />
      </div>
    </section>
  );
};
