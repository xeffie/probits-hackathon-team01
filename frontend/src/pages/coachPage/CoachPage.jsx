import ParticipantDetails from './components/ParticipantDetails';
import ParticipantsList from './components/ParticipantsList';
import { coachReflections } from '../../reflectionData/coachReflections';
import { useState } from 'react';
import { participants } from '../../reflectionData/participants';
import './coachPage.css';

export default function CoachPage() {
	const [search, setSearch] = useState('');
	const [selectedParticipant, setSelectedParticipant] = useState(null);

	const filteredParticipants = participants.filter((participant) =>
		participant.name.toLowerCase().includes(search.trim().toLowerCase()),
	);

	if (selectedParticipant) {
		const participantReflections = coachReflections.filter(
			(reflection) => reflection.participantId === selectedParticipant.id,
		);
		return (
			<ParticipantDetails
				participant={selectedParticipant}
				reflections={participantReflections}
				onBack={() => setSelectedParticipant(null)}
			/>
		);
	}

	return (
		<main className='coach-page'>
			<p>Coachvy</p>
			<h1>God morgon, Berit</h1>
			<p>Här är en överblick över deltagarna den här veckan.</p>

			<ParticipantsList
				participants={participants}
				filteredParticipants={filteredParticipants}
				search={search}
				onSearchChange={setSearch}
				onSelect={(participant) => {
					setSelectedParticipant(participant);
				}}
			/>
		</main>
	);
}
