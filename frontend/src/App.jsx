import { useState } from 'react';
//import ReflectionTagsPage from './pages/reflectionTagsPage/ReflectionTagsPage';
//import ReflectionNotePage from './pages/reflectionNotePage/ReflectionNotePage';
import CoachPage from './pages/coachPage/CoachPage';
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
			<CoachPage></CoachPage>
		</>
	);
}

export default App;
