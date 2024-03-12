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
            <p className={`${style.statsLabel}`}>STR</p>
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
            <p className={`${style.statsLabel}`}>DEX</p>
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
            <p className={`${style.statsLabel}`}>CON</p>
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
            <p className={`${style.statsLabel}`}>INT</p>
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
            <p className={`${style.statsLabel}`}>WIS</p>
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
            <p className={`${style.statsLabel}`}>CHA</p>
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
          <p className={`${style.aSOthersLabel}`}>Inspiration</p>
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
          <p className={`${style.aSOthersLabel}`}>Prof. bonus</p>
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
          <p className={`${style.aSOthersLabel}`}>Passive Wisdom</p>
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
          <p className={`${style.statSavesLabel}`}>STR</p>
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
          <p className={`${style.statSavesLabel}`}>DEX</p>
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
          <p className={`${style.statSavesLabel}`}>CON</p>
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
          <p className={`${style.statSavesLabel}`}>INT</p>
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
          <p className={`${style.statSavesLabel}`}>WIS</p>
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
          <p className={`${style.statSavesLabel}`}>CHA</p>
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
          <p className={`${style.skillsLabel} `}>
            Acrobatics <span className="font-normal">(Dex)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Animal Handling <span className="font-normal">(Wis)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Arcana <span className="font-normal">(Int)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Athletics <span className="font-normal">(Str)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Deception <span className="font-normal">(Cha)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            History <span className="font-normal">(Int)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Insight <span className="font-normal">(Wis)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Intimidation <span className="font-normal">(Cha)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Investigation <span className="font-normal">(Int)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Medicine <span className="font-normal">(Wis)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Nature <span className="font-normal">(Int)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Perception <span className="font-normal">(Wis)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Performance <span className="font-normal">(Cha)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Persuasion <span className="font-normal">(Cha)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Religion <span className="font-normal">(Int)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Sleight of Hand <span className="font-normal">(Dex)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Stealth <span className="font-normal">(Dex)</span>
          </p>
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
          <p className={`${style.skillsLabel} `}>
            Survival <span className="font-normal">(Wis)</span>
          </p>
        </fieldset>
      </div>
    </section>
  );
};
