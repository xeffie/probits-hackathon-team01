import { useState } from 'react';

export default function CoachFeedbackForm({ participantName }) {
	const [message, setMessage] = useState('');

	return (
		<section className='coach-page__feedback'>
			<h2>Feedback till {participantName}</h2>
			<p>Syns på deltagarens startsida när du publicerar.</p>

			<label htmlFor='coach-feedback'>Veckosammanfattning</label>
			<textarea
				id='coach-feedback'
				value={message}
				onChange={(event) => setMessage(event.target.value)}
				maxLength={500}
				rows={6}
			/>

			<p>{message.length}/500</p>
		</section>
	);
}
