package com.probits.backend.repository;

import com.probits.backend.model.Reflection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ReflectionRepository extends JpaRepository<Reflection, Long> {

    List<Reflection> findByCreatedAtGreaterThanEqualAndCreatedAtLessThan(LocalDateTime start, LocalDateTime end);
}
