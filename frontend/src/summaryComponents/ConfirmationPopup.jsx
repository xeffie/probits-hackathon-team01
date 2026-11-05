import MoodFace from "../moodComponents/MoodFace";
import { getPeppText } from "../reflectionData/peppTexts";
import "./ConfirmationPopup.css";

export default function ConfirmationPopup({ open, mood, coach, sharedWith, onClose }) {
  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup" role="dialog" aria-modal="true" aria-labelledby="popup-heading">
        <MoodFace mood={mood} size={80} />
        <h2 id="popup-heading">Tack för att du reflekterade</h2>
        <p>{getPeppText(mood.id)}</p>
        <ul className="popup-meta">
          <li>Skickad till din coach {coach.name}</li>
          {sharedWith && <li>Delad med {sharedWith}</li>}
        </ul>
        <button type="button" className="btn-primary" onClick={onClose}>
          Klar
        </button>
      </div>
    </div>
  );
}