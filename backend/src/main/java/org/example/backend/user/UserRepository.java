package org.example.backend.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Ta metoda pozwoli nam znaleźć użytkownika po jego adresie e-mail
    Optional<User> findByEmail(String email);

    // Ta metoda sprawdzi, czy użytkownik o podanym adresie e-mail już istnieje w bazie
    Boolean existsByEmail(String email);
}