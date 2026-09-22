import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Poke } from "../types/Pokemon";
import { useFavorites } from "../pages/FavoritesContext";

export default function PokeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<Poke | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    async function loadShow() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError("Ce Pokémon est introuvable.");
      } finally {
        setLoading(false);
      }
    }

    loadShow();
  }, [id]);

  if (loading) {
    return <p className="state-message">Chargement de la fiche...</p>;
  }

  if (error || !pokemon) {
    return (
      <section className="panel">
        <p className="eyebrow">Erreur</p>
        <h2>Titre introuvable</h2>
        <p>Aucune ressource ne correspond à l'identifiant {id}.</p>
        <Link className="primary-button" to="/">Retour au catalogue</Link>
      </section>
    );
  }
  const favorite = isFavorite(pokemon.id);

  return (
  <section className="panel">
    <p className="eyebrow">{pokemon.types.map((t) => t.type.name).join(" · ") || "Non classé"}</p>
    <h2>{pokemon.name}</h2>
    <p><strong>Taille :</strong> {pokemon.height}</p>
    <p><strong>Poids :</strong> {pokemon.weight}</p>

    <p><strong>Talents :</strong> {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>

    <p>
      <strong>Statistiques :</strong>{" "}
      {pokemon.stats.map((s) => `${s.stat.name} ${s.base_stat}`).join(" · ")}
    </p>

    <p>
      <strong>Attaques ({pokemon.moves.length}) :</strong>{" "}
      {pokemon.moves.map((m) => m.move.name).join(", ")}
    </p>

    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon.name} />

    <button
        className="secondary-button"
        onClick={() => toggleFavorite(pokemon)}
      >
        {favorite ? " Retirer des favoris" : " Ajouter aux favoris"}
      </button>
    <button className="secondary-button" onClick={() => navigate(-1)}>
      ← Retour au Pokedex
    </button>
  </section>
);
}