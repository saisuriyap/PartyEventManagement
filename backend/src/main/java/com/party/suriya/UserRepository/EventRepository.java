package com.party.suriya.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.suriya.model.Event;

public interface EventRepository extends JpaRepository<Event,Long> {

}
