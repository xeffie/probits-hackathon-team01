package com.probits.backend.service;

import com.probits.backend.dto.CreateActivityRequest;
import com.probits.backend.model.Activity;
import com.probits.backend.model.Reflection;
import com.probits.backend.repository.ActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ActivityService {

    private final ActivityRepository activityRepository;

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public Activity createActivity(CreateActivityRequest request) {
        Activity activity = new Activity();

        activity.setActivityName(request.getActivityName());

        return activityRepository.save(activity);

    }

    public Activity getActivityById(Long id) {
        return activityRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Activity not found"));
    }

}
