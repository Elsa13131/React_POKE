import { useContext } from "react";
import { FavoriteContext } from "../pages/FavoritesContext";
import PokemonCard from "../components/PokemonCard";
import { useFavorites } from "../pages/FavoritesContext";


export default function Favorites() {


 const { favorites } = useFavorites();

  return (
    <section className="panel">
      <p className="eyebrow">Espace personnel</p>
      <h2>Mes favoris</h2>
      <br/>
      {favorites.length === 0 ? (
      <p>Aucun favori pour le moment.</p>
    ) : (
      <ul className="pokemon-grid">
        {favorites.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
  )}
      <p> {favorites.length} favoris</p>
      <p>Aucun favori pour le moment.</p>
    </section>
  );
}