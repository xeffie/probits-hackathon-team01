import { coachMessages } from '../../../reflectionData/coachMessages';

export default function ParticipantChat({ participantId, participantName }) {
	const messages = coachMessages.filter(
		(message) => message.participantId === participantId,
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
		</section>
	);
}
