
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import './App.css'


export default function App() {
    
  return (
    <div className="app-shell">
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemon />} />
        </Routes>
      </main>
    </div>
  );
}
