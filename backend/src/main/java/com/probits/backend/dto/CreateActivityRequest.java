package com.probits.backend.dto;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class CreateActivityRequest {

    @NotBlank
    private String activityName;

    @Min(1)
    private Integer durationMinutes;

    private LocalDateTime scheduledAt;

    private String type;

}
