
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'


export default function App() {
    
  return (
    <div className="app-shell">
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </main>
    </div>
  );
}
