/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly POKEMON_LIMIT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
