import { z } from 'zod';

// Ability schema
export const AbilitySchema = z.object({
  ability: z.object({
    name: z.string(),
    url: z.string(),
  }),
  is_hidden: z.boolean(),
  slot: z.number(),
});

// Game index schema
export const GameIndexSchema = z.object({
  game_index: z.number(),
  version: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

// Move schema
export const MoveSchema = z.object({
  move: z.object({
    name: z.string(),
    url: z.string(),
  }),
  version_group_details: z.array(z.object({
    level_learned_at: z.number(),
    move_learn_method: z.object({
      name: z.string(),
      url: z.string(),
    }),
    version_group: z.object({
      name: z.string(),
      url: z.string(),
    }),
  })),
});

// Stat schema
export const StatSchema = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

// Type schema
export const TypeSchema = z.object({
  slot: z.number(),
  type: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

// Form schema
export const FormSchema = z.object({
  name: z.string(),
  url: z.string(),
});

// Species schema
export const SpeciesSchema = z.object({
  name: z.string(),
  url: z.string(),
});


export const SpriteSchema = z.object({
  back_default: z.string().nullable(),
  back_female: z.string().nullable(),
  back_shiny: z.string().nullable(),
  back_shiny_female: z.string().nullable(),
  front_default: z.string().nullable(),
  front_female: z.string().nullable(),
  front_shiny: z.string().nullable(),
  front_shiny_female: z.string().nullable(),
  other: z.object({
    dream_world: z.object({
      front_default: z.string().nullable(),
      front_female: z.string().nullable(),
    }).nullable(),
    home: z.object({
      front_default: z.string().nullable(),
      front_female: z.string().nullable(),
      front_shiny: z.string().nullable(),
      front_shiny_female: z.string().nullable(),
    }).nullable(),
    "official-artwork": z.object({
      front_default: z.string().nullable(),
      front_shiny: z.string().nullable(),
    }).nullable(),
    showdown: z.object({
      back_default: z.string().nullable(),
      back_female: z.string().nullable(),
      back_shiny: z.string().nullable(),
      back_shiny_female: z.string().nullable(),
      front_default: z.string().nullable(),
      front_female: z.string().nullable(),
      front_shiny: z.string().nullable(),
      front_shiny_female: z.string().nullable(),
    }).nullable(),
  }).nullable(),
  versions: z.object({
    "generation-i": z.object({
      "red-blue": z.object({
        back_default: z.string().nullable(),
        back_gray: z.string().nullable(),
        back_transparent: z.string().nullable(),
        front_default: z.string().nullable(),
        front_gray: z.string().nullable(),
        front_transparent: z.string().nullable(),
      }),
      yellow: z.object({
        back_default: z.string().nullable(),
        back_gray: z.string().nullable(),
        back_transparent: z.string().nullable(),
        front_default: z.string().nullable(),
        front_gray: z.string().nullable(),
        front_transparent: z.string().nullable(),
      }),
    }),
    "generation-ii": z.object({
      crystal: z.object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_transparent: z.string().nullable(),
        back_transparent: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_transparent: z.string().nullable(),
        front_transparent: z.string().nullable(),
      }),
      gold: z.object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_transparent: z.string().nullable(),
      }),
      silver: z.object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_transparent: z.string().nullable(),
      }),
    }),
    "generation-iii": z.object({
      emerald: z.object({
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      }),
      "firered-leafgreen": z.object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      }),
      "ruby-sapphire": z.object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      }),
    }),
    "generation-iv": z.object({
      "diamond-pearl": z.object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
      "heartgold-soulsilver": z.object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
      platinum: z.object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
    }),
    "generation-v": z.object({
      "black-white": z.object({
        animated: z.object({
          back_default: z.string().nullable(),
          back_female: z.string().nullable(),
          back_shiny: z.string().nullable(),
          back_shiny_female: z.string().nullable(),
          front_default: z.string().nullable(),
          front_female: z.string().nullable(),
          front_shiny: z.string().nullable(),
          front_shiny_female: z.string().nullable(),
        }),
      }),
    }),
  }),
});

// Pokemon schema
export const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  base_experience: z.number(),
  height: z.number(),
  weight: z.number(),
  abilities: z.array(AbilitySchema),
  forms: z.array(FormSchema),
  game_indices: z.array(GameIndexSchema),
  moves: z.array(MoveSchema),
  species: SpeciesSchema,
  sprites: SpriteSchema,
  stats: z.array(StatSchema),
  types: z.array(TypeSchema),
});