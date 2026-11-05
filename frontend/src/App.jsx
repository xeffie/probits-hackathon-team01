import { useState } from 'react';
import ReflectionTagsPage from './pages/reflectionTagsPage/ReflectionTagsPage';
import ReflectionNotePage from './pages/reflectionNotePage/ReflectionNotePage';
import { getMoodById } from './reflectionData/moods';

function App() {
	const [step, setStep] = useState('tags');
	const [tags, setTags] = useState([]);

	const mood = getMoodById(2);
	const activity = {
		id: 1,
		activityName: 'Cykel till jobbet',
	};

	return (
		<>
			{step === 'tags' && (
				<ReflectionTagsPage
					activity={activity}
					mood={mood}
					initialPage={tags}
					onContinue={(selectedTags) => {
						setTags(selectedTags);
						setStep('note');
					}}
					onSkip={() => {
						setTags([]);
						setStep('note');
					}}
					onBack={() => console.log('Tillbaka till mående')}
				/>
			)}

			{step === 'note' && (
				<ReflectionNotePage
					activity={activity}
					mood={mood}
					tags={tags}
					onBack={() => setStep('tags')}
					onContinue={(note) => console.log('Anteckning', note)}
					onSkip={() =>
						console.log('Hoppa över anteckning')
					}></ReflectionNotePage>
			)}
		</>
	);
}

export default App;
