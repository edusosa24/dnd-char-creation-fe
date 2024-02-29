import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { characterSchema } from '../../utils/validators/characterValidator';
import { GeneralAndAppearance } from './formSections/generalAndAppearance';
import { AbilityScore } from './formSections/abilityScore';
import { EquipmentAndMoney } from './formSections/equipmentAndMoney';
import { Combat } from './formSections/combat';
import { FeatTraitsAndOther } from './formSections/featTraitsAndOther';
import { Backstory } from './formSections/backstory';
import { Spells } from './formSections/spells';
import * as style from '../../assets/styles/components/characterForm/characterForm.json';
// import { DevTool } from '@hookform/devtools';

characterSchema.required();

export const CharacterForm = () => {
  /*
  {
    //    register,
    //    formState: { errors },
    handleSubmit
    //    setError
  }
  */

  const methods = useForm({ resolver: yupResolver(characterSchema) });

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
