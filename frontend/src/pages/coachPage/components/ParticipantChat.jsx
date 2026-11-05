import { useState } from 'react';
import { coachMessages } from '../../../reflectionData/coachMessages';

export default function ParticipantChat({ participantId, participantName }) {
	const [draft, setDraft] = useState('');

	const [messages, setMessages] = useState(() =>
		coachMessages.filter((message) => message.participantId === participantId),
	);

	return (
		<section className='coach-page__chat'>
			<h2>Chatta med {participantName}</h2>
			<p>Demochatt – meddelanden sparas inte.</p>

			<ul className='coach-page__messages'>
				{messages.map((message) => (
					<li
						key={message.id}
						className={`coach-page__message coach-page__message--${message.sender}`}>
						<p>{message.text}</p>
						<span>{message.time}</span>
					</li>
				))}
			</ul>

			{messages.length === 0 && <p>Inga meddelanden ännu.</p>}

			<form
				className='coach-page__chat-form'
				onSubmit={(event) => {
					event.preventDefault();

					const text = draft.trim();
					if (!text) return;

					const now = new Date();

					setMessages((previousMessages) => [
						...previousMessages,
						{
							id: crypto.randomUUID(),
							participantId,
							sender: 'coach',
							text,
							time: now.toLocaleTimeString('sv-SE', {
								hour: '2-digit',
								minute: '2-digit',
							}),
						},
					]);

					setDraft('');
				}}>
				<label htmlFor='coach-chat-message'>Meddelande</label>

				<input
					id='coach-chat-message'
					type='text'
					placeholder='Skriv ett meddelande'
					value={draft}
					onChange={(event) => setDraft(event.target.value)}
				/>

				<button type='submit' disabled={!draft.trim()}>
					Skicka
				</button>
			</form>
		</section>
	);
}
