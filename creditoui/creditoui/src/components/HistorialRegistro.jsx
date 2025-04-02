import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal"; // Componente para mostrar el pop-up

const API_URL = "http://localhost:8080/api/personas"; // URL de la API para obtener datos de personas

export default function HistorialRegistro() {
  const [personas, setPersonas] = useState([]); // Estado para almacenar la lista de personas
  const [selectedPersona, setSelectedPersona] = useState(null); // Estado para la persona seleccionada
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    fetchPersonas(); // Llama a la función para obtener los datos al montar el componente
  }, []);

  const fetchPersonas = async () => {
    try {
      const response = await axios.get(API_URL); // Petición GET a la API
      setPersonas(response.data); // Guarda los datos en el estado
    } catch (error) {
      console.error("Error fetching personas:", error); // Manejo de errores en la solicitud
    }
  };

  const handleViewDetail = (persona) => {
    setSelectedPersona(persona); // Guarda la persona seleccionada en el estado
    setShowModal(true); // Muestra el modal con la información de la persona
  };

  const handleCloseModal = () => {
    setShowModal(false); // Oculta el modal
    setSelectedPersona(null); // Limpia la persona seleccionada
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
          {personas.map((persona) => ( // Itera sobre la lista de personas para mostrar cada una en la tabla
            <tr key={persona.numeroIdentificacion}> {/* Usa un identificador único como key */}
              <td>{persona.nombres}</td>
              <td>{persona.apellidos}</td>
              <td>{persona.correoElectronico}</td>
              <td>{persona.numeroTelefono}</td>
              <td>
                <button className="btn" onClick={() => handleViewDetail(persona)}>
                  Ver Detalle {/* Botón para abrir el modal con más información */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && ( // Muestra el modal solo si showModal es true
        <Modal persona={selectedPersona} onClose={handleCloseModal} />
      )}
    </div>
  );
}
