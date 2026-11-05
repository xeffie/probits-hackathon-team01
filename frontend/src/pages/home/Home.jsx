
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useReflection } from "../../context/useReflection";
import { api } from "../../api/api";
import { getMoodById } from "../../reflectionData/moods";
import MoodFace from "../../moodComponents/MoodFace";
import "./home.css";
import logo from "../../public/img/logo2.png";

const weekdays = [
    { label: "M", status: "good" },
    { label: "T", status: "okay" },
    { label: "O", status: "good" },
    { label: "T", status: "good" },
    { label: "F", status: "planned" },
    { label: "L", status: "empty" },
    { label: "S", status: "planned" },
];

export const Home = () => {
    const navigate = useNavigate();
    const { reset, setActivity } = useReflection();

    const [recentReflections, setRecentReflections] = useState([]);
    const [coachFeedback, setCoachFeedback] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Dynamic date
    const today = new Date();

    const dayName = today.toLocaleDateString("sv-SE", {
        weekday: "long",
    });

    const dateMonth = today.toLocaleDateString("sv-SE", {
        day: "numeric",
        month: "long",
    });

    // Fetch reflections and match them with activities
    useEffect(() => {
        let active = true;

        const loadReflections = async () => {
            try {
                const [activities, reflections] = await Promise.all([
                    api.getActivities(),
                    api.getReflections(),
                ]);

                const formattedReflections = reflections
                    .map((reflection) => {
                        const activity = activities.find(
                            (item) =>
                                reflection.activityId != null &&
                                Number(item.id) === Number(reflection.activityId)
                        );

                        return {
                            id: reflection.id,
                            name: activity?.activityName ?? "Daglig incheckning",
                            moodId: reflection.mood,
                            createdAt: reflection.createdAt,
                            note: reflection.note,
                            tags: reflection.tags ?? [],
                        };
                    })
                    .sort(
                        (a, b) =>
                            new Date(b.createdAt) - new Date(a.createdAt) ||
                            Number(b.id) - Number(a.id)
                    );

                if (active) {
                    setRecentReflections(formattedReflections);
                }
            } catch (err) {
                console.error("Failed to fetch reflections:", err);

                if (active) {
                    setError("Kunde inte hämta reflektioner.");
                }
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        };

        loadReflections();

        return () => {
            active = false;
        };
    }, []);

    // Fetch latest coach feedback
    useEffect(() => {
        let active = true;

        const loadCoachFeedback = async () => {
            try {
                const feedbackList = await api.getCoachFeedback();

                if (feedbackList.length > 0) {
                    const latestFeedback = [...feedbackList].sort(
                        (a, b) =>
                            new Date(b.createdAt) - new Date(a.createdAt)
                    )[0];

                    if (active) {
                        setCoachFeedback(latestFeedback);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch coach feedback:", err);
            }
        };

        loadCoachFeedback();

        return () => {
            active = false;
        };
    }, []);

    // Start daily reflection
    const startDailyReflection = () => {
        reset();
        setActivity(null);
        navigate("/reflection/mood");
    };

    return (
        <section className="home">

            {/* Header */}
            <section className="home__flexbeside">
                <img className="home__logo" src={logo} alt="ProBITS logotyp" />

                <div className="home__anv-icon" aria-label="Anna Linds profil">
                    AL
                </div>
            </section>

            <h1 className="home__title">Välkommen Anna!</h1>

            <section className="home__date-section">
                <p className="home__date-day">
                    {dayName.charAt(0).toUpperCase() + dayName.slice(1)}
                </p>
                <p className="home__date-month">
                    {dateMonth.charAt(0).toUpperCase() + dateMonth.slice(1)}
                </p>
            </section>

            {/* Daily check-in */}
            <section className="home__container">
                <h2 className="home__subtitle">Dagens känsla</h2>
                <p className="home__description home__margin-bottom">
                    Hur mår du idag?
                </p>
                <button
                    type="button"
                    className="home__button-checkin"
                    onClick={startDailyReflection}
                >
                    Checka in
                </button>
            </section>

            {/* Weekly overview */}
            <section className="home__flexbeside">
                <h2 className="home__subtitle home__margin-bottom">
                    Den här veckan
                </h2>
                <Link to="/calendar">Se kalender</Link>
            </section>

            <section className="home__container">
                <section className="weekdays">
                    {weekdays.map((day, index) => (
                        <section className="day" key={index}>
                            <span
                                className={`day__label ${
                                    day.status === "planned" || day.status === "empty"
                                        ? "day__label--planned"
                                        : ""
                                }`}
                                >
                                    {day.label}
                            </span>

                            <section
                                className={`weekday weekday--${day.status}`}
                            ></section>
                        </section>
                    ))}
                </section>
            </section>

            {/* Coach feedback */}
            {coachFeedback && (
                <section className="home__container">
                    <h2 className="home__subtitle">
                        Feedback från {coachFeedback.coachName}
                    </h2>

                    <p className="home__description">
                        {coachFeedback.message}
                    </p>

                    {coachFeedback.nextWeekGoal && (
                        <>
                            <h3 className="home__subsubtitle">
                                Fokus nästa vecka
                            </h3>
                            <p className="home__description">
                                {coachFeedback.nextWeekGoal}
                            </p>
                        </>
                    )}
                </section>
            )}

            {/* Reflection history */}
            <h2 className="home__subtitle">Senaste aktiviteter</h2>

            {loading && <p>Hämtar reflektioner...</p>}
            {error && <p role="alert">{error}</p>}

            {!loading && !error && recentReflections.length === 0 && (
                <p>Du har inga reflektioner ännu.</p>
            )}

            {recentReflections.map((reflection) => {
                const mood = getMoodById(reflection.moodId);

                return (
                    <section
                        className="home__container home__flexbeside"
                        key={reflection.id}
                    >
                        <section className="home__flexbeside">
                            <section className="icon__other"></section>

                            <section>
                                <h3 className="home__subsubtitle">
                                    {reflection.name}
                                </h3>

                                <p className="home__description">
                                    {reflection.createdAt
                                        ? new Date(reflection.createdAt).toLocaleString(
                                            "sv-SE",
                                            {
                                                day: "numeric",
                                                month: "short",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            }
                                        )
                                        : ""}
                                </p>
                            </section>
                        </section>

                        {mood && <MoodFace mood={mood} size={28} />}
                    </section>
                );
            })}
        </section>
    );
};
