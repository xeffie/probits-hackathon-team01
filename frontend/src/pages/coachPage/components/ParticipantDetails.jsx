import { useState } from 'react';
import { coachMessages } from '../../../reflectionData/coachMessages';
import CoachFeedbackForm from './CoachFeedbackForm';
import ParticipantOverview from './ParticipantOverview';
import ParticipantChat from './ParticipantChat.jsx.jsx';

export default function ParticipantDetails({
	participant,
	reflections,
	onBack,
}) {
	const [activeTab, setActiveTab] = useState('overview');

	return (
		<main className='coach-page'>
			<button type='button' onClick={onBack}>
				← Deltagare
			</button>

			<h1>{participant.name}</h1>
			<nav className='coach-page__tabs' aria-label='Deltagarens information'>
				<button
					type='button'
					aria-pressed={activeTab === 'overview'}
					onClick={() => setActiveTab('overview')}>
					Översikt
				</button>

				<button
					type='button'
					aria-pressed={activeTab === 'chat'}
					onClick={() => setActiveTab('chat')}>
					Chatt
				</button>

				<button
					type='button'
					aria-pressed={activeTab === 'planning'}
					onClick={() => setActiveTab('planning')}>
					Nästa vecka
				</button>
			</nav>

			{activeTab === 'overview' && (
				<>
					<ParticipantOverview reflections={reflections} />
					<CoachFeedbackForm participantName={participant.name} />
				</>
			)}

			{activeTab === 'chat' && (
				<ParticipantChat
					participantId={participant.id}
					participantName={participant.name}
				/>
			)}
			{activeTab === 'planning' && <p>Här kommer nästa veckas planering.</p>}
		</main>
	);
}
