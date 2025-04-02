package entrevista.credito.audit.persona;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonaAuditRepository extends MongoRepository<PersonaAudit, String> {
    // Custom query methods for auditing records go here
}
