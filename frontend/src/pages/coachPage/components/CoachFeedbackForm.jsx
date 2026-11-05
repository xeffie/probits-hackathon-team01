import { useState } from 'react';

export default function CoachFeedbackForm({ participantName }) {
	const [message, setMessage] = useState('');
	const [nextWeekGoal, setNextWeekGoal] = useState('');
	const [isPublished, setIsPublished] = useState(false);

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
				type='button'
				disabled={!message.trim()}
				onClick={() => {
					console.log({
						coachName: 'Berit',
						message: message.trim(),
						nextWeekGoal: nextWeekGoal.trim(),
					});

					setIsPublished(true);
				}}>
				Publicera feedback
			</button>

			{isPublished && <p role='status'>Feedbacken är publicerad i demon:</p>}
		</section>
	);
}
