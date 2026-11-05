import MoodFace from "../moodComponents/MoodFace";
import SummarySection from "./SummarySection";
import "./SummaryCard.css";

export default function SummaryCard({
  mood,
  tags,
  note,
  activity,
  dateLabel,
  onEdit,
}) {
  const linkedLabel = activity
    ? [activity.name, activity.duration, `${activity.date} ${activity.time}`]
        .filter(Boolean)
        .join(" · ")
    : `Dagens känsla · ${dateLabel}`;

  return (
    <div className="summary-card">
      <SummarySection label="Kopplad till">
        <strong>{linkedLabel}</strong>
      </SummarySection>

      <SummarySection label="Mående" onEdit={() => onEdit?.(1)}>
        <div className="summary-mood">
          <MoodFace mood={mood} size={40} />
          <strong>{mood.label}</strong>
        </div>
      </SummarySection>

      <SummarySection label="Påverkan" onEdit={() => onEdit?.(2)}>
        {tags.length > 0 ? (
          <div className="chip-list">
            {tags.map((tag) => (
              <span key={tag} className="chip-small">
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <span className="muted">Inget valt</span>
        )}
      </SummarySection>

      <SummarySection label="Anteckning" onEdit={() => onEdit?.(3)}>
        {note ? (
          <p className="summary-note">{note}</p>
        ) : (
          <span className="muted">Ingen anteckning</span>
        )}
      </SummarySection>
    </div>
  );
}
