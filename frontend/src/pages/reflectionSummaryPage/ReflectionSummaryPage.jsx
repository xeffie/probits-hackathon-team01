import {
  mockCoach,
  mockGroup,
  mockReflection,
} from "../../reflectionData/mockReflection";
import { getMoodById } from "../../reflectionData/moods";
import SummaryCard from "../../summaryComponents/SummaryCard";
import "./reflectionSummaryPage.css";
import "../reflectionMoodPage/reflectionMoodPage.css";
import CoachNotice from "../../summaryComponents/CoachNotice";
import ShareToggleCard from "../../summaryComponents/ShareToggleCard";
import { useState } from "react";
import ConfirmationPopup from "../../summaryComponents/ConfirmationPopup";

export default function ReflectionSummaryPage() {
  const { moodId, tags, note, activity, dateLabel } = mockReflection;
  const mood = getMoodById(moodId);

  const [shareEnabled, setShareEnabled] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <section
      className="step-page summary-page"
      aria-labelledby="summary-heading"
    >
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

        <CoachNotice coach={mockCoach} />
        <ShareToggleCard
          enabled={shareEnabled}
          onToggle={() => setShareEnabled((current) => !current)}
          group={mockGroup}
        />
      </div>

      <div className="step-actions">
        <button type="button" className="btn-primary" onClick={() => setShowConfirmation(true)}>
          Spara reflektion
        </button>
        <button
          type="button"
          className="btn-text"
          onClick={() => console.log("Gå tillbaka till förra steget")}
        >
          Tillbaka
        </button>
      </div>

      <ConfirmationPopup
        open={showConfirmation}
        mood={mood}
        coach={mockCoach}
        sharedWith={shareEnabled ? mockGroup.name : null}
        onClose={() => {
            setShowConfirmation(false)
            // Navigera till Home page 
        }}
      />
    </section>
  );
}
