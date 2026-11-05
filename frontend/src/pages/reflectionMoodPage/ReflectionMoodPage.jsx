import { useNavigate } from "react-router-dom";
import MoodScale from "../../moodComponents/MoodScale";
import { useReflection } from "../../context/useReflection";
import "./reflectionMoodPage.css";

export default function ReflectionMoodPage() {
  const navigate = useNavigate();
  const { mood, setMood, activity, reset } = useReflection();

  const heading = activity
    ? `Hur kändes det efter ${activity.name.toLocaleLowerCase("sv-SE")}?`
    : "Hur mår du idag?";

  const helper = activity
    ? "Välj det som bäst beskriver hur du kände dig efteråt."
    : "Välj det som bäst beskriver hur du känner dig just nu.";

  const cancel = () => {
    reset();
    navigate("/");
  };

  return (
    <section className="step-page" aria-labelledby="mood-heading">
      <div className="step-intro">
        <h1 id="mood-heading">{heading}</h1>
        <p>{helper}</p>
      </div>

      <div className="step-content mood-content">
        <MoodScale selected={mood} onSelect={setMood} />
      </div>

      <div className="step-actions">
        <button
          type="button"
          className="btn-primary"
          disabled={!mood}
          onClick={() => navigate("/reflection/tags")}
        >
          Fortsätt
        </button>
        <button type="button" className="btn-text" onClick={cancel}>
          Avbryt
        </button>
      </div>
    </section>
  );
}