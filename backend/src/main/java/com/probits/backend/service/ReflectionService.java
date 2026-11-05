package com.probits.backend.service;

import com.probits.backend.dto.CreateReflectionRequest;
import com.probits.backend.model.Reflection;
import com.probits.backend.repository.ActivityRepository;
import com.probits.backend.repository.ReflectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReflectionService {

    private final ReflectionRepository reflectionRepository;
    private final ActivityRepository activityRepository;

    public List<Reflection> getAllReflections() {
        return reflectionRepository.findAll();
    }

    public Reflection createReflection(CreateReflectionRequest request) {

        if (request.getActivityId() != null && !activityRepository.existsById(request.getActivityId())) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Activity not found"
            );
        }

        Reflection reflection = new Reflection();

        reflection.setActivityId(request.getActivityId());
        reflection.setMood(request.getMood());
        reflection.setTags(request.getTags());
        reflection.setNote(request.getNote());

        return reflectionRepository.save(reflection);

    }

    public List<Reflection> getReflectionsByDate(LocalDate date) {
        LocalDateTime start = date.atStartOfDay();
        LocalDateTime end = start.plusDays(1);

        return reflectionRepository.findByCreatedAtGreaterThanEqualAndCreatedAtLessThan(start, end);
    }

}
