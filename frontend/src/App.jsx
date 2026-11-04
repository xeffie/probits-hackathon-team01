import ReflectionNotePage from './pages/reflectionNotePage/ReflectionNotePage';

function App() {
	const testData = testCases[0];

	return (
		<ReflectionNotePage
			{...testData}
			onContinue={(note) => console.log('Fortsätt – anteckning:', note)}
			onSkip={() => console.log('Hoppa över')}
			onBack={() => console.log('Tillbaka')}
		/>
	);
}

export default App;
