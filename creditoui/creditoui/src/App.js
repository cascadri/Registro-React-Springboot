import logo from './logo.svg';
import './App.css';
import Registro from './components/Registro';
import HistorialRegistro from "./components/HistorialRegistro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (  
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/historial" element={<HistorialRegistro />} />
      </Routes>
  );
}

export default App;
