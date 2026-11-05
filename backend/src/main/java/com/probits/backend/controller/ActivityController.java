package com.probits.backend.controller;

import com.probits.backend.dto.CreateActivityRequest;
import com.probits.backend.model.Activity;
import com.probits.backend.service.ActivityService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/activities")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService activityService;

    @GetMapping
    public List<Activity> getAllActivities() {
        return activityService.getAllActivities();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Activity createActivity(@Valid @RequestBody CreateActivityRequest request) {
        return activityService.createActivity(request);

    }

    @GetMapping("/{id}")
    public Activity getActivityById(@PathVariable Long id) {
        return activityService.getActivityById(id);
    }


}
