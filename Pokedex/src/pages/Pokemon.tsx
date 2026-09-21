import { useEffect, useState } from "react";

interface PokemonItem {
  name: string;
  url: string;
  id: number;
  image: string;
}

export default function Pokemon() {
  const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();

        const transData = data.results.map((item: { name: string; url: string }) => {
          const parts = item.url.split("/").filter(Boolean);
          const id = parseInt(parts[parts.length - 1], 10);
          return {
            name: item.name,
            url: item.url,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });

        setPokemons(transData);
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
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <p>{filteredPokemons.length} Pokémons affichés</p>
      </div>

      <ul>
        {filteredPokemons.map((p) => (
          <li key={p.id}>
            <img src={p.image} alt={p.name} width={50} />
            <span>
              #{p.id} - {p.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}