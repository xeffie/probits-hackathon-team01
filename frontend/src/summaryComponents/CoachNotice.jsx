import "./CoachNotice.css";

export default function CoachNotice({ coach }) {
    return (
        <div className="coach-notice" role="note">
            <span className="coach-avatar" aria-hidden="true">{coach.initials}</span>
            <div>
                <strong>Skickas till din coach: {coach.name}</strong>
                <p>{coach.name} ser hela reflektionen, även anteckningen, och kan stötta dig i din utveckling.</p>
            </div>
        </div>
    );
}