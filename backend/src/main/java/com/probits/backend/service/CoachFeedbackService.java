package com.probits.backend.service;

import com.probits.backend.dto.CreateCoachFeedbackRequest;
import com.probits.backend.model.CoachFeedback;
import com.probits.backend.repository.CoachFeedbackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CoachFeedbackService {

    private final CoachFeedbackRepository coachFeedbackRepository;

    public List<CoachFeedback> getAllFeedback() {
        return coachFeedbackRepository.findAll();
    }

    public CoachFeedback createFeedback(CreateCoachFeedbackRequest request) {
        CoachFeedback coachFeedback = new CoachFeedback();

        coachFeedback.setCoachName(request.getCoachName());
        coachFeedback.setMessage(request.getMessage());
        coachFeedback.setNextWeekGoal(request.getNextWeekGoal());

        LocalDate monday = request.getWeekStart()
                .with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
        coachFeedback.setWeekStart(monday);

        return coachFeedbackRepository.save(coachFeedback);

    }

    public List<CoachFeedback> getFeedbackByWeek (LocalDate weekStart) {
        LocalDate monday = weekStart.with(
                TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY)
        );
        return coachFeedbackRepository.findByWeekStart(monday);
    }

}
