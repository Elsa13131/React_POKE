import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pages";

interface PokemonItem {
  name: string;
  url: string;
  id: number;
  image: string;
}

const ITEMS_PER_PAGE = 50;

export default function Pokemon() {
  const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [pageInput, setPageInput] = useState("");

  useEffect(() => {
    async function loadPokemon() {
      setLoading(true);
      setError(null);

      const offset = (currentPage - 1) * ITEMS_PER_PAGE;

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`
        );
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();

        setTotalCount(data.count);

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
        setError("Impossible de charger le pokédex.");
      } finally {
        setLoading(false);
      }
    }

    loadPokemon();
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setSearchTerm("");
  };

  const handleGoToPage = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNumber = parseInt(pageInput, 10);

    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      handlePageChange(pageNumber);
      setPageInput("");
    } else {
      alert(`Veuillez entrer un numéro de page valide entre 1 et ${totalPages}`);
    }
  };

  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="state-message">Chargement du pokédex...</p>;
  }

  if (error) {
    return <p className="state-message error">{error}</p>;
  }

  return (
    <section>
      <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher un Pokémon sur cette page..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      </div>

      <div className="section-heading">
        <div>
          <h2>Pokédex</h2>
        </div>
        <p>{filteredPokemons.length} Pokémons affichés</p>
      </div>

      <div className="pokemon-grid">
        {filteredPokemons.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageInput={pageInput}
        onPageChange={handlePageChange}
        onPageInputChange={setPageInput}
        onGoToPage={handleGoToPage}
      />
    </section>
  );
}