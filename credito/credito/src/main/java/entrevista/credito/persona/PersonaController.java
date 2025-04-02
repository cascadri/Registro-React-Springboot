/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entrevista.credito.persona;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")  // Permite CORS para todos los orígenes
@RequestMapping("/api/personas")
public class PersonaController {
    
    @Autowired
    private PersonaService personaService;
    
    @GetMapping
    public List<Persona> getAllPersonas() {
        return personaService.getAllPersonas();
    }
    
    @GetMapping("/{id}")
    public Persona getPersonaById(@PathVariable String id) {
        return personaService.getPersonaById(id);
    }
        
    @PostMapping
    public Persona createPersona(@RequestBody Persona persona) {
        return personaService.savePersona(persona);
    }
    
    @DeleteMapping("/{id}")
    public void deletePersona(@PathVariable String id) {
        personaService.deletePersona(id);
    }
}