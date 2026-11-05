package com.probits.backend.repository;

import com.probits.backend.model.CoachFeedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface CoachFeedbackRepository extends JpaRepository<CoachFeedback, Long> {

    List<CoachFeedback> findByWeekStart(LocalDate weekStart);
}
