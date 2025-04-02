
package entrevista.credito.audit.persona;

import entrevista.credito.persona.Persona;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "personas_audit")
public class PersonaAudit {

    @Id
    private String id;
    private String idPersona;
    private String nombres;
    private String apellidos;
    private String correoElectronico;
    private String numeroTelefono;
    private String tipoIdentificacion;
    private String numeroIdentificacion;
    private String departamento;
    private String municipio;
    private String direccion;
    private double ingresosMensuales;
    private String accion;  // Acción realizada (Ej. CREAR, ACTUALIZAR, ELIMINAR)
    
    // Constructor que recibe una Persona y una acción
    public PersonaAudit(Persona persona, String accion) {
        this.idPersona = persona.getId();
        this.nombres = persona.getNombres();
        this.apellidos = persona.getApellidos();
        this.correoElectronico = persona.getCorreoElectronico();
        this.numeroTelefono = persona.getNumeroTelefono();
        this.tipoIdentificacion = persona.getTipoIdentificacion();
        this.numeroIdentificacion = persona.getNumeroIdentificacion();
        this.departamento = persona.getDepartamento();
        this.municipio = persona.getMunicipio();
        this.direccion = persona.getDireccion();
        this.ingresosMensuales = persona.getIngresosMensuales();
        this.accion = accion;
    }
    
    public PersonaAudit(String nombres, String apellidos, String correoElectronico, String numeroTelefono,
                   String tipoIdentificacion, String numeroIdentificacion, String departamento, 
                   String municipio, String direccion, double ingresosMensuales, String accion) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correoElectronico = correoElectronico;
        this.numeroTelefono = numeroTelefono;
        this.tipoIdentificacion = tipoIdentificacion;
        this.numeroIdentificacion = numeroIdentificacion;
        this.departamento = departamento;
        this.municipio = municipio;
        this.direccion = direccion;
        this.ingresosMensuales = ingresosMensuales;
        this.accion = accion;
    }

    // Getters y Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(String idPersona) {
        this.idPersona = idPersona;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public String getNumeroTelefono() {
        return numeroTelefono;
    }

    public void setNumeroTelefono(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }

    public String getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(String tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }

    public String getNumeroIdentificacion() {
        return numeroIdentificacion;
    }

    public void setNumeroIdentificacion(String numeroIdentificacion) {
        this.numeroIdentificacion = numeroIdentificacion;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public double getIngresosMensuales() {
        return ingresosMensuales;
    }

    public void setIngresosMensuales(double ingresosMensuales) {
        this.ingresosMensuales = ingresosMensuales;
    }

    public String getAccion() {
        return accion;
    }

    public void setAccion(String accion) {
        this.accion = accion;
    }
}
