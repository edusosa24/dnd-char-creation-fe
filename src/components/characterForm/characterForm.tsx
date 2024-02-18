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
        <h3 className={`${style.sectionTitle}`}>General info & Appeareance:</h3>
        <fieldset className={`${style.nameFieldSet}`}>
          <label>Name</label>
          <input className={`${style.nameInput}`} maxLength={50} />
        </fieldset>
        <section className={`${style.generalSection}`}>
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
        <h3 className={`${style.sectionTitle}`}>Ability Score:</h3>
        <section className={`${style.aScoreSection}`}>
          <div className={`${style.aScoreStats}`}>
            <h3 className={`${style.subTitle}`}>STATS</h3>
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
            <fieldset className={`${style.aSOthersFieldSet}`}>
              <label className={`${style.aSOthersLabel}`}>Armor Class</label>
              <input
                className={`${style.aSOthersInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
            </fieldset>
            <fieldset className={`${style.aSOthersFieldSet}`}>
              <label className={`${style.aSOthersLabel}`}>Initiative</label>
              <input
                className={`${style.aSOthersInput}`}
                type="text"
                inputMode="numeric"
                onInput={(e) => limitInput(e)}
                onChange={(e) => limitNumber(99, -99, e)}
              />
            </fieldset>
            <fieldset className={`${style.aSOthersFieldSet}`}>
              <label className={`${style.aSOthersLabel}`}>Speed</label>
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
            <h3 className={`${style.subTitle}`}>STATS SAVES</h3>
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
            <h3 className={`${style.subTitle}`}>SKILLS</h3>
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
          <h3 className={`${style.sectionTitle}`}>Equipment & Money:</h3>
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
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </fieldset>
        </section>
      </form>
    </div>
  );
};
