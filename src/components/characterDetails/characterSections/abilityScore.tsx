import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/charCampDetails/characterDetails.json';

export const AbilityScore = () => {
  const { register } = useFormContext();

  return (
    <section className={`${style.aScoreSection}`}>
      <h2 className={`${style.sectionTitle}`}>Ability Score:</h2>
      <div className={`${style.aScoreStats}`}>
        <h4 className={`${style.subTitle}`}>STATS</h4>
        <div className={`${style.statsDiv}`}>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>STR</label>
            <input
              disabled
              {...register('abilityScore.stats.strength.value')}
              className={`${style.statsMainInput}`}
              type="text"
            />
            <input
              disabled
              {...register('abilityScore.stats.strength.bonus')}
              className={`${style.statsSubInput}`}
              type="text"
            />
          </fieldset>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>DEX</label>
            <input
              disabled
              {...register('abilityScore.stats.dexterity.value')}
              className={`${style.statsMainInput}`}
              type="text"
            />
            <input
              disabled
              {...register('abilityScore.stats.dexterity.bonus')}
              className={`${style.statsSubInput}`}
              type="text"
            />
          </fieldset>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>CON</label>
            <input
              disabled
              {...register('abilityScore.stats.constitution.value')}
              className={`${style.statsMainInput}`}
              type="text"
            />
            <input
              disabled
              {...register('abilityScore.stats.constitution.bonus')}
              className={`${style.statsSubInput}`}
              type="text"
            />
          </fieldset>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>INT</label>
            <input
              disabled
              {...register('abilityScore.stats.intelligence.value')}
              className={`${style.statsMainInput}`}
              type="text"
            />
            <input
              disabled
              {...register('abilityScore.stats.intelligence.bonus')}
              className={`${style.statsSubInput}`}
              type="text"
            />
          </fieldset>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>WIS</label>
            <input
              disabled
              {...register('abilityScore.stats.wisdom.value')}
              className={`${style.statsMainInput}`}
              type="text"
            />
            <input
              disabled
              {...register('abilityScore.stats.wisdom.bonus')}
              className={`${style.statsSubInput}`}
              type="text"
            />
          </fieldset>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>CHA</label>
            <input
              disabled
              {...register('abilityScore.stats.charisma.value')}
              className={`${style.statsMainInput}`}
              type="text"
            />
            <input
              disabled
              {...register('abilityScore.stats.charisma.bonus')}
              className={`${style.statsSubInput}`}
              type="text"
            />
          </fieldset>
        </div>
      </div>

      <div className={`${style.aScoreOthers}`}>
        <fieldset className={`${style.aSOthersFieldSet}`}>
          <label className={`${style.aSOthersLabel}`}>Inspiration</label>
          <input
            disabled
            {...register('abilityScore.inspiration')}
            className={`${style.aSOthersInput}`}
            type="text"
            inputMode="numeric"
          />
        </fieldset>
        <fieldset className={`${style.aSOthersFieldSet}`}>
          <label className={`${style.aSOthersLabel}`}>Prof. bonus</label>
          <input
            disabled
            {...register('abilityScore.proficiencyBonus')}
            className={`${style.aSOthersInput}`}
            type="text"
            inputMode="numeric"
          />
        </fieldset>
        <fieldset className={`${style.aSOthersFieldSet}`}>
          <label className={`${style.aSOthersLabel}`}>Passive Wisdom</label>
          <input
            disabled
            {...register('abilityScore.passiveWisdom')}
            className={`${style.aSOthersInput}`}
            type="text"
            inputMode="numeric"
          />
        </fieldset>
      </div>
      <div className={`${style.aScoreSaves}`}>
        <h4 className={`${style.subTitle}`}>STATS SAVES</h4>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.savingThrows.strength.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.savingThrows.strength.bonus')}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.statSavesLabel}`}>STR</label>
        </fieldset>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.savingThrows.dexterity.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.savingThrows.dexterity.bonus')}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.statSavesLabel}`}>DEX</label>
        </fieldset>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.savingThrows.constitution.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.savingThrows.constitution.bonus')}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.statSavesLabel}`}>CON</label>
        </fieldset>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.savingThrows.intelligence.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.savingThrows.intelligence.bonus')}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.statSavesLabel}`}>INT</label>
        </fieldset>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.savingThrows.wisdom.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.savingThrows.wisdom.bonus')}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.statSavesLabel}`}>WIS</label>
        </fieldset>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.savingThrows.charisma.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.savingThrows.charisma.bonus')}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.statSavesLabel}`}>CHA</label>
        </fieldset>
      </div>

      <div className={`${style.aScoreSkills}`}>
        <h4 className={`${style.subTitle}`}>SKILLS</h4>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.acrobatics.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.acrobatics.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Acrobatics <span className="font-normal">(Dex)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.animalHandling.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.animalHandling.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Animal Handling <span className="font-normal">(Wis)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.arcana.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.arcana.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Arcana <span className="font-normal">(Int)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.athletics.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.athletics.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Athletics <span className="font-normal">(Str)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.deception.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.deception.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Deception <span className="font-normal">(Cha)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.history.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.history.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            History <span className="font-normal">(Int)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.insight.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.insight.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Insight <span className="font-normal">(Wis)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.intimidation.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.intimidation.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Intimidation <span className="font-normal">(Cha)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.investigation.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.investigation.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Investigation <span className="font-normal">(Int)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.medicine.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.medicine.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Medicine <span className="font-normal">(Wis)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.nature.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.nature.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Nature <span className="font-normal">(Int)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.perception.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.perception.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Perception <span className="font-normal">(Wis)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.performance.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.performance.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Performance <span className="font-normal">(Cha)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.persuasion.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.persuasion.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Persuasion <span className="font-normal">(Cha)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.religion.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.religion.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Religion <span className="font-normal">(Int)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.sleightOfHand.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.sleightOfHand.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Sleight of Hand <span className="font-normal">(Dex)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.stealth.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.stealth.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Stealth <span className="font-normal">(Dex)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            aria-disabled="true"
            {...register('abilityScore.skills.survival.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            disabled
            {...register('abilityScore.skills.survival.bonus')}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
          />
          <label className={`${style.skillsLabel} `}>
            Survival <span className="font-normal">(Wis)</span>
          </label>
        </fieldset>
      </div>
    </section>
  );
};
