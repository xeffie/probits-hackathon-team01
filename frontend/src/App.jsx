//import ReflectionNotePage from './pages/reflectionNotePage/ReflectionNotePage';
import ReflectionTagsPage from './pages/reflectionTagsPage/ReflectionTagsPage';
import { getMoodById } from './reflectionData/moods';

function App() {
	return (
		<ReflectionTagsPage
			mood={getMoodById(2)}
			onContinue={(tags) => console.log('Valda taggar:', tags)}
			onSkip={() => console.log('Hoppa över - inga taggar')}
		/>
	);
}

export default App;
//<ReflectionNotePage activity={activity} mood={mood} tags={tags} />
