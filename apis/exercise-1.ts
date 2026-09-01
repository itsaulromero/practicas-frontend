import { isPokemon, type Pokemon } from "../ts/exercise-5";

async function getPokemon(name: string): Promise<Pokemon> {
  const pokemonName = encodeURIComponent(name.trim().toLowerCase());

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );

  if (!response.ok) {
    throw new Error(
      `No se pudo obtener "${name}". HTTP ${response.status}`,
    );
  }

  const data: unknown = await response.json();

  if (!isPokemon(data)) {
    throw new Error(
      `La respuesta de "${name}" no tiene la estructura esperada.`,
    );
  }

  return data;
}

function showPokemon(pokemon: Pokemon): void {
  console.log({
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map(({ type }) => type.name),
    sprite: pokemon.sprites.front_default,
  });
}

const pokemonNames = ["ditto", "pikachu", "no-existe"];

const results = await Promise.allSettled(
  pokemonNames.map((name) => getPokemon(name)),
);

results.forEach((result, index) => {
  const name = pokemonNames[index];

  if (result.status === "fulfilled") {
    console.log(`Petición correcta: ${name}`);
    showPokemon(result.value);
    return;
  }

  const errorMessage =
    result.reason instanceof Error
      ? result.reason.message
      : String(result.reason);

  console.error(`Petición fallida: ${name} - ${errorMessage}`);
});