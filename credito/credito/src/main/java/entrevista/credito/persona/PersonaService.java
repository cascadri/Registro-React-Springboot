/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entrevista.credito.persona;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService {
    
    @Autowired
    private PersonaRepository personaRepository;
    
    public List<Persona> getAllPersonas() {
        return personaRepository.findAll();
    }
    
    public Persona getPersonaById(String id) {
        return personaRepository.findById(id).orElse(null);
    }
    
    public Persona getPersonaByNumeroIdentificacion(String numeroIdentificacion) {
        return personaRepository.findByNumeroIdentificacion(numeroIdentificacion);
    }
    
    public Persona savePersona(Persona persona) {
        return personaRepository.save(persona);
    }
    
    public void deletePersona(String id) {
        personaRepository.deleteById(id);
    }
}