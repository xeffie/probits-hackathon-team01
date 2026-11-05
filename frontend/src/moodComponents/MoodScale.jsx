import MoodFace from "./MoodFace";
import { moods } from "../reflectionData/moods";
import "./MoodScale.css";

export default function MoodScale({ selected, onSelect }) {
  return (
    <div className="mood-scale">
      <p className={`mood-label ${selected ? "is-selected" : ""}`} aria-live="polite">
        {selected?.label ?? "Välj ett alternativ"}
      </p>
      <div className="mood-row" role="radiogroup" aria-label="Välj hur du mår">
        {moods.map((mood) => {
          const isSelected = selected?.id === mood.id;
          return (
            <button
              key={mood.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={mood.label}
              className={`mood-option ${isSelected ? "is-selected" : ""} ${
                selected && !isSelected ? "is-muted" : ""
              }`}
              onClick={() => onSelect(mood)}
            >
              <MoodFace mood={mood} size={48} />
            </button>
          );
        })}
      </div>
    </div>
  );
}