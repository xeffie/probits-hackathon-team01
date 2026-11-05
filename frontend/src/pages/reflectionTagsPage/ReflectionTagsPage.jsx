import { useState } from 'react';
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
			<h1>Vaad påverkar ditt mående?</h1>
			<p>Välj det som hänger ihop med hur du mår idag. Du kan välja flera.</p>
		</main>
	);
}

export default ReflectionTagsPage;
