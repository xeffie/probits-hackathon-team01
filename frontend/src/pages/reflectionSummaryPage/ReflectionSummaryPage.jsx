
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { mockCoach, mockGroup } from "../../reflectionData/mockReflection";
import { useReflection } from "../../context/useReflection";
import SummaryCard from "../../summaryComponents/SummaryCard";
import CoachNotice from "../../summaryComponents/CoachNotice";
import ShareToggleCard from "../../summaryComponents/ShareToggleCard";
import ConfirmationPopup from "../../summaryComponents/ConfirmationPopup";
import "../reflectionMoodPage/reflectionMoodPage.css";
import "./reflectionSummaryPage.css";

const editRoutes = ["/reflection/mood", "/reflection/tags", "/reflection/note"];

export default function ReflectionSummaryPage() {
  const navigate = useNavigate();
  const { mood, tags, note, activity, reset } = useReflection();

  const [shareEnabled, setShareEnabled] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Öppnas sidan direkt utan valt mående, gå till första steget
  if (!mood) return <Navigate to="/reflection/mood" replace />;

  const dateLabel = new Date().toLocaleDateString("sv-SE", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  const handleSave = async () => {
    if (saving) return;

    setSaving(true);
    setError(null);

    const reflection = {
      activityId: activity?.id ?? null,
      mood: mood.id,
      tags: tags,
      note: note,
      shared: shareEnabled,
    };

    try {
      const savedReflection = await api.createReflection(reflection);

      console.log("Reflection saved:", savedReflection);
      setShowConfirmation(true);
    } catch (err) {
      console.error("Failed to save reflection:", err);
      setError("Kunde inte spara reflektionen. Försök igen.");
    } finally {
      setSaving(false);
    }
  };

  const handleDone = () => {
    navigate("/", { flushSync: true, replace: true });
    reset();
  };

  return (
    <section className="step-page summary-page" aria-labelledby="summary-heading">
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
          onEdit={(step) => navigate(editRoutes[step - 1])}
        />

        <CoachNotice coach={mockCoach} />

        <ShareToggleCard
          enabled={shareEnabled}
          onToggle={() => setShareEnabled((current) => !current)}
          group={mockGroup}
        />
      </div>

      <div className="step-actions">
        {error && <p role="alert">{error}</p>}

        <button
            type="button"
            className="btn-primary"
            onClick={handleSave}
            disabled={saving}
        >
          {saving ? "Sparar..." : "Spara reflektion"}
        </button>
        <button type="button" className="btn-text" onClick={() => navigate("/reflection/note")}>
          Tillbaka
        </button>
      </div>

      <ConfirmationPopup
        open={showConfirmation}
        mood={mood}
        coach={mockCoach}
        sharedWith={shareEnabled ? mockGroup.name : null}
        onClose={handleDone}
      />
    </section>
  );
}