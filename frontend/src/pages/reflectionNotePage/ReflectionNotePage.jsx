
import { Navigate, useNavigate } from "react-router-dom";
import MoodFace from "../../moodComponents/MoodFace";
import { useReflection } from "../../context/useReflection";
import "./reflectionNotePage.css";

const currentStep = 3;
const totalSteps = 4;

function ReflectionNotePage() {
  const navigate = useNavigate();
  const { mood, tags, note, setNote, activity } = useReflection();

  // Öppnas sidan direkt utan valt mående, gå till första steget
  if (!mood) return <Navigate to="/reflection/mood" replace />;

  function skip() {
    setNote("");
    navigate("/reflection/summary");
  }

  return (
    <main className="reflection-note">
      <button
        className="reflection-note__back"
        type="button"
        aria-label="Tillbaka till föregående steg"
        onClick={() => navigate("/reflection/tags")}
      >
        <span aria-hidden="true">←</span>
      </button>

      {activity && (
        <p className="reflection-note__activity">{activity.name}</p>
      )}

      <div
        className="reflection-note__progress"
        role="progressbar"
        aria-label="Reflektionsflöde"
        aria-valuemin={0}
        aria-valuemax={totalSteps}
        aria-valuenow={currentStep}
        aria-valuetext={`Steg ${currentStep} av ${totalSteps}`}
      >
        {Array.from({ length: totalSteps }, (_, index) => (
          <span
            key={index}
            className={
              index < currentStep
                ? "reflection-note__step reflection-note__step--active"
                : "reflection-note__step"
            }
          />
        ))}
      </div>

      <h1 className="reflection-note__title">Vill du lägga till något?</h1>

      <p className="reflection-note__description">
        Skriv en tanke om din dag – vad hände, vad vill du komma ihåg?
      </p>

      <div className="reflection-note__field">
        <label htmlFor="reflection-note">Din anteckning (valfritt)</label>

        <div className="reflection-note__selection">
          <span className="reflection-note__mood">
            <MoodFace mood={mood} size={24} />
            <span>{mood.label}</span>
          </span>

          {tags.map((tag) => (
            <span className="reflection-note__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <textarea
          id="reflection-note"
          className="reflection-note__input"
          placeholder="T.ex. Sov dåligt men promenaden hjälpte"
          maxLength={250}
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />

        <p className="reflection-note__count">{note.length}/250</p>
      </div>

      <div className="reflection-note__actions">
        <button
          className="reflection-note__continue"
          type="button"
          onClick={() => navigate("/reflection/summary")}
        >
          Fortsätt
        </button>

        <button
          className="reflection-note__skip"
          type="button"
          onClick={skip}
        >
          Hoppa över
        </button>
      </div>
    </main>
  );
}

export default ReflectionNotePage;