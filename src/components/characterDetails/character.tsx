import { useForm, FormProvider } from 'react-hook-form';
import { characterSchema } from '../../utils/validators/characterValidator';
import { GeneralAndAppearance } from './characterSections/generalAndAppearance';
import { AbilityScore } from './characterSections/abilityScore';
import { EquipmentAndMoney } from './characterSections/equipmentAndMoney';
import { Combat } from './characterSections/combat';
import { FeatTraitsAndOther } from './characterSections/featTraitsAndOther';
import { Backstory } from './characterSections/backstory';
import { Spells } from './characterSections/spells';
import * as style from '../../assets/styles/components/charCampDetails/characterDetails.json';
import { useEffect, useState } from 'react';
import characterServices from '../../services/characterServices';

characterSchema.required();

export const CharacterDetails = (charId: any) => {
  const [character, setCharacter] = useState({});

  const methods = useForm({
    values: { ...character }
  });

  useEffect(() => {
    try {
      characterServices.getOne(charId.charId).then((data: any) => {
        setCharacter(data);
      });
      return;
    } catch (err) {
      console.log(err);
    }
  }, [charId]);

  return (
    <div className={`${style.component}`}>
      <FormProvider {...methods}>
        <div className={`${style.form}`}>
          <GeneralAndAppearance />
          <AbilityScore />
          <EquipmentAndMoney />
          <Combat />
          <FeatTraitsAndOther />
          <Backstory />
          <Spells />
          <br />
        </div>
      </FormProvider>
    </div>
  );
};
