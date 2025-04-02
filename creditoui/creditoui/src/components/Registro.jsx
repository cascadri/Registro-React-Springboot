import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Registro.css"; // Importa el archivo de estilos CSS

const API_URL = "http://localhost:8080/api/personas";

export default function Registro() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Estado para controlar el paso del formulario

  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correoElectronico: "",
    numeroTelefono: "",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
  });

  const [additionalData, setAdditionalData] = useState({
    departamento: "",
    municipio: "",
    direccion: "",
    ingresosMensuales: "",
  });

  const [errors, setErrors] = useState({}); // Estado para manejar los errores de validación

  const departamentos = ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste"];
  const municipios = ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste"];
  const direcciones = ["Calle 1", "Calle 2", "Calle 3", "Calle 4", "Calle 5"];
  const tipoIdentificaciones = ["Cédula", "Pasaporte"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualiza el estado con los datos que el usuario va ingresando en el formulario
    if (step === 1) {
      setFormData({ ...formData, [name]: value });
    } else {
      setAdditionalData({ ...additionalData, [name]: value });
    }
  };

  // Validación para el paso 1 del formulario
  const validateFormStep1 = () => {
    const newErrors = {}; // Objeto para almacenar los errores de validación
    if (!formData.nombres) newErrors.nombres = "El campo Nombres es obligatorio";
    if (!formData.apellidos) newErrors.apellidos = "El campo Apellidos es obligatorio";
    if (!formData.correoElectronico) newErrors.correoElectronico = "El campo Correo Electrónico es obligatorio";
    if (!formData.numeroTelefono) newErrors.numeroTelefono = "El campo Número de Teléfono es obligatorio";
    if (!formData.tipoIdentificacion) newErrors.tipoIdentificacion = "Seleccione un Tipo de Identificación";
    if (!formData.numeroIdentificacion) newErrors.numeroIdentificacion = "El campo Número de Identificación es obligatorio";

    setErrors(newErrors); // Se actualizan los errores en el estado
    return Object.keys(newErrors).length === 0; // Si no hay errores, retorna true
  };

  // Validación para el paso 2 del formulario
  const validateFormStep2 = () => {
    const newErrors = {}; // Objeto para almacenar los errores del segundo paso
    if (!additionalData.departamento) newErrors.departamento = "Seleccione un Departamento";
    if (!additionalData.municipio) newErrors.municipio = "Seleccione un Municipio";
    if (!additionalData.direccion) newErrors.direccion = "Seleccione una Dirección";
    if (!additionalData.ingresosMensuales || additionalData.ingresosMensuales <= 0) {
      newErrors.ingresosMensuales = "Los Ingresos Mensuales son obligatorios y deben ser mayores a 0";
    }

    setErrors(newErrors); // Se actualizan los errores en el estado
    return Object.keys(newErrors).length === 0; // Si no hay errores, retorna true
  };

  const handleNextStep = () => {
    if (validateFormStep1()) { // Si la validación del primer paso es exitosa
      setStep(2); // Cambia al paso 2 del formulario
    }
  };

  const handleRegister = async () => {
    if (validateFormStep2()) { // Si la validación del segundo paso es exitosa
      const personaData = { ...formData, ...additionalData }; // Combina los datos de ambos pasos
      try {
        await axios.post(API_URL, personaData); // Realiza la solicitud POST para registrar al usuario
        navigate("/historial"); // Redirige a la página de historial si el registro fue exitoso
      } catch (error) {
        console.error("Error registrando la persona:", error);
        alert("Error al registrar, por favor intente nuevamente");
      }
    }
  };

  return (
    <div className="registro-container">
      <div className="form-container">
        <div className="form-left">
          <div className="image-placeholder" style={{ backgroundImage: "url('imagen.jpg')" }}></div>
        </div>
        <div className="form-right">
          <h1 className="title">Samla</h1>
          {step === 1 && (
            <div>
              <h2 className="subtitle">Registro</h2>
              <form>
                <input
                  className="input-field"
                  placeholder="Nombres"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                />
                {errors.nombres && <p className="error-message">{errors.nombres}</p>}
                <input
                  className="input-field"
                  placeholder="Apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                />
                {errors.apellidos && <p className="error-message">{errors.apellidos}</p>}
                <input
                  className="input-field"
                  placeholder="Correo Electrónico"
                  name="correoElectronico"
                  value={formData.correoElectronico}
                  onChange={handleChange}
                />
                {errors.correoElectronico && <p className="error-message">{errors.correoElectronico}</p>}
                <input
                  className="input-field"
                  placeholder="Número de Teléfono"
                  name="numeroTelefono"
                  value={formData.numeroTelefono}
                  onChange={handleChange}
                />
                {errors.numeroTelefono && <p className="error-message">{errors.numeroTelefono}</p>}
                <select
                  className="input-field"
                  name="tipoIdentificacion"
                  value={formData.tipoIdentificacion}
                  onChange={handleChange}
                >
                  <option value="">Seleccione Tipo de Identificación</option>
                  {tipoIdentificaciones.map((tipo, index) => (
                    <option key={index} value={tipo}>{tipo}</option>
                  ))}
                </select>
                {errors.tipoIdentificacion && <p className="error-message">{errors.tipoIdentificacion}</p>}
                <input
                  className="input-field"
                  placeholder="Número de Identificación"
                  name="numeroIdentificacion"
                  value={formData.numeroIdentificacion}
                  onChange={handleChange}
                />
                {errors.numeroIdentificacion && <p className="error-message">{errors.numeroIdentificacion}</p>}
                <button type="button" className="btn" onClick={handleNextStep}>Continuar</button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="subtitle">Paso 2: Información de Ubicación</h2>
              <form>
                <select
                  className="input-field"
                  name="departamento"
                  value={additionalData.departamento}
                  onChange={handleChange}
                >
                  <option value="">Seleccione Departamento</option>
                  {departamentos.map((dep, index) => (
                    <option key={index} value={dep}>{dep}</option>
                  ))}
                </select>
                {errors.departamento && <p className="error-message">{errors.departamento}</p>}

                <select
                  className="input-field"
                  name="municipio"
                  value={additionalData.municipio}
                  onChange={handleChange}
                >
                  <option value="">Seleccione Municipio</option>
                  {municipios.map((mun, index) => (
                    <option key={index} value={mun}>{mun}</option>
                  ))}
                </select>
                {errors.municipio && <p className="error-message">{errors.municipio}</p>}

                <select
                  className="input-field"
                  name="direccion"
                  value={additionalData.direccion}
                  onChange={handleChange}
                >
                  <option value="">Seleccione Dirección</option>
                  {direcciones.map((dir, index) => (
                    <option key={index} value={dir}>{dir}</option>
                  ))}
                </select>
                {errors.direccion && <p className="error-message">{errors.direccion}</p>}

                <input
                  className="input-field"
                  placeholder="Ingresos Mensuales"
                  type="number"
                  name="ingresosMensuales"
                  value={additionalData.ingresosMensuales}
                  onChange={handleChange}
                />
                {errors.ingresosMensuales && <p className="error-message">{errors.ingresosMensuales}</p>}
                <button type="button" className="btn" onClick={handleRegister}>Registrarse</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
