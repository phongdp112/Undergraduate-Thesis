package com.phongdp112.backend.repository.mariadb;

import com.phongdp112.backend.domain.mariadb.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("SELECT u from User u WHERE u.email =:email")
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
}
