import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { characterSchema } from '../../utils/validators/characterValidator';
import { GeneralAndAppearance } from './formSections/generalAndAppearance';
import { AbilityScore } from './formSections/abilityScore';
import { EquipmentAndMoney } from './formSections/equipmentAndMoney';
import { Combat } from './formSections/combat';
import { FeatTraitsAndOther } from './formSections/featTraitsAndOther';
import { Backstory } from './formSections/backstory';
import { Spells } from './formSections/spells';
import { FormFooter } from './formSections/footer';
import * as style from '../../assets/styles/components/characterForm/characterForm.json';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { loadOneCharacter } from '../../reducers/charactersReducer';
import { getStorage } from '../../utils/functions';
import characterServices from '../../services/characterServices';
import { setNotification } from '../../reducers/notificationReducer';

characterSchema.required();

export const CharacterForm = (charId: any) => {
  const dispatch = useAppDispatch();

  const character: any = useAppSelector((state) => {
    return state.characters;
  })[0];

  const methods = useForm({
    values: { ...character }
  });

  useEffect(() => {
    try {
      dispatch(loadOneCharacter(charId.charId));
    } catch (err) {
      console.log(err);
    }
  }, [charId, dispatch]);

  const updateChar: SubmitHandler<typeof characterSchema> = async (
    data: any
  ) => {
    try {
      const { userId, token } = getStorage();
      const { id, user, ...character } = Object.assign({}, data);
      await characterServices.updateOne(
        charId.charId,
        character,
        userId,
        token
      );

      dispatch(
        setNotification(
          `${character.general.name} successfully updated.`,
          'success',
          2
        )
      );
      return;
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className={`${style.component}`}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(updateChar)}
          className={`${style.form}`}
        >
          <GeneralAndAppearance />
          <AbilityScore />
          <EquipmentAndMoney />
          <Combat />
          <FeatTraitsAndOther />
          <Backstory />
          <Spells />
          <br />
          <FormFooter />
        </form>
      </FormProvider>
    </div>
  );
};
