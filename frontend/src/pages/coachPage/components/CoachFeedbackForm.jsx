import { useState } from 'react';
import { api } from "../../../api/api";

export default function CoachFeedbackForm({ participantName }) {
	const [message, setMessage] = useState('');
	const [nextWeekGoal, setNextWeekGoal] = useState('');
	const [isPublished, setIsPublished] = useState(false);
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState(null);

	const handlePublish = async () => {
		if (saving) return;

		setSaving(true);
		setError(null);
		setIsPublished(false);

		const today = new Date();
		const monday = new Date(today);
		const daysSinceMonday = (today.getDay() + 6) % 7;
		monday.setDate(today.getDate() - daysSinceMonday);

		const weekStart = [
			monday.getFullYear(),
			String(monday.getMonth() + 1).padStart(2, "0"),
			String(monday.getDate()).padStart(2, "0"),
		].join("-");

		try {
			const feedback = {
				coachName: "Berit",
				weekStart,
				message: message.trim(),
				nextWeekGoal: nextWeekGoal.trim(),
			};

			const savedFeedback = await api.createCoachFeedback(feedback);

			console.log("Feedback saved:", savedFeedback);
			setIsPublished(true);
		} catch (err) {
			console.error("Failed to publish feedback:", err);
			setError("Kunde inte publicera feedbacken.");
		} finally {
			setSaving(false);
		}
	};


	if (isPublished) {
		return (
			<section className="coach-page__feedback">
				<div style={{ textAlign: "center", padding: "24px 0" }}>
					<h2>Feedbacken har publicerats! ✓</h2>
					<p>Din feedback har sparats.</p>

					<button
						type="button"
						onClick={() => {
							setMessage("");
							setNextWeekGoal("");
							setIsPublished(false);
						}}
					>
						Skriv ny feedback
					</button>
				</div>
			</section>
		);
	}

	return (
		<section className='coach-page__feedback'>
			<h2>Feedback till {participantName}</h2>
			<p>Syns på deltagarens startsida när du publicerar.</p>

			<label htmlFor='coach-feedback'>Veckosammanfattning</label>
			<textarea
				id='coach-feedback'
				value={message}
				onChange={(event) => {
					setMessage(event.target.value);
					setIsPublished(false);
				}}
				maxLength={500}
				rows={6}
			/>

			<p>{message.length}/500</p>

			<label htmlFor='coach-next-week-goal'>Fokus nästa vecka</label>
			<textarea
				id='coach-next-week-goal'
				value={nextWeekGoal}
				onChange={(event) => {
					setNextWeekGoal(event.target.value);
					setIsPublished(false);
				}}
				maxLength={150}
				rows={3}
			/>

			<p>{nextWeekGoal.length}/150</p>

			<button
				type="button"
				disabled={!message.trim() || saving}
				onClick={handlePublish}
			>
				{saving ? "Publicerar..." : "Publicera feedback"}
			</button>

			{error && <p role="alert">{error}</p>}

		</section>
	);
}
