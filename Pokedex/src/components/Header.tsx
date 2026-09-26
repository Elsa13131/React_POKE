import { NavLink } from "react-router-dom";

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-button active" : "nav-button";

export default function Header() {
  return (
    <header className="site-header">
      <div>
        <p className="eyebrow">POKEMON</p>
        <h1>Pokedex</h1>
      </div>
      <nav className="nav">
        <NavLink to="/" end className={navClass}>Accueil</NavLink>
        <NavLink to="/pokemons" className={navClass}>Pokémons</NavLink>
        <NavLink to="/favorites" className={navClass}>Mon équipe</NavLink>
        <NavLink to="/suggest" className={navClass}>Suggérer un pokemon</NavLink>
      </nav>
    </header>
  );
}