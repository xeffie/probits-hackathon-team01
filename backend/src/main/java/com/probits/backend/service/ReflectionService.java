package com.probits.backend.service;

import com.probits.backend.dto.CreateReflectionRequest;
import com.probits.backend.model.Reflection;
import com.probits.backend.repository.ReflectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReflectionService {

    private final ReflectionRepository reflectionRepository;

    public List<Reflection> getAllReflections() {
        return reflectionRepository.findAll();
    }

    public Reflection createReflection(CreateReflectionRequest request) {
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
