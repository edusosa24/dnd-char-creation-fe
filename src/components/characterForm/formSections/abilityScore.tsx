import { useFormContext } from 'react-hook-form';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const AbilityScore = () => {
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
    <section className={`${style.aScoreSection}`}>
      <h2 className={`${style.sectionTitle}`}>Ability Score:</h2>
      <div className={`${style.aScoreStats}`}>
        <h4 className={`${style.subTitle}`}>STATS</h4>
        <div className={`${style.statsDiv}`}>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>STR</label>
            <input
              {...register('abilityScore.stats.strength.value', {
                onChange: (e) => {
                  limitNumber(99, -99, e);
                },
                max: 99,
                min: -99
              })}
              className={`${style.statsMainInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('abilityScore.stats.strength.bonus', {
                onChange: (e) => {
                  limitNumber(9, -9, e);
                },
                max: 9,
                min: -9
              })}
              className={`${style.statsSubInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
          </fieldset>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>DEX</label>
            <input
              {...register('abilityScore.stats.dexterity.value', {
                onChange: (e) => {
                  limitNumber(99, -99, e);
                },
                max: 99,
                min: -99
              })}
              className={`${style.statsMainInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('abilityScore.stats.dexterity.bonus', {
                onChange: (e) => {
                  limitNumber(9, -9, e);
                },
                max: 9,
                min: -9
              })}
              className={`${style.statsSubInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
          </fieldset>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>CON</label>
            <input
              {...register('abilityScore.stats.constitution.value', {
                onChange: (e) => {
                  limitNumber(99, -99, e);
                },
                max: 99,
                min: -99
              })}
              className={`${style.statsMainInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('abilityScore.stats.constitution.bonus', {
                onChange: (e) => {
                  limitNumber(9, -9, e);
                },
                max: 9,
                min: -9
              })}
              className={`${style.statsSubInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
          </fieldset>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>INT</label>
            <input
              {...register('abilityScore.stats.intelligence.value', {
                onChange: (e) => {
                  limitNumber(99, -99, e);
                },
                max: 99,
                min: -99
              })}
              className={`${style.statsMainInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('abilityScore.stats.intelligence.bonus', {
                onChange: (e) => {
                  limitNumber(9, -9, e);
                },
                max: 9,
                min: -9
              })}
              className={`${style.statsSubInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
          </fieldset>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>WIS</label>
            <input
              {...register('abilityScore.stats.wisdom.value', {
                onChange: (e) => {
                  limitNumber(99, -99, e);
                },
                max: 99,
                min: -99
              })}
              className={`${style.statsMainInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('abilityScore.stats.wisdom.bonus', {
                onChange: (e) => {
                  limitNumber(9, -9, e);
                },
                max: 9,
                min: -9
              })}
              className={`${style.statsSubInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
          </fieldset>
          <fieldset className={`${style.statsFieldSet}`}>
            <label className={`${style.statsLabel}`}>CHA</label>
            <input
              {...register('abilityScore.stats.charisma.value', {
                onChange: (e) => {
                  limitNumber(99, -99, e);
                },
                max: 99,
                min: -99
              })}
              className={`${style.statsMainInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
            <input
              {...register('abilityScore.stats.charisma.bonus', {
                onChange: (e) => {
                  limitNumber(9, -9, e);
                },
                max: 9,
                min: -9
              })}
              className={`${style.statsSubInput}`}
              type="text"
              inputMode="numeric"
              onInput={(e) => limitInput(e)}
            />
          </fieldset>
        </div>
      </div>

      <div className={`${style.aScoreOthers}`}>
        <fieldset className={`${style.aSOthersFieldSet}`}>
          <label className={`${style.aSOthersLabel}`}>Inspiration</label>
          <input
            {...register('abilityScore.inspiration', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.aSOthersInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.aSOthersFieldSet}`}>
          <label className={`${style.aSOthersLabel}`}>Prof. bonus</label>
          <input
            {...register('abilityScore.proficiencyBonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.aSOthersInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
        <fieldset className={`${style.aSOthersFieldSet}`}>
          <label className={`${style.aSOthersLabel}`}>Passive Wisdom</label>
          <input
            {...register('abilityScore.passiveWisdom', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.aSOthersInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
        </fieldset>
      </div>
      <div className={`${style.aScoreSaves}`}>
        <h4 className={`${style.subTitle}`}>STATS SAVES</h4>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            {...register('abilityScore.savingThrows.strength.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('abilityScore.savingThrows.strength.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.statSavesLabel}`}>STR</label>
        </fieldset>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            {...register('abilityScore.savingThrows.dexterity.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('abilityScore.savingThrows.dexterity.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.statSavesLabel}`}>DEX</label>
        </fieldset>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            {...register('abilityScore.savingThrows.constitution.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('abilityScore.savingThrows.constitution.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.statSavesLabel}`}>CON</label>
        </fieldset>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            {...register('abilityScore.savingThrows.intelligence.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('abilityScore.savingThrows.intelligence.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.statSavesLabel}`}>INT</label>
        </fieldset>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            {...register('abilityScore.savingThrows.wisdom.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('abilityScore.savingThrows.wisdom.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.statSavesLabel}`}>WIS</label>
        </fieldset>
        <fieldset className={`${style.statSavesFieldSet}`}>
          <input
            {...register('abilityScore.savingThrows.charisma.proficiency')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('abilityScore.savingThrows.charisma.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.statSavesInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.statSavesLabel}`}>CHA</label>
        </fieldset>
      </div>

      <div className={`${style.aScoreSkills}`}>
        <h4 className={`${style.subTitle}`}>SKILLS</h4>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.acrobatics.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.acrobatics.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Acrobatics <span className="font-normal">(Dex)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.animalHandling.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.animalHandling.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Animal Handling <span className="font-normal">(Wis)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.arcana.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.arcana.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Arcana <span className="font-normal">(Int)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.athletics.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.athletics.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Athletics <span className="font-normal">(Str)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.deception.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.deception.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Deception <span className="font-normal">(Cha)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.history.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.history.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            History <span className="font-normal">(Int)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.insight.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.insight.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Insight <span className="font-normal">(Wis)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.intimidation.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.intimidation.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Intimidation <span className="font-normal">(Cha)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.investigation.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.investigation.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Investigation <span className="font-normal">(Int)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.medicine.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.medicine.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Medicine <span className="font-normal">(Wis)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.nature.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.nature.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Nature <span className="font-normal">(Int)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.perception.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.perception.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Perception <span className="font-normal">(Wis)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.performance.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.performance.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Performance <span className="font-normal">(Cha)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.persuasion.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.persuasion.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Persuasion <span className="font-normal">(Cha)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.religion.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.religion.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Religion <span className="font-normal">(Int)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.sleightOfHand.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.sleightOfHand.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Sleight of Hand <span className="font-normal">(Dex)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.stealth.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.stealth.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Stealth <span className="font-normal">(Dex)</span>
          </label>
        </fieldset>
        <fieldset className={`${style.skillsFieldSet}`}>
          <input
            {...register('abilityScore.skills.survival.proficiency')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('abilityScore.skills.survival.bonus', {
              onChange: (e) => {
                limitNumber(99, -99, e);
              },
              max: 99,
              min: -99
            })}
            className={`${style.skillsInput}`}
            type="text"
            inputMode="numeric"
            onInput={(e) => limitInput(e)}
          />
          <label className={`${style.skillsLabel} `}>
            Survival <span className="font-normal">(Wis)</span>
          </label>
        </fieldset>
      </div>
    </section>
  );
};
