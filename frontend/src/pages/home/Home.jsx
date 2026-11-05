import { Link, useNavigate } from "react-router-dom";
import { useReflection } from "../../context/useReflection";
import { activities } from "../../reflectionData/activities";
import { getMoodById } from "../../reflectionData/moods";
import MoodFace from "../../moodComponents/MoodFace";
import "./home.css";
import logo from "../../public/img/logo2.png";


const weekdays = ["M", "T", "O", "T", "F", "L", "S"];

export const Home = () => {
  const navigate = useNavigate();
  const { reset, setActivity } = useReflection();

  const startDailyReflection = () => {
    reset();
    setActivity(null);
    navigate("/reflection/mood");
  };

  const startActivityReflection = (activity) => {
    reset();
    setActivity(activity);
    navigate("/reflection/mood");
  };

  return (
    <section className="home">
      <section className="home__flexbeside">
        <img className="home__logo" src={logo} alt="Probits logotyp" />
        <section className="home__anv-icon"></section>
      </section>

      <h1 className="home__title">Välkommen Anna!</h1>
      <section className="home__date-section">
        <p className="home__date-day">Onsdag</p>
        <p className="home__date-month">4 November</p>
      </section>

      <section className="home__container">
        <h2 className="home__subtitle">Dagens känsla</h2>
        <p className="home__description home__margin-bottom">Hur mår du idag?</p>
        <button type="button" className="home__button-checkin" onClick={startDailyReflection}>
          Checka in
        </button>
      </section>

      <section className="home__flexbeside">
        <h2 className="home__subtitle home__margin-bottom">Den här veckan</h2>
        <Link to="/calendar">Se kalender</Link>
      </section>

      <section className="home__container">
        <section className="weekdays">
          {weekdays.map((day, index) => (
            <section className="day" key={index}>
              <span>{day}</span>
              <section className="weekday"></section>
            </section>
          ))}
        </section>
      </section>

      <h2 className="home__subtitle">Senaste aktiviteter</h2>

      {activities.map((activity) => {
        const mood = getMoodById(activity.moodId);

        return (
          <section className="home__container home__flexbeside" key={activity.id}>
            <section className="home__flexbeside">
              <section className={`icon__${activity.area}`}></section>
              <section>
                <h3 className="home__subsubtitle">{activity.name}</h3>
                <p className="home__description">
                  {activity.duration} · {activity.date} · {activity.time}
                </p>
              </section>
            </section>

            {mood ? (
              <MoodFace mood={mood} size={28} />
            ) : (
              <button
                type="button"
                className="home__button-reflect"
                onClick={() => startActivityReflection(activity)}
              >
                Reflektera
              </button>
            )}
          </section>
        );
      })}
    </section>
  );
};