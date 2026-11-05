import ReflectionNotePage from './pages/reflectionNotePage/ReflectionNotePage';
import ReflectionTagsPage from './pages/reflectionTagsPage/ReflectionTagsPage';

function App() {
	return (
		<>
			<ReflectionTagsPage />
			<ReflectionNotePage activity={activity} mood={mood} tags={tags} />
		</>
	);
}

export default App;
