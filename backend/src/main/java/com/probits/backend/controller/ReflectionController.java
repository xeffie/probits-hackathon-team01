package com.probits.backend.controller;

import com.probits.backend.dto.CreateReflectionRequest;
import com.probits.backend.model.Reflection;
import com.probits.backend.service.ReflectionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/reflections")
@RequiredArgsConstructor
public class ReflectionController {

    private final ReflectionService reflectionService;

    @GetMapping
    public List<Reflection> getAllReflections(@RequestParam(required = false) LocalDate date) {

        if (date != null) {
            return reflectionService.getReflectionsByDate(date);
        }

        return reflectionService.getAllReflections();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Reflection createReflection(@Valid @RequestBody CreateReflectionRequest request) {
        return reflectionService.createReflection(request);

    }
}
