import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { characterSchema } from '../../utils/validators/characterValidator';
import * as style from '../../assets/styles/components/characterForm/characterForm.json';

characterSchema.required();

export const CharacterForm = () => {
  const {
    //    register,
    //    formState: { errors },
    handleSubmit
    //    setError
  } = useForm({ resolver: yupResolver(characterSchema) });

  const updateCharacter: SubmitHandler<any> = async (data: any) => {
    try {
      return data;
    } catch {
      return;
    }
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
    <div className={`${style.component}`}>
      <form
        onSubmit={handleSubmit(updateCharacter)}
        className={`${style.form}`}
      >
        <section className={`${style.generalSection}`}>
          <h2 className={`${style.sectionTitle}`}>
            General info & Appeareance:
          </h2>
          <fieldset className={`${style.nameFieldSet}`}>
            <label>Name</label>
            <input className={`${style.nameInput}`} maxLength={50} />
          </fieldset>
          <div className={`${style.generalDiv}`}>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Class</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Level</label>
              <input
                className={`${style.generalInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(999, 0, e)}
              />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Background</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Player name</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Race</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Alignment</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Experience points</label>
              <input
                className={`${style.generalInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(999999999999999, 0, e)}
              />
            </fieldset>
          </div>
          <div className={`${style.generalDiv}`}>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Age</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Height</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Weight</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Eyes</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Skin</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
            <fieldset className={`${style.generalFieldSet}`}>
              <label>Hair</label>
              <input className={`${style.generalInput}`} maxLength={20} />
            </fieldset>
          </div>
        </section>
        <section className={`${style.aScoreSection}`}>
          <h2 className={`${style.sectionTitle}`}>Ability Score:</h2>
          <div className={`${style.aScoreStats}`}>
            <h4 className={`${style.subTitle}`}>STATS</h4>
            <div className={`${style.statsDiv}`}>
              <fieldset className={`${style.statsFieldSet}`}>
                <label className={`${style.statsLabel}`}>STR</label>
                <input
                  className={`${style.statsMainInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(99, -99, e)}
                />
                <input
                  className={`${style.statsSubInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, -9, e)}
                />
              </fieldset>
              <fieldset className={`${style.statsFieldSet}`}>
                <label className={`${style.statsLabel}`}>DEX</label>
                <input
                  className={`${style.statsMainInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(99, -99, e)}
                />
                <input
                  className={`${style.statsSubInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, -9, e)}
                />
              </fieldset>
              <fieldset className={`${style.statsFieldSet}`}>
                <label className={`${style.statsLabel}`}>CON</label>
                <input
                  className={`${style.statsMainInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(99, -99, e)}
                />
                <input
                  className={`${style.statsSubInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, -9, e)}
                />
              </fieldset>
              <fieldset className={`${style.statsFieldSet}`}>
                <label className={`${style.statsLabel}`}>INT</label>
                <input
                  className={`${style.statsMainInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(99, -99, e)}
                />
                <input
                  className={`${style.statsSubInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, -9, e)}
                />
              </fieldset>
              <fieldset className={`${style.statsFieldSet}`}>
                <label className={`${style.statsLabel}`}>WIS</label>
                <input
                  className={`${style.statsMainInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(99, -99, e)}
                />
                <input
                  className={`${style.statsSubInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, -9, e)}
                />
              </fieldset>
              <fieldset className={`${style.statsFieldSet}`}>
                <label className={`${style.statsLabel}`}>CHA</label>
                <input
                  className={`${style.statsMainInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(99, -99, e)}
                />
                <input
                  className={`${style.statsSubInput}`}
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, -9, e)}
                />
              </fieldset>
            </div>
          </div>

          <div className={`${style.aScoreOthers}`}>
            <fieldset className={`${style.aSOthersFieldSet}`}>
              <label className={`${style.aSOthersLabel}`}>Inspiration</label>
              <input
                className={`${style.aSOthersInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
            </fieldset>
            <fieldset className={`${style.aSOthersFieldSet}`}>
              <label className={`${style.aSOthersLabel}`}>Prof. bonus</label>
              <input
                className={`${style.aSOthersInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
            </fieldset>
            <fieldset className={`${style.aSOthersFieldSet}`}>
              <label className={`${style.aSOthersLabel}`}>Passive Wisdom</label>
              <input
                className={`${style.aSOthersInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
            </fieldset>
          </div>
          <div className={`${style.aScoreSaves}`}>
            <h4 className={`${style.subTitle}`}>STATS SAVES</h4>
            <fieldset className={`${style.statSavesFieldSet}`}>
              <input type="checkbox" className={`${style.statSavesCheckBox}`} />
              <input
                className={`${style.statSavesInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.statSavesLabel}`}>STR</label>
            </fieldset>
            <fieldset className={`${style.statSavesFieldSet}`}>
              <input type="checkbox" className={`${style.statSavesCheckBox}`} />
              <input
                className={`${style.statSavesInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.statSavesLabel}`}>DEX</label>
            </fieldset>
            <fieldset className={`${style.statSavesFieldSet}`}>
              <input type="checkbox" className={`${style.statSavesCheckBox}`} />
              <input
                className={`${style.statSavesInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.statSavesLabel}`}>CON</label>
            </fieldset>
            <fieldset className={`${style.statSavesFieldSet}`}>
              <input type="checkbox" className={`${style.statSavesCheckBox}`} />
              <input
                className={`${style.statSavesInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.statSavesLabel}`}>INT</label>
            </fieldset>
            <fieldset className={`${style.statSavesFieldSet}`}>
              <input type="checkbox" className={`${style.statSavesCheckBox}`} />
              <input
                className={`${style.statSavesInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.statSavesLabel}`}>WIS</label>
            </fieldset>
            <fieldset className={`${style.statSavesFieldSet}`}>
              <input type="checkbox" className={`${style.statSavesCheckBox}`} />
              <input
                className={`${style.statSavesInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.statSavesLabel}`}>CHA</label>
            </fieldset>
          </div>

          <div className={`${style.aScoreSkills}`}>
            <h4 className={`${style.subTitle}`}>SKILLS</h4>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Acrobatics <span className="font-normal">(Dex)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Acrobatics <span className="font-normal">(Dex)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Acrobatics <span className="font-normal">(Dex)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Acrobatics <span className="font-normal">(Dex)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Acrobatics <span className="font-normal">(Dex)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Animal Handling <span className="font-normal">(Wis)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Arcana <span className="font-normal">(Int)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Athletics <span className="font-normal">(Str)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Deception <span className="font-normal">(Cha)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                History <span className="font-normal">(Int)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Insight <span className="font-normal">(Wis)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Intimidation <span className="font-normal">(Cha)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Investigation <span className="font-normal">(Int)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Medicine <span className="font-normal">(Wis)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Nature <span className="font-normal">(Int)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Perception <span className="font-normal">(Wis)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Performance <span className="font-normal">(Cha)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Persuasion <span className="font-normal">(Cha)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Religion <span className="font-normal">(Int)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Sleight of Hand <span className="font-normal">(Dex)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Stealth <span className="font-normal">(Dex)</span>
              </label>
            </fieldset>
            <fieldset className={`${style.skillsFieldSet}`}>
              <input type="checkbox" className={`${style.skillsCheckBox}`} />
              <input
                className={`${style.skillsInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
              <label className={`${style.skillsLabel} `}>
                Survival <span className="font-normal">(Wis)</span>
              </label>
            </fieldset>
          </div>
        </section>
        <section className={`${style.eAndMSection}`}>
          <h2 className={`${style.sectionTitle}`}>Equipment & Money:</h2>
          <div className={`${style.moneyDiv}`}>
            <fieldset className={`${style.moneyFieldSet}`}>
              <label className={`${style.moneyLabel}`}>CP</label>
              <input
                className={`${style.moneyInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(999, 0, e)}
              />
            </fieldset>
            <fieldset className={`${style.moneyFieldSet}`}>
              <label className={`${style.moneyLabel}`}>SP</label>
              <input
                className={`${style.moneyInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(999, 0, e)}
              />
            </fieldset>
            <fieldset className={`${style.moneyFieldSet}`}>
              <label className={`${style.moneyLabel}`}>EP</label>
              <input
                className={`${style.moneyInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(999, 0, e)}
              />
            </fieldset>
            <fieldset className={`${style.moneyFieldSet}`}>
              <label className={`${style.moneyLabel}`}>GP</label>
              <input
                className={`${style.moneyInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(999, 0, e)}
              />
            </fieldset>
            <fieldset className={`${style.moneyFieldSet}`}>
              <label className={`${style.moneyLabel}`}>PP</label>
              <input
                className={`${style.moneyInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(999, 0, e)}
              />
            </fieldset>
          </div>
          <fieldset className={`${style.equipmentFieldSet}`}>
            <textarea
              className={`${style.equipmentTextArea}`}
              maxLength={1000}
            />
          </fieldset>
        </section>
        <section className={`${style.combatSection}`}>
          <h2 className={`${style.sectionTitle}`}>Combat:</h2>
          <div className={`${style.combatOthersDiv}`}>
            <fieldset className={`${style.combatOthersFieldSet}`}>
              <label className={`${style.combatOthersLabel}`}>
                Armor Class
              </label>
              <input
                className={`${style.combatOthersInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
            </fieldset>
            <fieldset className={`${style.combatOthersFieldSet}`}>
              <label className={`${style.combatOthersLabel}`}>Initiative</label>
              <input
                className={`${style.combatOthersInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
            </fieldset>
            <fieldset className={`${style.combatOthersFieldSet}`}>
              <label className={`${style.combatOthersLabel}`}>Speed</label>
              <input
                className={`${style.combatOthersInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
            </fieldset>
          </div>
          <div className={`${style.combatOthersDiv}`}>
            <h4 className={`${style.subTitle}`}>Hit Points:</h4>
            <fieldset className={`${style.combatHPFieldSet}`}>
              <label className={`${style.combatHPLabel}`}>Total:</label>
              <input
                className={`${style.combatHPInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(999, -999, e)}
              />
            </fieldset>
            <fieldset className={`${style.combatHPFieldSet}`}>
              <label className={`${style.combatHPLabel}`}>Current:</label>
              <input
                className={`${style.combatHPInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(999, -999, e)}
              />
            </fieldset>
            <fieldset className={`${style.combatHPFieldSet}`}>
              <label className={`${style.combatHPLabel}`}>Temporary:</label>
              <input
                className={`${style.combatHPInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(999, -999, e)}
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
                  className={`${style.combatHDInput} rounded-t-full border-b-0`}
                  type="text"
                  maxLength={15}
                />
              </fieldset>
              <fieldset className={`${style.combatHDFieldSet}`}>
                <label className={`${style.combatHDLabel}`}>Total:</label>
                <input
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
              <span className={`${style.combatAnSSpan} w-[19%]`}>
                ATK BONUS
              </span>
              <span className={`${style.combatAnSSpan} w-[39%]`}>
                DAMAGE / TYPE
              </span>
            </div>
            <div className={`${style.combatAnSSubDiv} justify-between`}>
              <input
                type="text"
                className={`${style.combatAnSInput} w-[40%]`}
                maxLength={22}
              />
              <input
                type="text"
                className={`${style.combatAnSInput} w-[19%]`}
                maxLength={11}
              />
              <input
                type="text"
                className={`${style.combatAnSInput} w-[40%]`}
                maxLength={22}
              />
            </div>
            <div className={`${style.combatAnSSubDiv} justify-between`}>
              <input
                type="text"
                className={`${style.combatAnSInput} w-[40%]`}
                maxLength={22}
              />
              <input
                type="text"
                className={`${style.combatAnSInput} w-[19%]`}
                maxLength={11}
              />
              <input
                type="text"
                className={`${style.combatAnSInput} w-[40%]`}
                maxLength={22}
              />
            </div>
            <div className={`${style.combatAnSSubDiv} justify-between`}>
              <input
                type="text"
                className={`${style.combatAnSInput} w-[40%]`}
                maxLength={22}
              />
              <input
                type="text"
                className={`${style.combatAnSInput} w-[19%]`}
                maxLength={11}
              />
              <input
                type="text"
                className={`${style.combatAnSInput} w-[40%]`}
                maxLength={22}
              />
            </div>
            <textarea
              className={`${style.combatAnSTextArea}`}
              maxLength={600}
            />
          </div>
        </section>
        <section className={`${style.featuresSection}`}>
          <h2 className={`${style.sectionTitle}`}>
            Feature traits and other proficiencies:
          </h2>
          <div className={`${style.featuresDiv}`}>
            <fieldset className={`${style.featuresFieldSet} h-40`}>
              <label className={`${style.featuresLabel}`}>
                PERSONALITY TRAITS
              </label>
              <textarea
                className={`${style.featuresTextArea}`}
                maxLength={200}
              />
            </fieldset>
            <fieldset className={`${style.featuresFieldSet} h-40`}>
              <label className={`${style.featuresLabel}`}>IDEALS</label>
              <textarea
                className={`${style.featuresTextArea}`}
                maxLength={200}
              />
            </fieldset>
            <fieldset className={`${style.featuresFieldSet} h-40`}>
              <label className={`${style.featuresLabel}`}>BONDS</label>
              <textarea
                className={`${style.featuresTextArea}`}
                maxLength={200}
              />
            </fieldset>
            <fieldset className={`${style.featuresFieldSet} h-40`}>
              <label className={`${style.featuresLabel}`}>FLAWS</label>
              <textarea
                className={`${style.featuresTextArea}`}
                maxLength={200}
              />
            </fieldset>
            <fieldset className={`${style.featuresFieldSet} h-96`}>
              <label className={`${style.featuresLabel}`}>
                OTHER PROFICIENCIES & LANGUAGES
              </label>
              <textarea
                className={`${style.featuresTextArea}`}
                maxLength={1200}
              />
            </fieldset>
            <fieldset className={`${style.featuresFieldSet} h-96`}>
              <label className={`${style.featuresLabel}`}>
                FEATURES & TRAITS
              </label>
              <textarea
                className={`${style.featuresTextArea} w-full`}
                maxLength={1200}
              />
            </fieldset>
          </div>
        </section>
        <section className={`${style.featuresSection}`}>
          <h2 className={`${style.sectionTitle}`}>Backstory:</h2>
          <div className={`${style.featuresDiv}`}>
            <fieldset className={`${style.featuresFieldSet} h-96`}>
              <label className={`${style.featuresLabel}`}>
                ALLIES & ORGNAIZATIONS
              </label>
              <textarea
                className={`${style.featuresTextArea}`}
                maxLength={1200}
              />
            </fieldset>
            <fieldset className={`${style.featuresFieldSet} h-96`}>
              <label className={`${style.featuresLabel}`}>
                ADDITIONAL FEATURES & TRAITS
              </label>
              <textarea
                className={`${style.featuresTextArea}`}
                maxLength={1200}
              />
            </fieldset>
            <fieldset className={`${style.featuresFieldSet} h-96`}>
              <label className={`${style.featuresLabel}`}>TREASURE</label>
              <textarea
                className={`${style.featuresTextArea}`}
                maxLength={1200}
              />
            </fieldset>
            <fieldset className={`${style.featuresFieldSet} h-96`}>
              <label className={`${style.featuresLabel}`}>
                CHARACTER BACKSTORY
              </label>
              <textarea
                className={`${style.featuresTextArea}`}
                maxLength={1200}
              />
            </fieldset>
          </div>
        </section>
        <section className={`${style.spellsSection}`}>
          <h2 className={`${style.sectionTitle}`}>Spells:</h2>
          <fieldset className={`${style.spellsOthersFieldSet}`}>
            <label className={`${style.spellsOthersLabel}`}>
              SPELLCASTING CLASS
            </label>
            <input
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
                className={`${style.spellsOthersInput}`}
                type="text"
                maxLength={5}
              />
            </fieldset>
            <fieldset className={`${style.spellsOthersFieldSet}`}>
              <label className={`${style.spellsOthersLabel}`}>
                SPELL SAVE DC
              </label>
              <input
                className={`${style.spellsOthersInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(9999, 0, e)}
              />
            </fieldset>
            <fieldset className={`${style.spellsOthersFieldSet}`}>
              <label className={`${style.spellsOthersLabel}`}>
                SPELL ATTACK BONUS
              </label>
              <input
                className={`${style.spellsOthersInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(9999, 0, e)}
              />
            </fieldset>
          </div>
          <div className={`${style.spellsGrid}`}>
            <div className={`xl:row-span-6 ${style.spellsDiv}`}>
              <div className={`${style.spellSlotsDiv}`}>
                <p className={`${style.spellsLevel}`}>0</p>
                <p className={`${style.spellCantrip}`}>CANTRIPS</p>
              </div>
              <div className={`${style.spellCantripDiv}`}>
                <input className={`${style.spellCantripName}`} maxLength={20} />
              </div>
            </div>
            <div
              className={`xl:row-span-7 xl:col-start-1 xl:row-start-7 ${style.spellsDiv}`}
            >
              <div className={`${style.spellSlotsDiv}`}>
                <p className={`${style.spellsLevel}`}>1</p>
                <input
                  className={`${style.spellsTotal}`}
                  placeholder="SLOTS TOTAL"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(13, 0, e)}
                />
                <input
                  className={`${style.spellsExpended}`}
                  placeholder="SLOTS EXPENDED"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(13, 0, e)}
                />
              </div>
              <div className={`${style.spellsKnownDiv}`}>
                <input type="checkbox" className={`${style.spellCheck}`} />
                <input className={`${style.spellName}`} maxLength={20} />
              </div>
            </div>
            <div
              className={`xl:row-span-7 xl:col-start-1 xl:row-start-14 ${style.spellsDiv}`}
            >
              <div className={`${style.spellSlotsDiv}`}>
                <p className={`${style.spellsLevel}`}>2</p>
                <input
                  className={`${style.spellsTotal}`}
                  placeholder="SLOTS TOTAL"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(13, 0, e)}
                />
                <input
                  className={`${style.spellsExpended}`}
                  placeholder="SLOTS EXPENDED"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(13, 0, e)}
                />
              </div>
              <div className={`${style.spellsKnownDiv}`}>
                <input type="checkbox" className={`${style.spellCheck}`} />
                <input className={`${style.spellName}`} maxLength={20} />
              </div>
            </div>
            <div
              className={`xl:row-span-7 xl:col-start-2 xl:row-start-1 ${style.spellsDiv}`}
            >
              <div className={`${style.spellSlotsDiv}`}>
                <p className={`${style.spellsLevel}`}>3</p>
                <input
                  className={`${style.spellsTotal}`}
                  placeholder="SLOTS TOTAL"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(13, 0, e)}
                />
                <input
                  className={`${style.spellsExpended}`}
                  placeholder="SLOTS EXPENDED"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(13, 0, e)}
                />
              </div>
              <div className={`${style.spellsKnownDiv}`}>
                <input type="checkbox" className={`${style.spellCheck}`} />
                <input className={`${style.spellName}`} maxLength={20} />
              </div>
            </div>
            <div
              className={`xl:row-span-7 xl:col-start-2 xl:row-start-8 ${style.spellsDiv}`}
            >
              <div className={`${style.spellSlotsDiv}`}>
                <p className={`${style.spellsLevel}`}>4</p>
                <input
                  className={`${style.spellsTotal}`}
                  placeholder="SLOTS TOTAL"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(13, 0, e)}
                />
                <input
                  className={`${style.spellsExpended}`}
                  placeholder="SLOTS EXPENDED"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(13, 0, e)}
                />
              </div>
              <div className={`${style.spellsKnownDiv}`}>
                <input type="checkbox" className={`${style.spellCheck}`} />
                <input className={`${style.spellName}`} maxLength={20} />
              </div>
            </div>
            <div
              className={`xl:row-span-6 xl:col-start-2 xl:row-start-15 ${style.spellsDiv}`}
            >
              <div className={`${style.spellSlotsDiv}`}>
                <p className={`${style.spellsLevel}`}>5</p>
                <input
                  className={`${style.spellsTotal}`}
                  placeholder="SLOTS TOTAL"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, 0, e)}
                />
                <input
                  className={`${style.spellsExpended}`}
                  placeholder="SLOTS EXPENDED"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, 0, e)}
                />
              </div>
              <div className={`${style.spellsKnownDiv}`}>
                <input type="checkbox" className={`${style.spellCheck}`} />
                <input className={`${style.spellName}`} maxLength={20} />
              </div>
            </div>
            <div
              className={`xl:row-span-6 xl:col-start-3 xl:row-start-1 ${style.spellsDiv}`}
            >
              <div className={`${style.spellSlotsDiv}`}>
                <p className={`${style.spellsLevel}`}>6</p>
                <input
                  className={`${style.spellsTotal}`}
                  placeholder="SLOTS TOTAL"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, 0, e)}
                />
                <input
                  className={`${style.spellsExpended}`}
                  placeholder="SLOTS EXPENDED"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, 0, e)}
                />
              </div>
              <div className={`${style.spellsKnownDiv}`}>
                <input type="checkbox" className={`${style.spellCheck}`} />
                <input className={`${style.spellName}`} maxLength={20} />
              </div>
            </div>
            <div
              className={`xl:row-span-6 xl:col-start-3 xl:row-start-7 ${style.spellsDiv}`}
            >
              <div className={`${style.spellSlotsDiv}`}>
                <p className={`${style.spellsLevel}`}>7</p>
                <input
                  className={`${style.spellsTotal}`}
                  placeholder="SLOTS TOTAL"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, 0, e)}
                />
                <input
                  className={`${style.spellsExpended}`}
                  placeholder="SLOTS EXPENDED"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(9, 0, e)}
                />
              </div>
              <div className={`${style.spellsKnownDiv}`}>
                <input type="checkbox" className={`${style.spellCheck}`} />
                <input className={`${style.spellName}`} maxLength={20} />
              </div>
            </div>
            <div
              className={`xl:row-span-4 xl:col-start-3 xl:row-start-13 ${style.spellsDiv}`}
            >
              <div className={`${style.spellSlotsDiv}`}>
                <p className={`${style.spellsLevel}`}>8</p>
                <input
                  className={`${style.spellsTotal}`}
                  placeholder="SLOTS TOTAL"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(7, 0, e)}
                />
                <input
                  className={`${style.spellsExpended}`}
                  placeholder="SLOTS EXPENDED"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(7, 0, e)}
                />
              </div>
              <div className={`${style.spellsKnownDiv}`}>
                <input type="checkbox" className={`${style.spellCheck}`} />
                <input className={`${style.spellName}`} maxLength={20} />
              </div>
            </div>
            <div
              className={`xl:row-span-4 xl:col-start-3 xl:row-start-17 ${style.spellsDiv}`}
            >
              <div className={`${style.spellSlotsDiv}`}>
                <p className={`${style.spellsLevel}`}>9</p>
                <input
                  className={`${style.spellsTotal}`}
                  placeholder="SLOTS TOTAL"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(7, 0, e)}
                />
                <input
                  className={`${style.spellsExpended}`}
                  placeholder="SLOTS EXPENDED"
                  type="text"
                  inputMode="numeric"
                  onInput={(e) => limitInput(e)}
                  onChange={(e) => limitNumber(7, 0, e)}
                />
              </div>
              <div className={`${style.spellsKnownDiv}`}>
                <input type="checkbox" className={`${style.spellCheck}`} />
                <input className={`${style.spellName}`} maxLength={20} />
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};
