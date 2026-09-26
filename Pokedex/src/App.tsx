import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Header from "./components/Header";
import './App.css'
import PokeDetails from "./pages/PokeDetails";
import Favorites from "./pages/Favorites";
import { FavoriteContextProvider } from "./pages/FavoritesContext";
import Suggest from "./pages/Suggest";
import NotFound from "./pages/NotFound";


export default function App() {
    
  return (
    <FavoriteContextProvider>
    <div className="app-shell">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemon />} />
          <Route path="/pokemons/:id" element={<PokeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/suggest" element={<Suggest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
    </FavoriteContextProvider>
  );
}
