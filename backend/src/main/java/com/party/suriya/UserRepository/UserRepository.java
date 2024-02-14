package com.party.suriya.UserRepository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.suriya.model.User;

public interface UserRepository extends JpaRepository<User,String> {
    Optional<User>findByEmail(String email);
}
