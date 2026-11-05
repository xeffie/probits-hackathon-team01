import { useState } from 'react';
import MoodFace from '../../moodComponents/MoodFace';
import { getMoodById } from '../../reflectionData/moods';
import { participants } from '../../reflectionData/participants';
import './coachPage.css';

export default function CoachPage() {
	const [search, setSearch] = useState('');
	const [selectedParticipant, setSelectedParticipant] = useState(null);
	const [activeTab, setActiveTab] = useState('overview');

	const filteredParticipants = participants.filter((participant) =>
		participant.name.toLowerCase().includes(search.trim().toLowerCase()),
	);

	if (selectedParticipant) {
		return (
			<main className='coach-page'>
				<button type='button' onClick={() => setSelectedParticipant(null)}>
					← Deltagare
				</button>

				<h1>{selectedParticipant.name}</h1>
				<p>
					<nav aria-label='Deltagarens information'>
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

					{activeTab === 'overview' && <p>Här kommer veckans reflektioner.</p>}
					{activeTab === 'chat' && <p>Här kommer chatten.</p>}
					{activeTab === 'planning' && (
						<p>Här kommer nästa veckas planering.</p>
					)}
				</p>
			</main>
		);
	}

	return (
		<main className='coach-page'>
			<p>Coachvy</p>
			<h1>God morgon, Berit</h1>
			<p>Här är en överblick över deltagarna den här veckan.</p>

			<section
				className='coach-page__participants-card'
				aria-labelledby='participants-heading'>
				<h2 id='participants-heading'>Deltagare</h2>
				<p>{participants.length} deltagare</p>

				<label htmlFor='participant-search'>Sök deltagare</label>
				<input
					id='participant-search'
					type='search'
					className='coach-page__search'
					placeholder='Skriv ett namn'
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>

				<p role='status'>
					{filteredParticipants.length === 0
						? 'Inga deltagare matchar din sökning.'
						: `${filteredParticipants.length} deltagare visas`}
				</p>

				<ul className='coach-page__participants'>
					{filteredParticipants.map((participant) => (
						<li key={participant.id}>
							<button
								className='coach-page__participant'
								type='button'
								onClick={() => {
									setSelectedParticipant(participant);
									setActiveTab('overview');
								}}>
								<span className='coach-page__avatar' aria-hidden='true'>
									{participant.initials}
								</span>

								<span className='coach-page__participant-info'>
									<strong>{participant.name}</strong>
									<span>{participant.lastActive}</span>
								</span>

								<span className='coach-page__participant-mood'>
									<MoodFace mood={getMoodById(participant.moodId)} size={28} />
									<span className='coach-page__mood-label'>
										Senaste mående: {getMoodById(participant.moodId).label}
									</span>
								</span>
							</button>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
