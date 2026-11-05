package com.probits.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class CreateCoachFeedbackRequest {

    @NotBlank
    private String coachName;

    @NotNull
    private LocalDate weekStart;

    @NotBlank
    @Size(max = 500)
    private String message;

    @Size(max = 150)
    private String nextWeekGoal;

}
