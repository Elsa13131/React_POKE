import { Link } from "react-router-dom";

interface PokemonCardData {
  id: number;
  name: string;
  image: string;
}

export default function PokemonCard({ pokemon }: { pokemon: PokemonCardData }) {
  const imageUrl =
    pokemon.image ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  return (
    <article className="movie-card">
      <img className="poster-image" src={imageUrl} alt={pokemon.name} />

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
