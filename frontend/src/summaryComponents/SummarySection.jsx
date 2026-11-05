
export default function SummarySection({ label, onEdit, children}) {
    return (
        <div className="summary-section">
            <div classname="summary-section-head">
                <span>{label}</span>
                {onEdit && (
                    <button type="button" className="link-button" onClick={onEdit}>
                        Ändra
                    </button>
                )}
            </div>
            {children}
        </div>
    );
}