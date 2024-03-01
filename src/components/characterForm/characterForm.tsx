import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import { characterSchema } from '../../utils/validators/characterValidator';
import { GeneralAndAppearance } from './formSections/generalAndAppearance';
import { AbilityScore } from './formSections/abilityScore';
import { EquipmentAndMoney } from './formSections/equipmentAndMoney';
import { Combat } from './formSections/combat';
import { FeatTraitsAndOther } from './formSections/featTraitsAndOther';
import { Backstory } from './formSections/backstory';
import { Spells } from './formSections/spells';
import * as style from '../../assets/styles/components/characterForm/characterForm.json';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { loadOneCharacter } from '../../reducers/charactersReducer';
// import { DevTool } from '@hookform/devtools';

characterSchema.required();

export const CharacterForm = (charId: any) => {
  const dispatch = useAppDispatch();
  //const navigate = useNavigate();
  //let character: typeof characterSchema;

  const character: any = useAppSelector((state) => {
    return state.characters;
  });

  console.log(character);

  const methods = useForm({
    //resolver: yupResolver(characterSchema),
    values: { ...character }
  });

  useEffect(() => {
    try {
      dispatch(loadOneCharacter(charId.charId));
    } catch (err) {
      console.log(err);
    }
  }, [charId, dispatch]);

  const updateCharacter: SubmitHandler<any> = async (data: any) => {
    try {
      return data;
    } catch {
      return;
    }
  };

  return (
    <div className={`${style.component}`}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(updateCharacter)}
          className={`${style.form}`}
        >
          <GeneralAndAppearance />
          <AbilityScore />
          <EquipmentAndMoney />
          <Combat />
          <FeatTraitsAndOther />
          <Backstory />
          <Spells />
        </form>
      </FormProvider>
    </div>
  );
};

// <DevTool control={methods.control} />
