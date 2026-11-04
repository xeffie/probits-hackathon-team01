package com.probits.backend.repository;

import com.probits.backend.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ActivityRepository extends JpaRepository<Activity, Long> {

    List<Activity> findByCreatedAtGreaterThanEqualAndCreatedAtLessThan(LocalDateTime start, LocalDateTime end);
}
