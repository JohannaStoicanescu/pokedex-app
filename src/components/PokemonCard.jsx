import styles from "./PokemonCard.module.css";

export function PokemonCard() {
  return (
    <>
      <figure className={styles.card}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur"
          className={styles.cardImg}
        />
        <figcaption>Bulbasaur</figcaption>
      </figure>
    </>
  );
}
