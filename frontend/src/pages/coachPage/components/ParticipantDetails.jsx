import { useState } from 'react';
import ParticipantOverview from './ParticipantOverview';

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
				<ParticipantOverview reflections={reflections} />
			)}

			{activeTab === 'chat' && <p>Här kommer chatten.</p>}
			{activeTab === 'planning' && <p>Här kommer nästa veckas planering.</p>}
		</main>
	);
}
