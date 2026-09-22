import { Link } from "react-router-dom";

interface PokemonCardData {
  id: number;
  name: string;
  image: string;
}

export default function PokemonCard({ pokemon }: { pokemon: PokemonCardData }) {
  return (
    <article className="movie-card">
      <img className="poster-image" src={pokemon.image} alt={pokemon.name} />

      <div>
        <p className="eyebrow">#{pokemon.id}</p>
        <h3>{pokemon.name}</h3>
        <Link className="primary-button" to={`/pokemons/${pokemon.id}`}>
          Voir le détail
        </Link>
      </div>
    </article>
  );
}
