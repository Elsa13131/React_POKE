import { useEffect, useState } from "react";

export default function Pokemon() {
    const [pokemon, setPokemon] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function loadPokemon() {
        try {
          const response = await fetch("https://api.tvmaze.com/shows?page=0");

          if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
          }

          const data = await response.json();
          setPokemon(data);
        } catch (error) {
          setError("Impossible de charger le catalogue.");
        } finally {
          setLoading(false);
        }
      }

    loadPokemon();
  }, []);

  if (loading) {
    return <p className="state-message">Chargement du catalogue...</p>;
  }

  if (error) {
    return <p className="state-message error">{error}</p>;
  }

   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetSearch: string = event.target.value;
    console.log("Event:", targetSearch);
    setSearchTerm(targetSearch);
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Rechercher un Pokémon..."
        onChange={handleSearch}
        value={searchTerm}
      />

    <div className="section-heading">
        <div>
          <p className="eyebrow">Catalogue</p>
          <h2>Pokémons</h2>
        </div>
        <p>{pokemon?.length} pokémons </p>
      </div>
    </section>
  );
}