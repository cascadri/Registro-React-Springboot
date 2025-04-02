import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal"; // Componente para mostrar el pop-up

const API_URL = "http://localhost:8080/api/personas";

export default function HistorialRegistro() {
  const [personas, setPersonas] = useState([]);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchPersonas();
  }, []);

  const fetchPersonas = async () => {
    try {
      const response = await axios.get(API_URL);
      setPersonas(response.data);
    } catch (error) {
      console.error("Error fetching personas:", error);
    }
  };

  const handleViewDetail = (persona) => {
    setSelectedPersona(persona);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPersona(null);
  };

  return (
    <div className="historial-registro-container">
      <h1 className="title">Historial de Registro</h1>
      <table className="registro-table">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo Electrónico</th>
            <th>Número de Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona) => (
            <tr key={persona.numeroIdentificacion}>
              <td>{persona.nombres}</td>
              <td>{persona.apellidos}</td>
              <td>{persona.correoElectronico}</td>
              <td>{persona.numeroTelefono}</td>
              <td>
                <button className="btn" onClick={() => handleViewDetail(persona)}>
                  Ver Detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <Modal persona={selectedPersona} onClose={handleCloseModal} />
      )}
    </div>
  );
}
