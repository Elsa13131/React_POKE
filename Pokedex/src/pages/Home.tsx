import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">Pokedex</p>
      <h2>Bienvenue dans le Pokedex!</h2>
      <p>
        Ce site vous permet de consulter les informations sur les différents Pokémon et de découvrir leurs caractéristiques uniques.
      </p>
      <Link className="primary-button" to="/pokemons">Voir le catalogue</Link>
    </section>
  );
}
