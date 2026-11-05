import { mockCoach, mockReflection } from "../../reflectionData/mockReflection";
import { getMoodById } from "../../reflectionData/moods";
import SummaryCard from "../../summaryComponents/SummaryCard";
import "./reflectionSummaryPage.css";
import "../reflectionMoodPage/reflectionMoodPage.css";
import CoachNotice from "../../summaryComponents/CoachNotice";


export default function ReflectionSummaryPage() {
  const { moodId, tags, note, activity, dateLabel } = mockReflection;
  const mood = getMoodById(moodId);

  return (
    <section className="step-page" aria-labelledby="summary-heading">
      <div className="step-intro">
        <h1 id="summary-heading">Din reflektion</h1>
        <p>Kolla att allt stämmer innan du sparar.</p>
      </div>

      <div className="summary-content">
        <SummaryCard
          mood={mood}
          tags={tags}
          note={note}
          activity={activity}
          dateLabel={dateLabel}
          onEdit={(step) => console.log("Gå till steg", step)}
        />
      </div>

      <CoachNotice coach={mockCoach} />

      <div className="step-actions">
        <button type="button" className="btn-primary">
            Spara reflektion
        </button>
        <button type="button" className="btn-text" onClick={() => console.log("Gå tillbaka till förra steget")}>
            Tillbaka
        </button>
      </div>
    </section>
  );
}
