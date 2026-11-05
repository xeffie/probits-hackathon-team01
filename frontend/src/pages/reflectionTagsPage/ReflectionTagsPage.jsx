import { useState } from 'react';
import MoodFace from '../../moodComponents/MoodFace';
import './reflectionTagsPage.css';

function ReflectionTagsPage({
	activity = null,
	mood = null,
	initialTags = [],
	currentStep = 2,
	totalSteps = 4,
	onContinue,
	onSkip,
	onBack,
}) {
	const [selectedTags, setSelectedTags] = useState(initialTags);

	return (
		<main className='reflection-tgs'>
			<h1>Vad påverkar ditt mående?</h1>
			<p>Välj det som hänger ihop med hur du mår idag. Du kan välja flera.</p>

			{mood && (
				<div className='reflection-tags__mood'>
					<MoodFace mood={mood} size={24} />
					<span>{mood.label}</span>
				</div>
			)}
		</main>
	);
}

export default ReflectionTagsPage;
