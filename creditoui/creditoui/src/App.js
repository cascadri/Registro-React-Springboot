import logo from './logo.svg';
import './App.css';
import Registro from './components/Registro';
import HistorialRegistro from "./components/HistorialRegistro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//El código configura dos rutas en la aplicación: una para el formulario de registro (/) y otra para el historial de registros (/historial).
// Cuando un usuario navega a /, se renderiza el componente Registro; cuando navega a /historial, se renderiza el componente HistorialRegistro.

function App() {
  return (  
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/historial" element={<HistorialRegistro />} />
      </Routes>
  );
}

export default App;
