import styles from "./PokemonCard.module.css";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export function PokemonCard() {
  const pokemon = pokemonList[0];
  //const pokemon = pokemonList[1];

  return (
    <>
      <figure className={styles.card}>
        {pokemon.imgSrc ? (
          <img
            src={pokemon.imgSrc}
            alt={pokemon.name}
            className={styles.cardImg}
          />
        ) : null}
        <figcaption>Bulbasaur</figcaption>
      </figure>
    </>
  );
}
