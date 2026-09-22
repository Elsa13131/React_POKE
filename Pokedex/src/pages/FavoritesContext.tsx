import { createContext, useState, useContext } from "react";
import type { Poke } from "../types/Pokemon";

type FavoritesContextType = {
  favorites: Poke[];
  toggleFavorite: (show: Poke) => void;
  isFavorite: (id: number) => boolean;
};

export const FavoriteContext = createContext<FavoritesContextType| undefined>(undefined);


export function FavoriteContextProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Poke[]>([]);

function isFavorite(id: number) {
    return favorites.some((f) => f.id === id);
  }


function toggleFavorite(show: Poke) {
    setFavorites((prev) =>
      prev.some((f) => f.id === show.id)
        ? prev.filter((f) => f.id !== show.id)
        : [...prev, show]
    );
  }


  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites doit être utilisé à l'intérieur de FavoriteContextProvider");
  }
  return context;
}