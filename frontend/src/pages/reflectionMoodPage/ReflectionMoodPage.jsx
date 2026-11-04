import { useState } from "react";
import MoodScale from "../../moodComponents/MoodScale";
import "./reflectionMoodPage.css";

export default function ReflectionMoodPage() {
  const [mood, setMood] = useState(null);

  return (
    <section className="step-page" aria-labelledby="mood-heading">
      <div className="step-intro">
        <h1 id="mood-heading">Hur mår du idag?</h1>
        <p>Välj det som bäst beskriver hur du känner dig just nu.</p>
      </div>

      <div className="step-content mood-content">
        <MoodScale selected={mood} onSelect={setMood} />
      </div>

      <div className="step-actions">
        <button type="button" className="btn-primary" disabled={!mood}>
          Fortsätt
        </button>
        <button type="button" className="btn-text">
          Avbryt
        </button>
      </div>
    </section>
  );
}