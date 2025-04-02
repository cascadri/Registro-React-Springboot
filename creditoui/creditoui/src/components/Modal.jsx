import React from 'react';
import './Modal.css'; // Importar el CSS para el modal

function Modal({ persona, onClose }) {
  if (!persona) return null; // Si no hay persona seleccionada, no renderiza el modal

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Detalles de la Persona</h2>
        <p><strong>Nombres:</strong> {persona.nombres}</p>
        <p><strong>Apellidos:</strong> {persona.apellidos}</p>
        <p><strong>Correo:</strong> {persona.correoElectronico}</p>
        <p><strong>Teléfono:</strong> {persona.numeroTelefono}</p>
        <p><strong>Tipo de Identificación:</strong> {persona.tipoIdentificacion}</p>
        <p><strong>Número de Identificación:</strong> {persona.numeroIdentificacion}</p>
        <p><strong>Departamento:</strong> {persona.departamento}</p>
        <p><strong>Municipio:</strong> {persona.municipio}</p>
        <p><strong>Dirección:</strong> {persona.direccion}</p>
        <p><strong>Ingresos Mensuales:</strong> {persona.ingresosMensuales}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export { Modal };
