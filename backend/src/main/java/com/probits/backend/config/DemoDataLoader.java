
package com.probits.backend.config;

import com.probits.backend.model.Activity;
import com.probits.backend.model.Reflection;
import com.probits.backend.model.CoachFeedback;
import com.probits.backend.repository.ActivityRepository;
import com.probits.backend.repository.ReflectionRepository;
import com.probits.backend.repository.CoachFeedbackRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.List;

@Configuration
public class DemoDataLoader {

    @Bean
    CommandLineRunner loadDemoData(
            ActivityRepository activityRepository,
            ReflectionRepository reflectionRepository,
            CoachFeedbackRepository coachFeedbackRepository) {

        return args -> {

            if (activityRepository.count() == 0) {

                Activity walk = new Activity();
                walk.setActivityName("Morgonpromenad");
                walk.setDurationMinutes(30);
                walk.setScheduledAt(LocalDate.now().atTime(8, 30));
                walk.setType("WALK");

                Activity workout = new Activity();
                workout.setActivityName("Träningspass");
                workout.setDurationMinutes(45);
                workout.setScheduledAt(LocalDate.now().atTime(16, 0));
                workout.setType("EXERCISE");

                Activity meditation = new Activity();
                meditation.setActivityName("Kvällsmeditation");
                meditation.setDurationMinutes(15);
                meditation.setScheduledAt(LocalDate.now().atTime(20, 0));
                meditation.setType("MINDFULNESS");

                activityRepository.saveAll(
                        List.of(walk, workout, meditation)
                );
            }

            if (reflectionRepository.count() == 0) {

                List<Activity> activities = activityRepository.findAll();

                Long activityId = activities.isEmpty()
                        ? null
                        : activities.get(0).getId();

                createReflection(
                        reflectionRepository, activityId, 4,
                        List.of("Rörelse i vardagen", "Återhämtning"),
                        "Började veckan med en skön promenad och kände mig piggare efteråt.",
                        false, 6
                );

                createReflection(
                        reflectionRepository, null, 3,
                        List.of("Stress", "Sömn"),
                        "En intensiv dag på jobbet. Behöver prioritera bättre sömn.",
                        false, 5
                );

                createReflection(
                        reflectionRepository, activityId, 5,
                        List.of("Träning", "Psykiskt mående"),
                        "Träningen gjorde verkligen skillnad för mitt humör idag!",
                        true, 4
                );

                createReflection(
                        reflectionRepository, null, 2,
                        List.of("Orkade inte röra mig", "Stress"),
                        "Kände mig trött och stressad idag. Behövde ta det lugnt.",
                        false, 3
                );

                createReflection(
                        reflectionRepository, activityId, 4,
                        List.of("Återhämtning", "Regelbundna mattider"),
                        "Har börjat hitta en bättre balans mellan aktivitet och vila.",
                        true, 2
                );

                createReflection(
                        reflectionRepository, null, 4,
                        List.of("Sömn", "Återhämtning"),
                        "Sov riktigt bra och kände mig mer fokuserad under dagen.",
                        false, 1
                );

                createReflection(
                        reflectionRepository, activityId, 5,
                        List.of("Träning", "Rörelse i vardagen"),
                        "Stolt över att jag har hållit fast vid mina nya vanor!",
                        true, 0
                );            }

            if (coachFeedbackRepository.count() == 0) {

                LocalDate thisMonday = LocalDate.now()
                        .with(TemporalAdjusters.previousOrSame(
                                DayOfWeek.MONDAY
                        ));

                CoachFeedback previousWeek = new CoachFeedback();
                previousWeek.setCoachName("Berit");
                previousWeek.setMessage(
                        "Vilken fin utveckling du har gjort den senaste veckan! " +
                                "Du har börjat skapa hållbara rutiner och hittat en bra balans. " +
                                "Kom ihåg att kontinuitet är viktigare än perfektion."
                );
                previousWeek.setNextWeekGoal(
                        "Ta tre korta promenader och reflektera varje kväll."
                );
                previousWeek.setWeekStart(thisMonday.minusWeeks(1));

                CoachFeedback currentWeek = new CoachFeedback();
                currentWeek.setCoachName("Berit");
                currentWeek.setMessage(
                        "Bra jobbat med dina reflektioner! Du börjar se tydliga " +
                                "samband mellan dina aktiviteter, din återhämtning och " +
                                "hur du mår. Fortsätt lyssna på kroppens signaler."
                );
                currentWeek.setNextWeekGoal(
                        "Fortsätt reflektera dagligen och prioritera återhämtning."
                );
                currentWeek.setWeekStart(thisMonday);

                coachFeedbackRepository.saveAll(
                        List.of(previousWeek, currentWeek)
                );
            }

            System.out.println("Demo data initialized!");
        };
    }

    private void createReflection(
            ReflectionRepository repository,
            Long activityId,
            int mood,
            List<String> tags,
            String note,
            boolean shared,
            int daysAgo) {

        Reflection reflection = new Reflection();
        reflection.setActivityId(activityId);
        reflection.setMood(mood);
        reflection.setTags(tags);
        reflection.setNote(note);
        reflection.setShared(shared);

        reflection = repository.saveAndFlush(reflection);

        reflection.setCreatedAt(
                LocalDateTime.now().minusDays(daysAgo)
        );

        repository.save(reflection);
    }
}
