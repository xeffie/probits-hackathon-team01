import "./ShareToggleCard.css";

export default function ShareToggleCard({ enabled, onToggle, group }) {
  
    return (
    <section className="share-card">
      <div className="share-head">
        <h2>Dela med din grupp</h2>
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          aria-label="Dela med din grupp"
          className={`toggle ${enabled ? "is-on" : ""}`}
          onClick={onToggle}
        >
          <span />
        </button>
      </div>
      <p className="muted">Få pepp och stöd från {group.name}.</p>
    </section>
    );
}