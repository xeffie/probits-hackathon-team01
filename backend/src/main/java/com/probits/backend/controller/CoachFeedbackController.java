package com.probits.backend.controller;

import com.probits.backend.dto.CreateCoachFeedbackRequest;
import com.probits.backend.model.CoachFeedback;
import com.probits.backend.model.Reflection;
import com.probits.backend.service.CoachFeedbackService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/coach-feedback")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class CoachFeedbackController {

    private final CoachFeedbackService coachFeedbackService;

    @GetMapping
    public List<CoachFeedback> getAllFeedback(@RequestParam(required = false) LocalDate weekStart) {

        if (weekStart != null) {
            return coachFeedbackService.getFeedbackByWeek(weekStart);
        }

        return coachFeedbackService.getAllFeedback();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CoachFeedback createFeedback(@Valid @RequestBody CreateCoachFeedbackRequest request) {
        return coachFeedbackService.createFeedback(request);

    }

}
