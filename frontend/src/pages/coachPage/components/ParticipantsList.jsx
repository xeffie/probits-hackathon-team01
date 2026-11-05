import MoodFace from '../../../moodComponents/MoodFace';
import { getMoodById } from '../../../reflectionData/moods';

export default function ParticipantsList({
	participants,
	filteredParticipants,
	search,
	onSearchChange,
	onSelect,
}) {
	return (
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
				onChange={(event) => onSearchChange(event.target.value)}
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
								onSelect(participant);
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
	);
}
