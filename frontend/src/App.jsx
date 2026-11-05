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
		<ReflectionTagsPage
			mood={getMoodById(2)}
			onContinue={(tags) => console.log('Valda taggar:', tags)}
			onSkip={() => console.log('Hoppa över - inga taggar')}
			onBack={() => console.log('Tillbaka till mående.')}
			activity={{
				id: 1,
				activityName: 'Cykel till jobbet',
			}}
		/>
	);
}

export default App;
//<ReflectionNotePage activity={activity} mood={mood} tags={tags} />
