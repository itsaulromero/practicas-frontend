type PokemonType = {
  type: {
    name: string;
  };
};

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  sprites: {
    front_default: string | null;
  };
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isPokemonType(data: unknown): data is PokemonType {
  if (!isRecord(data) || !isRecord(data.type)) {
    return false;
  }

  return typeof data.type.name === "string";
}

export function isPokemon(data: unknown): data is Pokemon {
  if (!isRecord(data) || !isRecord(data.sprites)) {
    return false;
  }

  if (!Array.isArray(data.types) || !data.types.every(isPokemonType)) {
    return false;
  }

  return (
    typeof data.id === "number" &&
    typeof data.name === "string" &&
    typeof data.height === "number" &&
    typeof data.weight === "number" &&
    (typeof data.sprites.front_default === "string" ||
      data.sprites.front_default === null)
  );
}

export async function getPokemon(name: string): Promise<Pokemon> {
  const pokemonName = encodeURIComponent(name.toLowerCase());
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );

  if (!response.ok) {
    throw new Error(
      `No se pudo obtener el Pokémon "${name}". HTTP ${response.status}`,
    );
  }

  const data: unknown = await response.json();

  if (!isPokemon(data)) {
    throw new Error("La respuesta de la API no tiene la estructura esperada.");
  }

  return data;
}
