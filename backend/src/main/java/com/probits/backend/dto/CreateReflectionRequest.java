package com.probits.backend.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class CreateReflectionRequest {

    private Long activityId;

    @NotNull
    @Min(1)
    @Max(5)
    private Integer mood;

    private List<String> factors;

    @Size(max = 250)
    private String note;

}
