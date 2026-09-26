import PokemonCard from "../components/PokemonCard";
import { useFavorites } from "../pages/FavoritesContext";


export default function Favorites() {


 const { favorites } = useFavorites();

  return (
    <section className="panel">
      <h2>Mon equipe</h2>
      <br/>
      {favorites.length === 0 ? (
      <p>Aucun equipié pour le moment.</p>
    ) : (
      <ul className="pokemon-grid2">
        {favorites.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
  )}
      <p> {favorites.length} favoris</p>
    </section>
  );
}