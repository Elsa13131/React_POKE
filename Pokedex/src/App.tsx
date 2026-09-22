import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Header from "./components/Header";
import './App.css'


export default function App() {
    
  return (
    <div className="app-shell">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemon />} />
<<<<<<<<< Temporary merge branch 1
=========

>>>>>>>>> Temporary merge branch 2
        </Routes>
      </main>
    </div>
  );
}
