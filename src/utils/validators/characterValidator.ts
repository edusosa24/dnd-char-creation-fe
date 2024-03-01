import * as yup from 'yup';

export const characterSchema = yup.object({
  general: yup.object().shape({
    name: yup.string(),
    class: yup.string(),
    level: yup.number(),
    background: yup.string(),
    playerName: yup.string(),
    race: yup.string(),
    alignment: yup.string(),
    experience: yup.number()
  }),
  abilityScore: yup.object().shape({
    inspiration: yup.number(),
    proficiencyBonus: yup.number(),
    passiveWisdom: yup.number(),
    stats: yup.object().shape({
      strength: yup
        .object()
        .shape({ value: yup.number(), bonus: yup.number() }),
      dexterity: yup
        .object()
        .shape({ value: yup.number(), bonus: yup.number() }),

      constitution: yup
        .object()
        .shape({ value: yup.number(), bonus: yup.number() }),

      intelligence: yup
        .object()
        .shape({ value: yup.number(), bonus: yup.number() }),

      wisdom: yup.object().shape({ value: yup.number(), bonus: yup.number() }),

      charisma: yup.object().shape({ value: yup.number(), bonus: yup.number() })
    }),
    savingThrows: yup.object().shape({
      strength: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      dexterity: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      constitution: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      intelligence: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      wisdom: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      charisma: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      })
    }),
    skills: yup.object().shape({
      acrobatics: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      animalHandling: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      arcana: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      athletics: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      deception: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      history: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      insight: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      intimidation: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      investigation: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      medicine: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      nature: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      perception: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      performance: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      persuasion: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      religion: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      sleightOfHand: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      stealth: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      }),
      survival: yup.object().shape({
        proficiency: yup.boolean(),
        bonus: yup.number()
      })
    })
  }),
  featuresTraitsAndOtherProficiencies: yup.object().shape({
    personalityTraits: yup.string(),
    ideals: yup.string(),
    bonds: yup.string(),
    flaws: yup.string(),
    featuresAndTraits: yup.string(),
    otherProficienciesAndLanguages: yup.string()
  }),
  combat: yup.object().shape({
    armorClass: yup.number(),
    initiative: yup.number(),
    speed: yup.number(),
    maxHitPoints: yup.number(),
    currentHitPoints: yup.number(),
    temporaryHitPoints: yup.number(),
    hitDice: yup.string(),
    hitDiceTotal: yup.string(),
    deathSaves: yup.object().shape({
      success: yup.number(),
      failure: yup.number()
    }),
    attacksAndSpellcasting: yup.object().shape({
      weapons: yup.array().of(
        yup.object().shape({
          name: yup.string(),
          attackBonus: yup.string(),
          damageAndType: yup.string()
        })
      ),
      extra: yup.string()
    })
  }),

  equipmentAndMoney: yup.object().shape({
    money: yup.object().shape({
      copper: yup.number(),
      silver: yup.number(),
      electrum: yup.number(),
      gold: yup.number(),
      platinum: yup.number()
    }),
    equipment: yup.string()
  }),

  appearance: yup.object().shape({
    age: yup.string(),
    height: yup.string(),
    weight: yup.string(),
    eyes: yup.string(),
    skin: yup.string(),
    hair: yup.string(),
    portrait: yup.string()
  }),
  backstory: yup.object().shape({
    backstory: yup.string(),
    alliesAndOrganizations: yup.string(),
    organizationName: yup.string(),
    organizationSymbol: yup.string(),
    additionalFeaturesAndTraits: yup.string(),
    treasure: yup.string()
  }),
  spells: yup.object().shape({
    castingClass: yup.string(),
    castingAbility: yup.string(),
    saveDice: yup.number(),
    bonusAttack: yup.number(),
    cantrips: yup.array().of(
      yup.object().shape({
        name: yup.string()
      })
    ),
    slots: yup.object().shape({
      level1: yup.object().shape({
        total: yup.number(),
        expended: yup.number(),
        known: yup.array().of(
          yup.object().shape({
            name: yup.string(),
            prepared: yup.boolean()
          })
        )
      }),

      level2: yup.object().shape({
        total: yup.number(),
        expended: yup.number(),
        known: yup.array().of(
          yup.object().shape({
            name: yup.string(),
            prepared: yup.boolean()
          })
        )
      }),
      level3: yup.object().shape({
        total: yup.number(),
        expended: yup.number(),
        known: yup.array().of(
          yup.object().shape({
            name: yup.string(),
            prepared: yup.boolean()
          })
        )
      }),
      level4: yup.object().shape({
        total: yup.number(),
        expended: yup.number(),
        known: yup.array().of(
          yup.object().shape({
            name: yup.string(),
            prepared: yup.boolean()
          })
        )
      }),
      level5: yup.object().shape({
        total: yup.number(),
        expended: yup.number(),
        known: yup.array().of(
          yup.object().shape({
            name: yup.string(),
            prepared: yup.boolean()
          })
        )
      }),
      level6: yup.object().shape({
        total: yup.number(),
        expended: yup.number(),
        known: yup.array().of(
          yup.object().shape({
            name: yup.string(),
            prepared: yup.boolean()
          })
        )
      }),
      level7: yup.object().shape({
        total: yup.number(),
        expended: yup.number(),
        known: yup.array().of(
          yup.object().shape({
            name: yup.string(),
            prepared: yup.boolean()
          })
        )
      }),
      level8: yup.object().shape({
        total: yup.number(),
        expended: yup.number(),
        known: yup.array().of(
          yup.object().shape({
            name: yup.string(),
            prepared: yup.boolean()
          })
        )
      }),
      level9: yup.object().shape({
        total: yup.number(),
        expended: yup.number(),
        known: yup.array().of(
          yup.object().shape({
            name: yup.string(),
            prepared: yup.boolean()
          })
        )
      })
    })
  })
});
