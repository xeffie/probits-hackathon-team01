import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import "./coachingPage.css";
import logo from "../../public/img/logo2.png";

export default function CoachingPage() {
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let active = true;

        const loadFeedback = async () => {
            try {
                const data = await api.getCoachFeedback();

                const latest = [...data].sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                )[0];

                if (active) {
                    setFeedback(latest ?? null);
                }
            } catch (err) {
                console.error("Failed to fetch coach feedback:", err);
                if (active) {
                    setError("Kunde inte hämta feedback.");
                }
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        };

        loadFeedback();

        return () => {
            active = false;
        };
    }, []);

    return (
        <main className="coaching-page">
            <section className="coaching-page__hero">
                <div className="coaching-page__heading">
                    <img
                        src={logo}
                        alt="ProBITS logotyp"
                        className="coaching-page__logo"
                    />
                    <h1 className="coaching-page__title">Min coach</h1>
                </div>
                <p className="coaching-page__intro">
                    Här hittar du feedback, stöd och vägledning från din coach.
                </p>
            </section>

            <section className="coaching-card">
                <div className="coaching-card__header">
                    <div className="coaching-card__avatar">B</div>
                    <div>
                        <h2 className="coaching-card__title">Berit</h2>
                        <p className="coaching-card__subtitle">Din coach</p>
                    </div>
                </div>

                <p className="coaching-card__text">
                    Tillsammans arbetar vi med dina mål, dina reflektioner och din utveckling.
                </p>
            </section>

            <section className="coaching-card">
                <div className="coaching-card__header coaching-card__header--stack">
                    <div>
                        <h2 className="coaching-card__title">Senaste feedback</h2>
                        <p className="coaching-card__subtitle">
                            Återkoppling från Berit
                        </p>
                    </div>
                </div>

                {loading && <p className="coaching-card__text">Hämtar feedback...</p>}
                {error && <p className="coaching-card__text">{error}</p>}

                {!loading && !error && !feedback && (
                    <p className="coaching-card__text">
                        Du har ännu inte fått någon feedback.
                    </p>
                )}

                {feedback && (
                    <>
                        <div className="coaching-feedback">
                            <p className="coaching-feedback__message">{feedback.message}</p>
                        </div>

                        {feedback.nextWeekGoal && (
                            <div className="coaching-goal">
                                <p className="coaching-goal__label">Fokus nästa vecka</p>
                                <p className="coaching-goal__text">{feedback.nextWeekGoal}</p>
                            </div>
                        )}
                    </>
                )}
            </section>

            <section className="coaching-card coaching-card--demo">
                <p className="coaching-demo__badge">Demo</p>
                <h2 className="coaching-card__title">Coachläge</h2>
                <p className="coaching-card__text coaching-card__text--mb">
                    Se hur coachen arbetar med deltagarnas reflektioner och publicerar feedback.
                </p>

                <Link to="/coach" className="coaching-page__button">
                    Byt till coachvyn
                </Link>
            </section>
        </main>
    );
}