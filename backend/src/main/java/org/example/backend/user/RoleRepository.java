package org.example.backend.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    // Ta metoda pozwoli nam łatwo znaleźć rolę po jej nazwie, np. "ROLE_USER"
    Optional<Role> findByName(RoleEnum name);
}