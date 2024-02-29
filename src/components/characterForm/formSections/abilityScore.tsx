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
              {...register('strVal', {
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
              {...register('strBon', {
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
              {...register('dexVal', {
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
              {...register('dexBon', {
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
              {...register('conVal', {
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
              {...register('conBon', {
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
              {...register('intVal', {
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
              {...register('intBon', {
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
              {...register('wisVal', {
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
              {...register('wisBon', {
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
              {...register('chaVal', {
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
              {...register('chaBon', {
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
            {...register('inspiration', {
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
            {...register('profBonus', {
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
            {...register('passiveWis', {
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
            {...register('strSaveProf')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('strSaveVal', {
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
            {...register('dexSaveProf')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('dexSaveVal', {
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
            {...register('conSaveProf')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('conSaveVal', {
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
            {...register('intSaveProf')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('intSaveVal', {
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
            {...register('wisSaveProf')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('wisSaveVal', {
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
            {...register('chaSaveProf')}
            type="checkbox"
            className={`${style.statSavesCheckBox}`}
          />
          <input
            {...register('chaSaveVal', {
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
            {...register('acroProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('acroVal', {
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
            {...register('animHandProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('acroVal', {
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
            {...register('arcanaProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('arcanaVal', {
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
            {...register('atheticsProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('atheticsVal', {
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
            {...register('deceptionProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('deceptionVal', {
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
            {...register('historyProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('historyVal', {
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
            {...register('insightProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('insightVal', {
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
            {...register('intimProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('intimVal', {
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
            {...register('investProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('investVal', {
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
            {...register('medicineProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('medicineVal', {
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
            {...register('natureProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('natureVal', {
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
            {...register('percepProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('percepVal', {
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
            {...register('perfProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('perfVal', {
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
            {...register('persProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('persVal', {
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
            {...register('religionProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('religionVal', {
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
            {...register('sleightProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('sleightVal', {
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
            {...register('stealthProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('stealthVal', {
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
            {...register('survProf')}
            type="checkbox"
            className={`${style.skillsCheckBox}`}
          />
          <input
            {...register('survVal', {
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
